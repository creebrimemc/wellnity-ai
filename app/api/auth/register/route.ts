import { type NextRequest, NextResponse } from "next/server"
import { registerSchema, createUser } from "@/lib/auth"
import { z } from "zod"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = registerSchema.parse(body)

    // Create user
    const user = await createUser(validatedData)

    return NextResponse.json(
      {
        message: "Kullanıcı başarıyla oluşturuldu",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Registration error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Doğrulama hatası",
          details: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 },
      )
    }

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ error: "Kayıt olurken bir hata oluştu" }, { status: 500 })
  }
}
