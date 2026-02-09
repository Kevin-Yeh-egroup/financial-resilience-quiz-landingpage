"use client"

import { Activity, PawPrint, Compass } from "lucide-react"

const results = [
  {
    number: "01",
    icon: Activity,
    title: "一個整體狀態的提醒",
    description: "幫你快速了解，目前的生活狀態是：",
    bullets: [
      "大致穩定",
      "還撐得住，但有點吃力",
      "有些地方需要多留意",
    ],
    note: "這不是好壞比較，而是你現在大概站在哪個位置。",
  },
  {
    number: "02",
    icon: PawPrint,
    title: "一個貼近生活的狀態描述",
    description: "系統會用一個動物，來形容你現在的狀態，例如：",
    bullets: [
      "穩定前行的烏龜",
      "努力撐住的螞蟻",
      "正在慢慢恢復的小熊",
    ],
    note: "這不是分類你是哪一種人，而是用一個比較好理解的方式，描述你現在是怎麼撐住生活的。",
  },
  {
    number: "03",
    icon: Compass,
    title: "一段結構上的提醒",
    description: "這一段會幫你整理：",
    bullets: [
      "目前主要的支撐點在哪裡？",
      "哪些地方如果再有變化，壓力可能會變大？",
      "現在比較像是暫時撐住，還是已經慢慢穩定？",
    ],
    note: "這不是預測未來，只是幫你把現在的狀態說清楚。",
  },
]

export function ResultsPreview() {
  return (
    <section className="px-6 py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
          Results
        </p>
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground text-balance">
          你會看到什麼結果
        </h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-md mx-auto">
          結果是一份「現況整理」，不是評分表
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {results.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.number}
                className="group relative flex flex-col items-center text-center p-5 md:p-6 rounded-2xl bg-background border border-border transition-all hover:border-accent/40 hover:shadow-sm md:aspect-square"
              >
                <span className="absolute top-5 right-5 text-3xl font-bold text-muted/80 select-none">
                  {item.number}
                </span>

                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-semibold text-foreground text-base md:text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground leading-snug">
                  {item.description}
                </p>

                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start justify-center gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-xs text-foreground/70 italic leading-snug">
                  {item.note}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
