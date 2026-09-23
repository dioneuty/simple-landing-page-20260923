export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "jajangmyeon",
    name: "짜장면",
    description: "직화로 볶은 춘장과 탱탱한 면발의 정석 짜장면",
    price: 8000,
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&h=400&fit=crop",
    badge: "인기",
  },
  {
    id: "jjamppong",
    name: "짬뽕",
    description: "해물과 채소가 푸짐하게 들어간 얼큰한 국물",
    price: 9000,
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",
    badge: "매운맛",
  },
  {
    id: "tangsuyuk",
    name: "탕수육",
    description: "바삭한 튀김과 새콤달콤 소스의 환상 조합",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0520907e?w=600&h=400&fit=crop",
    badge: "베스트",
  },
  {
    id: "mapadubu",
    name: "마파두부",
    description: "부드러운 두부와 매콤한 고추기름의 밥도둑 메뉴",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1582878826629-29ae7d2b3e82?w=600&h=400&fit=crop",
  },
  {
    id: "bokkeumbap",
    name: "볶음밥",
    description: "불맛 가득한 고슬고슬한 중식 볶음밥",
    price: 9000,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop",
  },
  {
    id: "kkanpunggi",
    name: "깐풍기",
    description: "달콤하고 바삭한 소스에 버무린 깐풍기",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&h=400&fit=crop",
    badge: "추천",
  },
];
