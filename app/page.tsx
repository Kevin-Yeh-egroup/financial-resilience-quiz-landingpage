import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { ResultsPreview } from "@/components/landing/results-preview"
import { RadarSection } from "@/components/landing/radar-section"
import { WhoIsItFor } from "@/components/landing/who-is-it-for"
import { CTA } from "@/components/landing/cta"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Divider />
      <HowItWorks />
      <ResultsPreview />
      <RadarSection />
      <WhoIsItFor />
      <CTA />
      <Footer />
    </main>
  )
}

function Divider() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="h-px bg-border" />
    </div>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
        <p>財務韌性檢測</p>
        <p>這是一個自我覺察工具，不構成任何財務建議。</p>
      </div>
    </footer>
  )
}
