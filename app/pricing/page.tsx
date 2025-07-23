"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X } from "lucide-react"
import SupportButton from "@/components/support-button"
import { useLanguage } from "@/hooks/use-language"

export default function PricingPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">{t.pricing.badge}</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t.pricing.title}
            <span className="text-green-600">{t.pricing.titleHighlight}</span>
            {t.pricing.titleEnd && <br />}
            {t.pricing.titleEnd}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">{t.pricing.subtitle}</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t.pricing.plans.free.name}</CardTitle>
                <CardDescription>{t.pricing.plans.free.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{t.pricing.plans.free.price}</span>
                  <span className="text-gray-600"> {t.pricing.plans.free.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full bg-transparent" variant="outline">
                  <Link href="/signup">{t.pricing.plans.free.cta}</Link>
                </Button>

                <div className="space-y-3">
                  {t.pricing.plans.free.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {t.pricing.plans.free.notIncluded.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <X className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-green-500 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white px-4 py-1">{t.pricing.plans.pro.popular}</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t.pricing.plans.pro.name}</CardTitle>
                <CardDescription>{t.pricing.plans.pro.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{t.pricing.plans.pro.price}</span>
                  <span className="text-gray-600">{t.pricing.plans.pro.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/signup">{t.pricing.plans.pro.cta}</Link>
                </Button>

                <div className="space-y-3">
                  {t.pricing.plans.pro.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Elite Plan */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t.pricing.plans.elite.name}</CardTitle>
                <CardDescription>{t.pricing.plans.elite.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{t.pricing.plans.elite.price}</span>
                  <span className="text-gray-600">{t.pricing.plans.elite.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full bg-transparent" variant="outline">
                  <Link href="/signup">{t.pricing.plans.elite.cta}</Link>
                </Button>

                <div className="space-y-3">
                  {t.pricing.plans.elite.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.pricing.faq.title}</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.pricing.faq.questions.cancel.question}</h3>
              <p className="text-gray-600">{t.pricing.faq.questions.cancel.answer}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t.pricing.faq.questions.reallyFree.question}
              </h3>
              <p className="text-gray-600">{t.pricing.faq.questions.reallyFree.answer}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.pricing.faq.questions.refund.question}</h3>
              <p className="text-gray-600">{t.pricing.faq.questions.refund.answer}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t.pricing.faq.questions.changePlans.question}
              </h3>
              <p className="text-gray-600">{t.pricing.faq.questions.changePlans.answer}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SupportButton />
    </div>
  )
}
