const features = [
  {
    title: "배달 전문",
    description:
      "배달에 최적화된 포장과 메뉴 구성으로, 집에서도 맛집 퀄리티를 경험하세요.",
    icon: "🛵",
  },
  {
    title: "정통 중식",
    description:
      "직화 볶음과 정성스럽게 끓인 국물로 중식의 깊은 맛을 살렸습니다.",
    icon: "🍜",
  },
  {
    title: "푸짐한 한 끼",
    description:
      "든든한 양과 합리적인 가격으로 배부르고 만족스러운 식사를 제공합니다.",
    icon: "🥢",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16" aria-labelledby="about-title">
      <div className="mb-12 text-center">
        <h2 id="about-title" className="text-3xl font-bold">남다른 이유</h2>
        <p className="mt-3 text-muted">
          일반적인 중식 배달과는 다른, 남다른 음식만의 차별점
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="text-3xl" aria-hidden="true">{feature.icon}</span>
            <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-muted leading-relaxed">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
