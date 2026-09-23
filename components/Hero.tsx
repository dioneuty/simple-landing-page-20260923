import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          <p className="inline-flex w-fit rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            배달 전문 중식당
          </p>
          <h1 id="hero-title" className="text-4xl font-bold leading-tight md:text-5xl">
            {site.name}
          </h1>
          <p className="text-xl font-medium text-primary">{site.tagline}</p>
          <p className="max-w-lg text-muted leading-relaxed">{site.description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#order"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
              aria-label="지금 주문하기"
            >
              지금 주문하기
            </a>
            <a
              href="#menu"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-border bg-card px-6 py-3 font-medium transition-colors hover:bg-background"
            >
              메뉴 보기
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&h=600&fit=crop"
            alt="남다른 음식 대표 중식 메뉴"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
