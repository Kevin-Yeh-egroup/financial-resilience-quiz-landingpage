import { User, Heart, MapPin } from "lucide-react"

const personas = [
  {
    icon: User,
    text: "想了解自己目前狀況，但不想被評分的人",
  },
  {
    icon: Heart,
    text: "覺得生活過得去，卻常常有點不安心的人",
  },
  {
    icon: MapPin,
    text: "想整理一下方向，但不知道從哪裡開始的人",
  },
]

export function WhoIsItFor() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
          For You
        </p>
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground text-balance">
          這個測驗適合誰
        </h2>

        <div className="mt-12 space-y-4">
          {personas.map((persona) => {
            const Icon = persona.icon
            return (
              <div
                key={persona.text}
                className="flex flex-col items-center gap-4 p-5 rounded-xl bg-card border border-border text-center max-w-xl mx-auto"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-foreground leading-relaxed">
                  {persona.text}
                </p>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-muted-foreground leading-relaxed text-center">
          你不需要準備好所有答案，
          <br />
          只要如實選擇現在的感受就好。
        </p>
      </div>
    </section>
  )
}
