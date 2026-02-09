import { MessageCircle, Hand, Lightbulb } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
          How It Works
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
          這個測驗怎麼進行
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          就像有人陪你把現況整理一下
        </p>

        <div className="mt-16 space-y-6">
          {/* Step 1 */}
          <div className="group flex gap-6 items-start p-6 rounded-2xl bg-card border border-border transition-colors hover:border-accent/40">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-foreground text-lg">
                看到日常的情境問題
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                你會看到一些很日常的問題，例如：
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  如果收入突然變少，生活會不會受影響？
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  突然需要一筆錢，心裡會不會很慌？
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  對未來的經濟狀況，是安心多一點，還是擔心多一點？
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group flex gap-6 items-start p-6 rounded-2xl bg-card border border-border transition-colors hover:border-accent/40">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Hand className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-foreground text-lg">
                選出最接近你的答案
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                你只需要選出最接近你現在狀況的答案。不需要計算，也不需要記住任何數字。
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group flex gap-6 items-start p-6 rounded-2xl bg-card border border-border transition-colors hover:border-accent/40">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-foreground text-lg">
                這不是考試
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                也不是在檢查你做得好不好。只是一次安靜的自我整理。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
