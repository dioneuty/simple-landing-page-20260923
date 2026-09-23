export type Review = {
  id: string;
  rating: number;
  text: string;
  author: string;
  menuOrdered?: string;
  date?: string;
};

export const reviews: Review[] = [
  {
    id: "review-1",
    rating: 5,
    text: "짜장면 면발이 정말 쫄깃하고 춘장 맛이 깊어요. 배달 와도 면이 뭉치지 않아서 놀랐습니다.",
    author: "김*수",
    menuOrdered: "짜장면",
    date: "2026-09-15",
  },
  {
    id: "review-2",
    rating: 5,
    text: "탕수육 튀김옷이 바삭하고 소스 양도 딱 좋아요. 가족이랑 시켜 먹기 최고입니다.",
    author: "이*영",
    menuOrdered: "탕수육",
    date: "2026-09-10",
  },
  {
    id: "review-3",
    rating: 4,
    text: "짬뽕 국물이 진하고 해물이 많아서 만족스러웠어요. 매운 정도도 적당했습니다.",
    author: "박*민",
    menuOrdered: "짬뽕",
    date: "2026-09-08",
  },
  {
    id: "review-4",
    rating: 5,
    text: "양이 정말 푸짐해요. 볶음밥 하나로도 배가 든든하게 차올랐습니다. 재주문 의사 100%!",
    author: "최*진",
    menuOrdered: "볶음밥",
    date: "2026-09-05",
  },
  {
    id: "review-5",
    rating: 5,
    text: "배달이 빠르고 음식이 따뜻하게 도착했어요. 깐풍기 소스가 일품이라 단골 됐습니다.",
    author: "정*호",
    menuOrdered: "깐풍기",
    date: "2026-09-01",
  },
];
