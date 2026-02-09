import { RadarPreview } from "./radar-preview"

export function RadarSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
              Visualization
            </p>
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-foreground text-balance">
              六個面向的韌性輪廓
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              結果會用雷達圖呈現你在六個財務面向的狀態，讓你一眼看出哪些地方比較有支撐、哪些地方比較容易感到壓力。
            </p>
            <p className="mt-3 text-sm text-muted-foreground/80 italic">
              不需要懂專業名詞，也能看出輪廓。
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-card border border-border rounded-2xl p-4">
              <RadarPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
