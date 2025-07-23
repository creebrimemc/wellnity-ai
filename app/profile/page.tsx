"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Mail,
  Calendar,
  Target,
  Activity,
  Settings,
  LogOut,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import SupportButton from "@/components/support-button"
import { useLanguage } from "@/hooks/use-language"

interface UserProfile {
  id: string
  username: string
  email: string
  firstName: string
  lastName: string
  fitnessLevel: string
  goals: string
  createdAt: string
  lastLogin?: string
  isEmailVerified: boolean
}

export default function ProfilePage() {
  const { t } = useLanguage()
  const { data: session, status } = useSession()
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  })

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
      return
    }

    if (status === "authenticated") {
      fetchProfile()
    }
  }, [status, router])

  const fetchProfile = async () => {
    try {
      const response = await fetch("/api/user/profile")
      if (response.ok) {
        const data = await response.json()
        setProfile(data.user)
      } else {
        setError(t.common.error)
      }
    } catch (error) {
      setError(t.common.error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateProfile = async (updatedData: Partial<UserProfile>) => {
    setIsUpdating(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })

      if (response.ok) {
        const data = await response.json()
        setProfile(data.user)
        setSuccess(t.profile.edit.success)
      } else {
        const data = await response.json()
        setError(data.error || t.common.error)
      }
    } catch (error) {
      setError(t.common.error)
    } finally {
      setIsUpdating(false)
    }
  }

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault()

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("New passwords don't match")
      return
    }

    // In a real app, you would call an API to update the password
    setSuccess(t.profile.security.changePasswordForm.success)
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
    setShowPasswordForm(false)
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" })
  }

  const getFitnessLevelText = (level: string) => {
    return t.profile.fitnessLevels[level as keyof typeof t.profile.fitnessLevels] || level
  }

  const getGoalsText = (goal: string) => {
    return t.profile.goals[goal as keyof typeof t.profile.goals] || goal
  }

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <Navigation />
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <Navigation />
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile Not Found</h1>
            <Button onClick={() => router.push("/")} className="bg-green-600 hover:bg-green-700">
              Go Home
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Navigation />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{t.profile.title}</h1>
                <p className="text-gray-600">{t.profile.subtitle}</p>
              </div>
              <Button
                onClick={handleSignOut}
                variant="outline"
                className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
              >
                <LogOut className="mr-2 h-4 w-4" />
                {t.profile.logout}
              </Button>
            </div>
          </div>

          {/* Alerts */}
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">{success}</AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">{t.profile.tabs.profile}</TabsTrigger>
              <TabsTrigger value="security">{t.profile.tabs.security}</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              {/* Profile Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    {t.profile.overview.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">{t.profile.overview.fullName}</p>
                          <p className="font-medium">
                            {profile.firstName} {profile.lastName}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">{t.profile.overview.email}</p>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{profile.email}</p>
                            {profile.isEmailVerified ? (
                              <Badge className="bg-green-100 text-green-800">{t.profile.overview.verified}</Badge>
                            ) : (
                              <Badge variant="outline" className="text-orange-600 border-orange-600">
                                {t.profile.overview.unverified}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">{t.profile.overview.memberSince}</p>
                          <p className="font-medium">{new Date(profile.createdAt).toLocaleDateString("tr-TR")}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Activity className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">{t.profile.overview.fitnessLevel}</p>
                          <p className="font-medium">{getFitnessLevelText(profile.fitnessLevel)}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Target className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500">{t.profile.overview.goal}</p>
                          <p className="font-medium">{getGoalsText(profile.goals)}</p>
                        </div>
                      </div>

                      {profile.lastLogin && (
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-500">{t.profile.overview.lastLogin}</p>
                            <p className="font-medium">{new Date(profile.lastLogin).toLocaleDateString("tr-TR")}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Edit Profile */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.profile.edit.title}</CardTitle>
                  <CardDescription>{t.profile.edit.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      const formData = new FormData(e.currentTarget)
                      updateProfile({
                        firstName: formData.get("firstName") as string,
                        lastName: formData.get("lastName") as string,
                        fitnessLevel: formData.get("fitnessLevel") as string,
                        goals: formData.get("goals") as string,
                      })
                    }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t.profile.edit.firstName}</Label>
                        <Input id="firstName" name="firstName" defaultValue={profile.firstName} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t.profile.edit.lastName}</Label>
                        <Input id="lastName" name="lastName" defaultValue={profile.lastName} required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fitnessLevel">{t.profile.edit.fitnessLevel}</Label>
                        <Select name="fitnessLevel" defaultValue={profile.fitnessLevel}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">{t.profile.fitnessLevels.beginner}</SelectItem>
                            <SelectItem value="intermediate">{t.profile.fitnessLevels.intermediate}</SelectItem>
                            <SelectItem value="advanced">{t.profile.fitnessLevels.advanced}</SelectItem>
                            <SelectItem value="athlete">{t.profile.fitnessLevels.athlete}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="goals">{t.profile.edit.goals}</Label>
                        <Select name="goals" defaultValue={profile.goals}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weight-loss">{t.profile.goals["weight-loss"]}</SelectItem>
                            <SelectItem value="muscle-gain">{t.profile.goals["muscle-gain"]}</SelectItem>
                            <SelectItem value="endurance">{t.profile.goals.endurance}</SelectItem>
                            <SelectItem value="strength">{t.profile.goals.strength}</SelectItem>
                            <SelectItem value="general">{t.profile.goals.general}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isUpdating}>
                      {isUpdating ? t.profile.edit.updating : t.profile.edit.updateProfile}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              {/* Security Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    {t.profile.security.title}
                  </CardTitle>
                  <CardDescription>{t.profile.security.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{t.profile.security.password.title}</h4>
                      <p className="text-sm text-gray-500">{t.profile.security.password.lastUpdated}</p>
                    </div>
                    <Button variant="outline" onClick={() => setShowPasswordForm(!showPasswordForm)}>
                      {t.profile.security.password.changePassword}
                    </Button>
                  </div>

                  {showPasswordForm && (
                    <Card className="border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-lg">{t.profile.security.changePasswordForm.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handlePasswordUpdate} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="currentPassword">
                              {t.profile.security.changePasswordForm.currentPassword}
                            </Label>
                            <div className="relative">
                              <Input
                                id="currentPassword"
                                type={showPasswords.current ? "text" : "password"}
                                value={passwordData.currentPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                className="pr-10"
                                required
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPasswords({ ...showPasswords, current: !showPasswords.current })}
                              >
                                {showPasswords.current ? (
                                  <EyeOff className="h-4 w-4 text-gray-400" />
                                ) : (
                                  <Eye className="h-4 w-4 text-gray-400" />
                                )}
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="newPassword">{t.profile.security.changePasswordForm.newPassword}</Label>
                            <div className="relative">
                              <Input
                                id="newPassword"
                                type={showPasswords.new ? "text" : "password"}
                                value={passwordData.newPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                className="pr-10"
                                required
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPasswords({ ...showPasswords, new: !showPasswords.new })}
                              >
                                {showPasswords.new ? (
                                  <EyeOff className="h-4 w-4 text-gray-400" />
                                ) : (
                                  <Eye className="h-4 w-4 text-gray-400" />
                                )}
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="confirmPassword">
                              {t.profile.security.changePasswordForm.confirmPassword}
                            </Label>
                            <div className="relative">
                              <Input
                                id="confirmPassword"
                                type={showPasswords.confirm ? "text" : "password"}
                                value={passwordData.confirmPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                className="pr-10"
                                required
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPasswords({ ...showPasswords, confirm: !showPasswords.confirm })}
                              >
                                {showPasswords.confirm ? (
                                  <EyeOff className="h-4 w-4 text-gray-400" />
                                ) : (
                                  <Eye className="h-4 w-4 text-gray-400" />
                                )}
                              </Button>
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Button type="submit" className="bg-green-600 hover:bg-green-700">
                              {t.profile.security.changePasswordForm.updatePassword}
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => {
                                setShowPasswordForm(false)
                                setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
                              }}
                            >
                              {t.profile.security.changePasswordForm.cancel}
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  )}

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{t.profile.security.emailVerification.title}</h4>
                      <p className="text-sm text-gray-500">
                        {profile.isEmailVerified
                          ? t.profile.security.emailVerification.verified
                          : t.profile.security.emailVerification.unverified}
                      </p>
                    </div>
                    {!profile.isEmailVerified && (
                      <Button variant="outline">{t.profile.security.emailVerification.sendVerification}</Button>
                    )}
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg border-red-200 bg-red-50">
                    <div>
                      <h4 className="font-medium text-red-900">{t.profile.security.deleteAccount.title}</h4>
                      <p className="text-sm text-red-700">{t.profile.security.deleteAccount.description}</p>
                    </div>
                    <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent">
                      {t.profile.security.deleteAccount.button}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
      <SupportButton />
    </div>
  )
}
