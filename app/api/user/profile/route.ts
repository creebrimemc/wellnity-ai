import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getUserById, updateUser } from "@/lib/auth"
import { z } from "zod"

const updateProfileSchema = z.object({
  firstName: z.string().min(1).max(50).optional(),
  lastName: z.string().min(1).max(50).optional(),
  fitnessLevel: z.enum(["beginner", "intermediate", "advanced", "athlete"]).optional(),
  goals: z.enum(["weight-loss", "muscle-gain", "endurance", "strength", "general"]).optional(),
})

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 })
    }

    const user = await getUserById(session.user.id)
    if (!user) {
      return NextResponse.json({ error: "Kullanıcı bulunamadı" }, { status: 404 })
    }

    // Return user data without sensitive information
    const { password, resetToken, resetTokenExpiry, ...safeUser } = user

    return NextResponse.json({ user: safeUser })
  } catch (error) {
    console.error("Get profile error:", error)
    return NextResponse.json({ error: "Profil bilgileri alınırken bir hata oluştu" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 })
    }

    const body = await request.json()
    const validatedData = updateProfileSchema.parse(body)

    const updatedUser = await updateUser(session.user.id, validatedData)

    // Return updated user data without sensitive information
    const { password, resetToken, resetTokenExpiry, ...safeUser } = updatedUser

    return NextResponse.json({ user: safeUser })
  } catch (error) {
    console.error("Update profile error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Doğrulama hatası", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Profil güncellenirken bir hata oluştu" }, { status: 500 })
  }
}
