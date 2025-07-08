import { Logo } from "./logo"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LogoShowcase() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Wellnity AI Logo</h1>
        <p className="text-gray-600">Modern, professional logo combining fitness and AI elements</p>
      </div>

      {/* Main Logo Display */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle>Primary Logo</CardTitle>
          <CardDescription>Main logo with full branding</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Logo size="xl" />
        </CardContent>
      </Card>

      {/* Size Variations */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Size Variations</CardTitle>
          <CardDescription>Different sizes for various use cases</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium">Small (Navigation)</span>
            <Logo size="sm" />
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium">Medium (Default)</span>
            <Logo size="md" />
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium">Large (Headers)</span>
            <Logo size="lg" />
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium">Extra Large (Hero)</span>
            <Logo size="xl" />
          </div>
        </CardContent>
      </Card>

      {/* Color Variations */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Color Variations</CardTitle>
          <CardDescription>Logo adaptations for different backgrounds</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-6 bg-white border rounded-lg">
            <span className="text-sm font-medium">Default (Light Background)</span>
            <Logo size="lg" variant="default" />
          </div>
          <div className="flex items-center justify-between p-6 bg-gray-900 rounded-lg">
            <span className="text-sm font-medium text-white">White (Dark Background)</span>
            <Logo size="lg" variant="white" />
          </div>
          <div className="flex items-center justify-between p-6 bg-gray-100 rounded-lg">
            <span className="text-sm font-medium">Dark (Light Background)</span>
            <Logo size="lg" variant="dark" />
          </div>
        </CardContent>
      </Card>

      {/* Icon Only */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Icon Only</CardTitle>
          <CardDescription>Logo mark without text for compact spaces</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium">Small Icon</span>
            <Logo size="sm" showText={false} />
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium">Medium Icon</span>
            <Logo size="md" showText={false} />
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium">Large Icon</span>
            <Logo size="lg" showText={false} />
          </div>
        </CardContent>
      </Card>

      {/* Design Elements */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Design Elements</CardTitle>
          <CardDescription>Key components of the logo design</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Symbolism</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • <strong>Dumbbell:</strong> Represents fitness and strength training
                </li>
                <li>
                  • <strong>Circuit Pattern:</strong> Symbolizes AI and technology
                </li>
                <li>
                  • <strong>Pulse Lines:</strong> Energy, vitality, and progress
                </li>
                <li>
                  • <strong>Circular Design:</strong> Unity, completeness, and holistic approach
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Color Meaning</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • <strong>Green:</strong> Health, growth, and vitality
                </li>
                <li>
                  • <strong>White:</strong> Purity, simplicity, and clarity
                </li>
                <li>
                  • <strong>Gradient:</strong> Innovation and forward movement
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
