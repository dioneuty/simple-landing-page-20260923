import { menuItems } from "@/data/menu";
import MenuCard from "./MenuCard";

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="bg-card/50 py-16"
      aria-labelledby="menu-title"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 id="menu-title" className="text-3xl font-bold">대표 메뉴</h2>
          <p className="mt-3 text-muted">
            정통 중식의 인기 메뉴를 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#order"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
            aria-label="메뉴 주문하기"
          >
            메뉴 주문하기
          </a>
        </div>
      </div>
    </section>
  );
}
