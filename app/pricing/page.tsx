import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X } from "lucide-react"
import { SupportButton } from "@/components/support-button"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">Basit Fiyatlandırma</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Fitness Planınızı</span>
            <br />
            Seçin
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ücretsiz deneme ile başlayın, ardından fitness hedeflerinize uygun planı seçin. Tüm planlar AI kişisel
            antrenörümüzü ve form düzeltme teknolojimizi içerir.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Sonsuza Kadar Ücretsiz</CardTitle>
                <CardDescription>Her zaman ücretsiz, zaman sınırı yok</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Ücretsiz</span>
                  <span className="text-gray-600"> Sonsuza Kadar</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full bg-transparent" variant="outline">
                  <Link href="/signup">Ücretsiz Başlayın</Link>
                </Button>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Temel AI antrenman planları</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Form düzeltmesi (5 seans)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>İlerleme takibi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Topluluk erişimi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-400">Gelişmiş AI koçluğu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <X className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-400">Beslenme planlaması</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-green-500 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white px-4 py-1">En Popüler</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>Ciddi fitness meraklıları için</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₺199</span>
                  <span className="text-gray-600">/ay</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/signup">Başlayın</Link>
                </Button>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Sınırsız AI antrenman planları</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Sınırsız form düzeltmesi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Gelişmiş ilerleme analitiği</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Beslenme planlaması</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Öncelikli destek</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Çevrimdışı antrenman indirmeleri</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Elite Plan */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Elite</CardTitle>
                <CardDescription>Profesyonel sporcular için</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₺499</span>
                  <span className="text-gray-600">/ay</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full bg-transparent" variant="outline">
                  <Link href="/signup">Başlayın</Link>
                </Button>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Pro'daki her şey</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Bire bir AI koçluk seansları</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Özel yemek planlaması</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Toparlanma optimizasyonu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Performans analitiği</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>7/24 öncelikli destek</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">İstediğim zaman iptal edebilir miyim?</h3>
              <p className="text-gray-600">
                Evet, aboneliğinizi istediğiniz zaman iptal edebilirsiniz. Uzun vadeli sözleşme veya iptal ücreti
                yoktur.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ücretsiz plan gerçekten sonsuza kadar ücretsiz mi?
              </h3>
              <p className="text-gray-600">
                Evet! Ücretsiz planımız zaman sınırı olmaksızın tamamen ücretsizdir. Ek özelliklerin kilidini açmak için
                istediğiniz zaman Pro veya Elite'e yükseltebilirsiniz.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Para iadesi sunuyor musunuz?</h3>
              <p className="text-gray-600">
                Tüm ücretli planlar için 30 günlük para iade garantisi sunuyoruz. Memnun kalmazsanız, tam iade için
                destek ekibimizle iletişime geçin.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planları daha sonra değiştirebilir miyim?</h3>
              <p className="text-gray-600">
                Hesap ayarlarınızdan istediğiniz zaman planınızı yükseltebilir veya düşürebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SupportButton />
    </div>
  )
}
