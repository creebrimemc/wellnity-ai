import { type NextRequest, NextResponse } from "next/server"
import { passwordResetSchema, generateResetToken } from "@/lib/auth"
import { z } from "zod"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const { email } = passwordResetSchema.parse(body)

    // Generate reset token (always returns success for security)
    await generateResetToken(email)

    // In production, send email with reset link
    console.log(`Password reset requested for: ${email}`)

    return NextResponse.json(
      {
        message: "Eğer bu e-posta adresi sistemimizde kayıtlıysa, şifre sıfırlama bağlantısı gönderilmiştir",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Password reset error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Geçersiz e-posta adresi" }, { status: 400 })
    }

    // Always return success message for security (don't reveal if email exists)
    return NextResponse.json(
      {
        message: "Eğer bu e-posta adresi sistemimizde kayıtlıysa, şifre sıfırlama bağlantısı gönderilmiştir",
      },
      { status: 200 },
    )
  }
}
