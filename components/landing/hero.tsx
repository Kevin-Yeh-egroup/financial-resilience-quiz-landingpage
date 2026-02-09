import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-muted blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          10 題 / 約 3-5 分鐘
        </div>

        <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance">
          想了解自己現在的
          <br />
          <span className="text-accent">財務狀態</span>嗎？
        </h1>

        <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-lg mx-auto">
          不是看你賺多少，
          <br className="hidden md:block" />
          而是看看<strong className="text-foreground font-medium">現在的生活撐不撐得住</strong>
        </p>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-md mx-auto">
          很多人其實不是沒在努力，只是生活一有變化，就會覺得特別吃力。這個小測驗，用 10 題貼近日常的問題，陪你一起把目前的狀況整理清楚。
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2 border border-border">
            <CheckCircleIcon />
            <span>不用輸入金額</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2 border border-border">
            <CheckCircleIcon />
            <span>沒有對錯，不會貼標籤</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2 border border-border">
            <CheckCircleIcon />
            <span>約 3-5 分鐘</span>
          </div>
        </div>

        <div className="mt-12 animate-bounce">
          <ArrowDown className="mx-auto w-5 h-5 text-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}

function CheckCircleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="text-accent flex-shrink-0"
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 8l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
