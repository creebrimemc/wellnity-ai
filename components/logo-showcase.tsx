import { Logo } from "./logo"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LogoShowcase() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Wellnity AI Logo</h1>
        <p className="text-gray-600">
          Modern, sophisticated logo combining fitness and AI elements with dynamic animations
        </p>
      </div>

      {/* Main Logo Display */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle>Primary Logo</CardTitle>
          <CardDescription>Main logo with enhanced neural network design and animated elements</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-12 bg-gradient-to-br from-gray-50 to-gray-100">
          <Logo size="xl" />
        </CardContent>
      </Card>

      {/* Size Variations */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Size Variations</CardTitle>
          <CardDescription>Scalable design that maintains clarity at all sizes</CardDescription>
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
          <CardDescription>Adaptive color schemes for different backgrounds and contexts</CardDescription>
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
          <CardDescription>Logo mark without text for compact spaces and app icons</CardDescription>
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
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium">App Icon Size</span>
            <Logo size="xl" showText={false} />
          </div>
        </CardContent>
      </Card>

      {/* Design Elements */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Enhanced Design Elements</CardTitle>
          <CardDescription>Key improvements and features of the new logo design</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Visual Enhancements</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • <strong>Neural Network:</strong> Organic flowing connections representing AI intelligence
                </li>
                <li>
                  • <strong>Modern Dumbbell:</strong> Hexagonal weights for contemporary fitness aesthetic
                </li>
                <li>
                  • <strong>Dynamic Animations:</strong> Subtle energy pulses and rotating elements
                </li>
                <li>
                  • <strong>Gradient Effects:</strong> Sophisticated color transitions and depth
                </li>
                <li>
                  • <strong>Drop Shadows:</strong> Professional depth and dimension
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Technical Features</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • <strong>Scalable SVG:</strong> Perfect clarity at any size
                </li>
                <li>
                  • <strong>Adaptive Colors:</strong> Automatic color adjustment for different backgrounds
                </li>
                <li>
                  • <strong>Performance Optimized:</strong> Lightweight animations with CSS transforms
                </li>
                <li>
                  • <strong>Accessibility:</strong> High contrast ratios and clear symbolism
                </li>
                <li>
                  • <strong>Brand Consistency:</strong> Cohesive design language across all variants
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Brand Guidelines */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Brand Guidelines</CardTitle>
          <CardDescription>Usage recommendations and brand identity principles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Symbolism & Meaning</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • <strong>Neural Network:</strong> AI intelligence, connectivity, and smart adaptation
                </li>
                <li>
                  • <strong>Hexagonal Weights:</strong> Modern fitness, strength, and precision
                </li>
                <li>
                  • <strong>Energy Pulses:</strong> Vitality, progress, and dynamic movement
                </li>
                <li>
                  • <strong>Circular Design:</strong> Unity, completeness, and holistic wellness
                </li>
                <li>
                  • <strong>Green Gradient:</strong> Health, growth, and positive transformation
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Usage Guidelines</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • <strong>Minimum Size:</strong> 24px for digital, 0.5" for print
                </li>
                <li>
                  • <strong>Clear Space:</strong> Maintain space equal to logo height around all sides
                </li>
                <li>
                  • <strong>Background:</strong> Ensure sufficient contrast for readability
                </li>
                <li>
                  • <strong>Animation:</strong> Use sparingly for premium brand touchpoints
                </li>
                <li>
                  • <strong>Consistency:</strong> Always use provided variants, never recreate
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
