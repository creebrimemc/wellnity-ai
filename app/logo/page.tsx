import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LogoShowcase } from "@/components/logo-showcase"
import { SupportButton } from "@/components/support-button"

export default function LogoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <LogoShowcase />
      </div>
      <Footer />
      <SupportButton />
    </div>
  )
}
