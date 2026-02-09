import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="px-6 py-24 md:py-32 bg-card">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
          先確認現在的位置
          <br />
          再慢慢想接下來的事
        </h2>

        <p className="mt-6 text-muted-foreground leading-relaxed max-w-md mx-auto">
          這個測驗不會要求你立刻改變什麼，也不會替你做任何決定。它只是陪你把「現在」整理清楚。
        </p>

        <Button
          size="lg"
          className="mt-10 rounded-full px-8 py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          確認你的財務韌性
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>

        <p className="mt-4 text-sm text-muted-foreground">約 3-5 分鐘</p>
      </div>
    </section>
  )
}
