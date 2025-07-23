"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Star, CheckCircle, Apple, Play } from "lucide-react"
import Image from "next/image"
import SupportButton from "@/components/support-button"
import { useLanguage } from "@/hooks/use-language"

export default function DownloadPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{t.download.badge}</Badge>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  {t.download.title}
                  <br />
                  <span className="text-green-600">{t.download.titleHighlight}</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">{t.download.subtitle}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-black hover:bg-gray-800">
                  <Link href="#" className="flex items-center">
                    <Apple className="mr-3 h-6 w-6" />
                    <div className="text-left">
                      <div className="text-xs">{t.common.download || "Download"}</div>
                      <div className="text-lg font-semibold">{t.download.appStore}</div>
                    </div>
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-black hover:bg-gray-800">
                  <Link href="#" className="flex items-center">
                    <Play className="mr-3 h-6 w-6" />
                    <div className="text-left">
                      <div className="text-xs">{t.common.download || "Download"}</div>
                      <div className="text-lg font-semibold">{t.download.googlePlay}</div>
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
                <p className="text-gray-600">{t.download.rating}</p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 flex justify-center gap-4">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt="Wellnity AI iPhone App"
                  width={300}
                  height={600}
                  className="rounded-3xl shadow-2xl transform -rotate-12"
                />
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt="Wellnity AI Android App"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{t.download.features.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.download.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>{t.download.features.aiTrainer.title}</CardTitle>
                <CardDescription>{t.download.features.aiTrainer.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>{t.download.features.customPlans.title}</CardTitle>
                <CardDescription>{t.download.features.customPlans.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>{t.download.features.progress.title}</CardTitle>
                <CardDescription>{t.download.features.progress.description}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.download.screenshots.title}</h2>
            <p className="text-xl text-gray-600">{t.download.screenshots.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=500&width=250"
                alt="Workout Screen"
                width={250}
                height={500}
                className="mx-auto rounded-3xl shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.download.screenshots.workout.title}</h3>
              <p className="text-gray-600">{t.download.screenshots.workout.description}</p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=500&width=250"
                alt="Progress Screen"
                width={250}
                height={500}
                className="mx-auto rounded-3xl shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.download.screenshots.progress.title}</h3>
              <p className="text-gray-600">{t.download.screenshots.progress.description}</p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=500&width=250"
                alt="Community Screen"
                width={250}
                height={500}
                className="mx-auto rounded-3xl shadow-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.download.screenshots.community.title}</h3>
              <p className="text-gray-600">{t.download.screenshots.community.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.download.requirements.title}</h2>
            <p className="text-xl text-gray-600">{t.download.requirements.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Apple className="h-8 w-8" />
                  <CardTitle>{t.download.requirements.ios.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  {t.download.requirements.ios.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Play className="h-8 w-8" />
                  <CardTitle>{t.download.requirements.android.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  {t.download.requirements.android.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.download.cta.title}</h2>
          <p className="text-xl mb-8 opacity-90">{t.download.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="#" className="flex items-center">
                <Apple className="mr-3 h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">{t.common.download || "Download"}</div>
                  <div className="text-lg font-semibold">{t.download.appStore}</div>
                </div>
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#" className="flex items-center">
                <Play className="mr-3 h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">{t.common.download || "Download"}</div>
                  <div className="text-lg font-semibold">{t.download.googlePlay}</div>
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
