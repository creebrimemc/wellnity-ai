import { z } from "zod"
import bcrypt from "bcryptjs"

// User validation schemas
export const registerSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    ),
  firstName: z.string().min(1, "First name is required").max(50, "First name is too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name is too long"),
  fitnessLevel: z.enum(["beginner", "intermediate", "advanced", "athlete"]),
  goals: z.enum(["weight-loss", "muscle-gain", "endurance", "strength", "general"]),
})

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

export const passwordResetSchema = z.object({
  email: z.string().email("Invalid email address"),
})

// Mock database - In production, use a real database
const users: Array<{
  id: string
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  fitnessLevel: string
  goals: string
  createdAt: Date
  lastLogin?: Date
  isEmailVerified: boolean
  resetToken?: string
  resetTokenExpiry?: Date
}> = []

// Helper functions
export async function createUser(data: z.infer<typeof registerSchema>) {
  try {
    // Check if user already exists
    const existingUser = users.find((u) => u.email === data.email || u.username === data.username)
    if (existingUser) {
      if (existingUser.email === data.email) {
        throw new Error("Bu e-posta adresi zaten kullanılıyor")
      }
      if (existingUser.username === data.username) {
        throw new Error("Bu kullanıcı adı zaten kullanılıyor")
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 12)

    // Create user
    const user = {
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      username: data.username,
      email: data.email,
      password: hashedPassword,
      firstName: data.firstName,
      lastName: data.lastName,
      fitnessLevel: data.fitnessLevel,
      goals: data.goals,
      createdAt: new Date(),
      isEmailVerified: false,
    }

    users.push(user)
    return user
  } catch (error) {
    console.error("Create user error:", error)
    throw error
  }
}

export async function getUserByEmail(email: string) {
  return users.find((u) => u.email === email)
}

export async function getUserById(id: string) {
  return users.find((u) => u.id === id)
}

export async function updateUser(id: string, data: Partial<(typeof users)[0]>) {
  const userIndex = users.findIndex((u) => u.id === id)
  if (userIndex === -1) {
    throw new Error("User not found")
  }

  users[userIndex] = { ...users[userIndex], ...data }
  return users[userIndex]
}

export async function generateResetToken(email: string) {
  const user = await getUserByEmail(email)
  if (!user) {
    // Don't reveal if email exists or not for security
    return "dummy-token"
  }

  const resetToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  const resetTokenExpiry = new Date(Date.now() + 3600000) // 1 hour

  await updateUser(user.id, { resetToken, resetTokenExpiry })
  return resetToken
}

export async function verifyResetToken(token: string) {
  const user = users.find((u) => u.resetToken === token && u.resetTokenExpiry && u.resetTokenExpiry > new Date())
  return user
}
