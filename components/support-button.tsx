"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Mail, Phone, MessageSquare, HelpCircle, Clock, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function SupportButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  // ... rest of the component code stays the same ...

  return (
    <>
      {/* Floating Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full w-16 h-16 bg-green-600 hover:bg-green-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            aria-label={t.support.title}
          >
            <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform duration-200" />
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20"></div>
          </Button>
        )}

        {/* Enhanced Support Panel */}
        {isOpen && (
          <div className="animate-in slide-in-from-bottom-4 duration-300">
            <Card className="w-96 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundRepeat: "repeat",
                    }}
                  ></div>
                </div>

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold">{t.support.title}</CardTitle>
                      <CardDescription className="text-green-100 text-sm">{t.support.subtitle}</CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 h-8 w-8 p-0 rounded-full"
                    aria-label="Close support panel"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                {/* Status Indicators */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <Badge className="bg-green-100 text-green-800 text-xs font-medium">{t.support.onlineNow}</Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{t.support.avgResponse}</span>
                  </div>
                </div>

                {/* Support Options */}
                <div className="space-y-3">
                  {/* Live Chat */}
                  <Button
                    onClick={() => {
                      alert("Live chat would open here in a real implementation")
                      setIsOpen(false)
                    }}
                    className="w-full justify-start bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 border border-green-200 text-gray-900 h-auto p-4 transition-all duration-200"
                    variant="outline"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-semibold text-sm">{t.support.liveChat.title}</div>
                        <div className="text-xs text-gray-600">{t.support.liveChat.description}</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-green-600">
                        <Users className="h-3 w-3" />
                        <span>24/7</span>
                      </div>
                    </div>
                  </Button>

                  {/* Email Support */}
                  <Button
                    onClick={() => {
                      window.open("mailto:support@wellnityai.com?subject=Support Request", "_blank")
                      setIsOpen(false)
                    }}
                    className="w-full justify-start bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border border-blue-200 text-gray-900 h-auto p-4 transition-all duration-200"
                    variant="outline"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-semibold text-sm">{t.support.emailSupport.title}</div>
                        <div className="text-xs text-gray-600 font-mono">{t.support.emailSupport.description}</div>
                      </div>
                      <div className="text-xs text-blue-600">
                        <Clock className="h-3 w-3" />
                      </div>
                    </div>
                  </Button>

                  {/* Phone Support */}
                  <Button
                    onClick={() => {
                      window.open("tel:+15551234567", "_blank")
                      setIsOpen(false)
                    }}
                    className="w-full justify-start bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border border-purple-200 text-gray-900 h-auto p-4 transition-all duration-200"
                    variant="outline"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-semibold text-sm">{t.support.phoneSupport.title}</div>
                        <div className="text-xs text-gray-600 font-mono">{t.support.phoneSupport.description}</div>
                      </div>
                      <div className="text-xs text-purple-600">
                        <span>Call</span>
                      </div>
                    </div>
                  </Button>

                  {/* Help Center */}
                  <Button
                    onClick={() => {
                      alert("Help center would open here")
                      setIsOpen(false)
                    }}
                    className="w-full justify-start bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 border border-orange-200 text-gray-900 h-auto p-4 transition-all duration-200"
                    variant="outline"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-semibold text-sm">{t.support.helpCenter.title}</div>
                        <div className="text-xs text-gray-600">{t.support.helpCenter.description}</div>
                      </div>
                      <div className="text-xs text-orange-600">
                        <span>Browse</span>
                      </div>
                    </div>
                  </Button>
                </div>

                {/* Emergency Contact */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-xs font-semibold text-red-800">Emergency Support</span>
                    </div>
                    <p className="text-xs text-red-700">
                      {t.support.emergency}{" "}
                      <button
                        onClick={() => window.open("tel:+15551234567", "_blank")}
                        className="font-semibold underline hover:no-underline"
                      >
                        +1 (555) 123-4567
                      </button>
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">2min</div>
                    <div className="text-xs text-gray-600">Avg Response</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">98%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  )
}

// Add both named and default exports for compatibility
export { SupportButton }
