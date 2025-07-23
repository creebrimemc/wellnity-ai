"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Mail, Phone, MessageSquare, HelpCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export function SupportButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <>
      {/* Floating Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full w-14 h-14 bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-200 animate-pulse"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}

        {/* Support Panel */}
        {isOpen && (
          <Card className="w-80 shadow-2xl border-0 animate-in slide-in-from-bottom-2 duration-200">
            <CardHeader className="bg-green-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <CardTitle className="text-lg">{t.support.title}</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-700 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription className="text-green-100">{t.support.subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800">{t.support.onlineNow}</Badge>
                <span className="text-sm text-gray-600">{t.support.avgResponse}</span>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                  <Link href="#" className="flex items-center gap-3">
                    <MessageSquare className="h-4 w-4 text-green-600" />
                    <div className="text-left">
                      <div className="font-medium">{t.support.liveChat.title}</div>
                      <div className="text-xs text-gray-500">{t.support.liveChat.description}</div>
                    </div>
                  </Link>
                </Button>

                <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                  <Link href="mailto:support@wellnityai.com" className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-green-600" />
                    <div className="text-left">
                      <div className="font-medium">{t.support.emailSupport.title}</div>
                      <div className="text-xs text-gray-500">{t.support.emailSupport.description}</div>
                    </div>
                  </Link>
                </Button>

                <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                  <Link href="tel:+15551234567" className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-green-600" />
                    <div className="text-left">
                      <div className="font-medium">{t.support.phoneSupport.title}</div>
                      <div className="text-xs text-gray-500">{t.support.phoneSupport.description}</div>
                    </div>
                  </Link>
                </Button>

                <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                  <Link href="/help" className="flex items-center gap-3">
                    <HelpCircle className="h-4 w-4 text-green-600" />
                    <div className="text-left">
                      <div className="font-medium">{t.support.helpCenter.title}</div>
                      <div className="text-xs text-gray-500">{t.support.helpCenter.description}</div>
                    </div>
                  </Link>
                </Button>
              </div>

              <div className="pt-3 border-t">
                <p className="text-xs text-gray-500 text-center">
                  {t.support.emergency}{" "}
                  <Link href="tel:+15551234567" className="text-green-600 hover:underline">
                    +1 (555) 123-4567
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}
