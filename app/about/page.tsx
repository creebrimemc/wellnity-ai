"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Target, Users, Award, Zap, Shield } from "lucide-react"
import Image from "next/image"
import SupportButton from "@/components/support-button"
import { useLanguage } from "@/hooks/use-language"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">{t.about.badge}</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.about.title}
            <span className="text-green-600"> {t.about.titleHighlight}</span>
            {t.about.titleEnd && <span> {t.about.titleEnd}</span>}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.about.story.title}</h2>
              <div className="space-y-4 text-gray-600">
                {t.about.story.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Wellnity AI team working"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.values.title}</h2>
            <p className="text-xl text-gray-600">{t.about.values.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>{t.about.values.innovation.title}</CardTitle>
                <CardDescription>{t.about.values.innovation.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>{t.about.values.inclusion.title}</CardTitle>
                <CardDescription>{t.about.values.inclusion.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>{t.about.values.privacy.title}</CardTitle>
                <CardDescription>{t.about.values.privacy.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>{t.about.values.results.title}</CardTitle>
                <CardDescription>{t.about.values.results.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>{t.about.values.simplicity.title}</CardTitle>
                <CardDescription>{t.about.values.simplicity.description}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>{t.about.values.excellence.title}</CardTitle>
                <CardDescription>{t.about.values.excellence.description}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.team.title}</h2>
            <p className="text-xl text-gray-600">{t.about.team.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt={t.about.team.members.sarah.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>{t.about.team.members.sarah.name}</CardTitle>
                <CardDescription>{t.about.team.members.sarah.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.about.team.members.sarah.bio}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt={t.about.team.members.marcus.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>{t.about.team.members.marcus.name}</CardTitle>
                <CardDescription>{t.about.team.members.marcus.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.about.team.members.marcus.bio}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt={t.about.team.members.emily.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>{t.about.team.members.emily.name}</CardTitle>
                <CardDescription>{t.about.team.members.emily.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.about.team.members.emily.bio}</p>
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
