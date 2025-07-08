import { type NextRequest, NextResponse } from "next/server"
import { verifyResetToken, updateUser } from "@/lib/auth"
import { z } from "zod"
import bcrypt from "bcryptjs"

const resetPasswordSchema = z.object({
  token: z.string().min(1, "Token is required"),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const { token, password } = resetPasswordSchema.parse(body)

    // Verify reset token
    const user = await verifyResetToken(token)
    if (!user) {
      return NextResponse.json({ error: "Invalid or expired reset token" }, { status: 400 })
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Update user password and clear reset token
    await updateUser(user.id, {
      password: hashedPassword,
      resetToken: undefined,
      resetTokenExpiry: undefined,
    })

    return NextResponse.json({ message: "Password reset successfully" }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
