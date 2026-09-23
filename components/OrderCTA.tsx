import { site } from "@/data/site";

export default function OrderCTA() {
  return (
    <section
      id="order"
      className="bg-primary py-16 text-white"
      aria-labelledby="order-title"
    >
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 id="order-title" className="text-3xl font-bold">
          지금 주문하세요
        </h2>
        <p className="mt-3 text-white/90">
          배달 앱에서 {site.name}을 검색하거나 전화로 주문해 주세요
        </p>
        <p className="mt-2 text-sm text-white/80">영업시간: {site.hours}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          {site.deliveryApps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              className="inline-flex min-h-[44px] min-w-[160px] items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-primary transition-colors hover:bg-background"
              aria-label={`${app.name}에서 주문하기`}
            >
              {app.name}
            </a>
          ))}
          <a
            href={`tel:${site.phone.replace(/-/g, "")}`}
            className="inline-flex min-h-[44px] min-w-[160px] items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            aria-label={`전화 주문 ${site.phone}`}
          >
            전화 주문 {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
