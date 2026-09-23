export type DeliveryApp = {
  name: string;
  url: string;
};

export type SiteInfo = {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  address: string;
  hours: string;
  deliveryApps: DeliveryApp[];
};

export const site: SiteInfo = {
  name: "남다른 음식",
  tagline: "배달 전문, 남다른 중식",
  description:
    "정통 중식의 깊은 맛을 집 앞까지. 남다른 음식은 배달에 최적화된 메뉴와 푸짐한 한 끼로 일상의 식사를 특별하게 만듭니다.",
  phone: "02-0000-0000",
  address: "서울시 강남구 테헤란로 123",
  hours: "11:00 - 22:00 (라스트 오더 21:30)",
  deliveryApps: [
    { name: "배달의민족", url: "#" },
    { name: "쿠팡이츠", url: "#" },
    { name: "요기요", url: "#" },
  ],
};
