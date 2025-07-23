import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LogoPng } from "@/components/logo-png"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import SupportButton from "@/components/support-button"

export default function LogoPngPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto p-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">Wellnity AI Logo (PNG Version)</h1>
            <p className="text-gray-600">High-quality PNG version of the Wellnity AI logo for various use cases</p>
          </div>

          {/* Main Logo Display */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle>PNG Logo</CardTitle>
              <CardDescription>High-resolution PNG version with transparent background</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-12 bg-gradient-to-br from-gray-50 to-gray-100">
              <LogoPng size="xl" />
            </CardContent>
          </Card>

          {/* Download Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle>Download Logo</CardTitle>
              <CardDescription>Right-click and save the logo image below</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="inline-block p-8 bg-white border-2 border-dashed border-gray-300 rounded-lg">
                <LogoPng size="xl" showText={false} />
              </div>
              <p className="text-sm text-gray-600">
                Right-click on the logo above and select "Save image as..." to download the PNG file
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a href="/images/wellnity-logo.png" download="wellnity-ai-logo.png">
                  <Download className="mr-2 h-4 w-4" />
                  Download PNG Logo
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Size Variations */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Size Variations</CardTitle>
              <CardDescription>PNG logo at different sizes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium">Small (24x24)</span>
                <LogoPng size="sm" />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium">Medium (32x32)</span>
                <LogoPng size="md" />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium">Large (48x48)</span>
                <LogoPng size="lg" />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium">Extra Large (64x64)</span>
                <LogoPng size="xl" />
              </div>
            </CardContent>
          </Card>

          {/* Usage Guidelines */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Usage Guidelines</CardTitle>
              <CardDescription>Best practices for using the PNG logo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">File Specifications</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      • <strong>Format:</strong> PNG with transparent background
                    </li>
                    <li>
                      • <strong>Resolution:</strong> High-resolution (300 DPI)
                    </li>
                    <li>
                      • <strong>Size:</strong> Scalable from 16px to 512px
                    </li>
                    <li>
                      • <strong>Colors:</strong> Full color with green gradient
                    </li>
                    <li>
                      • <strong>Transparency:</strong> Alpha channel supported
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Best Use Cases</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>
                      • <strong>App Icons:</strong> iOS and Android app stores
                    </li>
                    <li>
                      • <strong>Social Media:</strong> Profile pictures and posts
                    </li>
                    <li>
                      • <strong>Print Materials:</strong> Business cards, brochures
                    </li>
                    <li>
                      • <strong>Web Graphics:</strong> Favicons and headers
                    </li>
                    <li>
                      • <strong>Presentations:</strong> PowerPoint and Keynote
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
      <SupportButton />
    </div>
  )
}
