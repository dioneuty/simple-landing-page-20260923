# System Patterns

## 아키텍처 개요
단일 페이지 정적 홍보 랜딩. 서버·DB 없이 HTML/CSS/JS(또는 SPA 빌드 결과)로 구성. 메뉴·리뷰 데이터는 초기에 정적 JSON 또는 컴포넌트 내 상수로 관리.

```
┌──────────────────────────────────────────────────────────┐
│                    남다른 음식 Landing                    │
├────────┬─────────┬──────────┬────────────┬───────────────┤
│  Hero  │  USP    │   Menu   │  Reviews   │ Order / Footer│
│(브랜드)│(차별점) │(중식메뉴)│ (고객평가) │  (배달 CTA)   │
└────────┴─────────┴──────────┴────────────┴───────────────┘
                              ↑
                    data/menu.json, data/reviews.json (선택)
```

## 권장 디렉터리 구조 (Next.js App Router)

```
/
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages 배포
├── app/
│   ├── layout.tsx          # metadata, 공통 레이아웃
│   ├── page.tsx            # 랜딩 (섹션 조합)
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── MenuSection.tsx
│   ├── MenuCard.tsx
│   ├── ReviewsSection.tsx
│   ├── ReviewCard.tsx
│   ├── OrderCTA.tsx
│   └── Footer.tsx
├── data/
│   ├── menu.ts
│   └── reviews.ts
├── public/
│   └── images/
│       ├── hero/
│       └── menu/
├── next.config.ts          # output: 'export', basePath
└── package.json
```

빌드 결과: `out/` → GitHub Pages에 업로드

## 컴포넌트/섹션 분리

| 컴포넌트 | 책임 |
|----------|------|
| `Hero` | 브랜드명, 슬로건, 메인 CTA |
| `About` | 배달 전문·중식 특화 등 USP 2~3개 |
| `MenuSection` + `MenuCard` | 메뉴 그리드 렌더, data/menu에서 목록 주입 |
| `ReviewsSection` + `ReviewCard` | 리뷰 캐러셀 또는 그리드, data/reviews 주입 |
| `OrderCTA` | 배달 앱·전화 링크 |
| `Footer` | 매장 정보, 저작권 |

## 데이터 패턴
- **메뉴**: `{ id, name, description, price, image, badge? }`
- **리뷰**: `{ id, rating, text, author, menuOrdered?, date? }`
- 초기: TypeScript/JSON 상수. 추후 CMS·API 연동 시 동일 스키마 유지

## 설계 원칙
1. **콘텐츠와 UI 분리**: 메뉴·리뷰는 `data/`에 모아 카피·가격 수정 용이
2. **모바일 퍼스트**: 메뉴 카드 1열 → 태블릿 2열 → 데스크톱 3열
3. **시맨틱 마크업**: `article`(메뉴·리뷰 카드), `blockquote`(리뷰), `nav`(앵커)
4. **이미지 최적화**: WebP, lazy loading, 적절한 alt (메뉴명)
5. **단순성**: 홍보 페이지이므로 상태·라우팅 최소화

## 상태 관리
- 초기: 정적 데이터만 (state 거의 없음)
- 선택: 리뷰 캐러셀 인덱스, 모바일 햄버거 메뉴 등 UI state만

## 미확정 사항
- [ ] CSS 방식: Tailwind vs plain CSS
- [ ] 리뷰 UI: 그리드 vs 가로 스크롤 캐러셀
- [ ] GitHub repo 이름 (basePath와 동기화)
