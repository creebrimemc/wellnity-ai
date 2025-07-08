"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Eye, EyeOff, User, Mail, Lock, AlertCircle } from "lucide-react"
import { SupportButton } from "@/components/support-button"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fitnessLevel: "",
    goals: "",
    agreeToTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Şifreler eşleşmiyor")
      setIsLoading(false)
      return
    }

    if (!formData.agreeToTerms) {
      setError("Hizmet şartlarını kabul etmelisiniz")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          fitnessLevel: formData.fitnessLevel,
          goals: formData.goals,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Kayıt olurken bir hata oluştu")
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/login")
      }, 2000)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Kayıt olurken bir hata oluştu")
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <Navigation />
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <Card className="shadow-2xl border-0">
              <CardContent className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Kayıt Başarılı!</h2>
                <p className="text-gray-600 mb-4">
                  Hesabınız başarıyla oluşturuldu. Giriş sayfasına yönlendiriliyorsunuz...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
        <SupportButton />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Navigation />

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Benefits */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">Yolculuğunuzu Başlatın</Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Bugün Wellnity AI'a Katılın</h1>
                <p className="text-xl text-gray-600">
                  Kişiselleştirilmiş AI fitness koçunuzla başlayın ve sağlık yolculuğunuzu dönüştürün.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Kişiselleştirilmiş AI Koçluğu</h3>
                    <p className="text-gray-600">
                      Fitness seviyenize ve hedeflerinize özel olarak uyarlanmış antrenman planları alın
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Gerçek Zamanlı Form Düzeltmesi</h3>
                    <p className="text-gray-600">
                      Yaralanmaları önlemek ve sonuçları maksimize etmek için AI destekli form analizi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">İlerleme Takibi</h3>
                    <p className="text-gray-600">
                      Fitness yolculuğunuzu izlemek ve kilometre taşlarını kutlamak için gelişmiş analitik
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Topluluk Desteği</h3>
                    <p className="text-gray-600">
                      Benzer düşünen fitness meraklılarıyla bağlantı kurun ve ilerlemenizi paylaşın
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Ücretsiz Hesabınızda Neler Var:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sonsuza kadar ücretsiz plan</li>
                  <li>• Sınırsız AI koçluk seansları</li>
                  <li>• Tüm antrenman programlarına erişim</li>
                  <li>• İlerleme takibi ve analitik</li>
                  <li>• Topluluk erişimi</li>
                </ul>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <Card className="shadow-2xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Hesabınızı Oluşturun</CardTitle>
                <CardDescription>
                  Bugün sonsuza kadar ücretsiz planınızı başlatın. Kredi kartı gerekmez.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {error && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Ad</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Soyad</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username">Kullanıcı Adı</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="username"
                        placeholder="kullanici_adi"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta Adresi</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="ornek@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Şifre</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Güçlü bir şifre oluşturun"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      En az 8 karakter, büyük harf, küçük harf, rakam ve özel karakter içermelidir
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Şifre Onayı</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Şifrenizi tekrar girin"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fitnessLevel">Mevcut Fitness Seviyesi</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, fitnessLevel: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Fitness seviyenizi seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Başlangıç</SelectItem>
                        <SelectItem value="intermediate">Orta</SelectItem>
                        <SelectItem value="advanced">İleri</SelectItem>
                        <SelectItem value="athlete">Atlet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goals">Birincil Fitness Hedefi</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, goals: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Birincil hedefinizi seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weight-loss">Kilo Verme</SelectItem>
                        <SelectItem value="muscle-gain">Kas Kazanımı</SelectItem>
                        <SelectItem value="endurance">Dayanıklılığı Artırma</SelectItem>
                        <SelectItem value="strength">Güç Geliştirme</SelectItem>
                        <SelectItem value="general">Genel Fitness</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      <Link href="/terms" className="text-green-600 hover:underline">
                        Hizmet Şartları
                      </Link>{" "}
                      ve{" "}
                      <Link href="/privacy" className="text-green-600 hover:underline">
                        Gizlilik Politikası
                      </Link>
                      'nı kabul ediyorum
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Hesap oluşturuluyor..." : "Ücretsiz Başlayın"}
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    Zaten hesabınız var mı?{" "}
                    <Link href="/login" className="text-green-600 hover:underline font-medium">
                      Giriş yapın
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <SupportButton />
    </div>
  )
}
