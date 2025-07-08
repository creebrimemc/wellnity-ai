import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Star, CheckCircle, Apple, Play } from "lucide-react"
import Image from "next/image"
import { SupportButton } from "@/components/support-button"

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Şimdi İndirin</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  Wellnity AI'ı
                  <br />
                  <span className="text-green-600">Telefonunuza İndirin</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Wellnity AI uygulamasını indirin ve bugün kişiselleştirilmiş fitness yolculuğunuzu başlatın. iOS ve
                  Android'de mevcut.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-black hover:bg-gray-800">
                  <Link href="#" className="flex items-center">
                    <Apple className="mr-3 h-6 w-6" />
                    <div className="text-left">
                      <div className="text-xs">İndir</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-black hover:bg-gray-800">
                  <Link href="#" className="flex items-center">
                    <Play className="mr-3 h-6 w-6" />
                    <div className="text-left">
                      <div className="text-xs">İndir</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">
                  10.000+ indirme ile <span className="font-semibold">4.9/5</span> puan
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 flex justify-center gap-4">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt="Wellnity AI iPhone Uygulaması"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-2xl transform -rotate-12"
                />
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt="Wellnity AI Android Uygulaması"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-2xl transform rotate-12"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">İhtiyacınız Olan Her Şey Tek Uygulamada</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI destekli fitness koçluğunun tüm gücünü cebinizde deneyimleyin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>AI Kişisel Antrenör</CardTitle>
                <CardDescription>
                  Antrenmanlarınız sırasında gerçek zamanlı koçluk ve form düzeltmesi alın
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Özel Antrenman Planları</CardTitle>
                <CardDescription>
                  İlerlemenize ve tercihlerinize uyum sağlayan kişiselleştirilmiş rutinler
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>İlerleme Takibi</CardTitle>
                <CardDescription>Fitness yolculuğunuzu izlemek için detaylı analitik ve içgörüler</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Aksiyonda Görün</h2>
            <p className="text-xl text-gray-600">Wellnity AI uygulama arayüzüne bir göz atın</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=500&width=250"
                alt="Antrenman Ekranı"
                width={250}
                height={500}
                className="mx-auto rounded-3xl shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Antrenman Koçu</h3>
              <p className="text-gray-600">Antrenmanlarınız sırasında gerçek zamanlı form analizi ve koçluk</p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=500&width=250"
                alt="İlerleme Ekranı"
                width={250}
                height={500}
                className="mx-auto rounded-3xl shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">İlerleme Panosu</h3>
              <p className="text-gray-600">Detaylı analitik ve içgörülerle gelişiminizi takip edin</p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=500&width=250"
                alt="Topluluk Ekranı"
                width={250}
                height={500}
                className="mx-auto rounded-3xl shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Topluluk Merkezi</h3>
              <p className="text-gray-600">Diğer kullanıcılarla bağlantı kurun ve fitness yolculuğunuzu paylaşın</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sistem Gereksinimleri</h2>
            <p className="text-xl text-gray-600">Cihazınızın uyumlu olduğundan emin olun</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Apple className="h-8 w-8" />
                  <CardTitle>iOS Gereksinimleri</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• iOS 14.0 veya üzeri</li>
                  <li>• iPhone 8 veya daha yeni</li>
                  <li>• Minimum 2GB RAM</li>
                  <li>• 500MB boş depolama</li>
                  <li>• Form analizi için kamera erişimi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Play className="h-8 w-8" />
                  <CardTitle>Android Gereksinimleri</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Android 8.0 (API seviye 26) veya üzeri</li>
                  <li>• Minimum 3GB RAM</li>
                  <li>• 500MB boş depolama</li>
                  <li>• Form analizi için kamera erişimi</li>
                  <li>• OpenGL ES 3.0 desteği</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fitness Yolculuğunuzu Başlatmaya Hazır mısınız?</h2>
          <p className="text-xl mb-8 opacity-90">Wellnity AI'ı şimdi indirin ve ilk haftanızı ücretsiz alın</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="#" className="flex items-center">
                <Apple className="mr-3 h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">İndir</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#" className="flex items-center">
                <Play className="mr-3 h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">İndir</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <SupportButton />
    </div>
  )
}
