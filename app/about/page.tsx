import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, Users, Award, Zap, Shield } from "lucide-react"
import Image from "next/image"
import { SupportButton } from "@/components/support-button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">Wellnity AI Hakkında</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Fitness'ı
            <span className="text-green-600"> Yapay Zeka</span> ile Devrimleştiriyoruz
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Herkesin kişiselleştirilmiş, akıllı fitness koçluğuna erişimi olması gerektiğine inanıyoruz. Misyonumuz,
            profesyonel kalitede fitness rehberliğini herkese, her yerde, her zaman erişilebilir kılmaktır.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  2023 yılında fitness meraklıları ve AI araştırmacılarından oluşan bir ekip tarafından kurulan Wellnity
                  AI, basit bir gözlemden doğdu: geleneksel fitness uygulamaları herkese uyan tek boyutluydu, ancak her
                  vücut benzersizdir.
                </p>
                <p>
                  Gerçekten kişiselleştirilmiş bir deneyim yaratmak için son teknoloji yapay zekayı onlarca yıllık
                  fitness uzmanlığıyla birleştirdik. AI'ımız sadece tekrar saymıyor - formunuzu anlıyor, ilerlemenize
                  uyum sağlıyor ve fitness yolculuğunuzla birlikte gelişiyor.
                </p>
                <p>
                  Bugün, dünya çapında 50.000'den fazla kullanıcıya hizmet vermekten gurur duyuyoruz ve onların AI'ın
                  gücüyle fitness hedeflerine ulaşmalarına yardımcı oluyoruz.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Wellnity AI üzerinde çalışan ekip"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-xl text-gray-600">Yaptığımız her şeye rehberlik eden ilkeler</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>İnovasyon</CardTitle>
                <CardDescription>
                  AI ve fitness teknolojisiyle mümkün olanın sınırlarını sürekli zorluyoruz
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Kapsayıcılık</CardTitle>
                <CardDescription>
                  Fitness, yaş, yetenek veya deneyim seviyesi fark etmeksizin herkes içindir
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Gizlilik</CardTitle>
                <CardDescription>
                  Sağlık verileriniz kutsaldır. Bilgilerinizi korumak için kurumsal düzeyde güvenlik kullanıyoruz
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Sonuçlar</CardTitle>
                <CardDescription>
                  Gerçek, ölçülebilir fitness sonuçları elde etmenize yardımcı olmaya takıntılıyız
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>Sadelik</CardTitle>
                <CardDescription>Karmaşık AI teknolojisi basit ve sezgisel kullanım hissi vermelidir</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Mükemmellik</CardTitle>
                <CardDescription>Ürünümüzün ve hizmetimizin her alanında mükemmellik için çabalıyoruz</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ekibimizle Tanışın</h2>
            <p className="text-xl text-gray-600">Wellnity AI'ın arkasındaki uzmanlar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Sarah Chen"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Sarah Chen</CardTitle>
                <CardDescription>CEO ve Kurucu Ortak</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Makine öğrenmesi ve fitness teknolojisinde 10+ yıl deneyime sahip eski Google AI araştırmacısı
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Marcus Rodriguez"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Marcus Rodriguez</CardTitle>
                <CardDescription>CTO ve Kurucu Ortak</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fitness uzmanlığını teknoloji ile birleştiren sertifikalı kişisel antrenör ve yazılım mühendisi
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Dr. Emily Watson"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Dr. Emily Watson</CardTitle>
                <CardDescription>Spor Bilimleri Başkanı</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Egzersiz Fizyolojisi doktoru, 15+ yıl deneyime sahip eski Olimpik takım danışmanı
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <SupportButton />
    </div>
  )
}
