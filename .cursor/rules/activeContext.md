# Active Context

## 현재 작업 포커스
**「남다른 음식」** 배달 전문 중식당 홍보 랜딩 페이지 — Memory Bank를 브랜드·콘셉트에 맞게 업데이트 완료.  
다음 단계: **Next.js 스캐폴딩(GitHub Pages 설정 포함) → 메뉴·리뷰 중심 UI 구현**.

## 최근 변경사항
- 2026-09-23: Memory Bank 6개 코어 파일 최초 생성
- 2026-09-23: 브랜드·주제 반영 업데이트
  - 상호: **남다른 음식** (배달 전문 중식당)
  - 페이지 목적: **중식 메뉴 홍보 + 고객 리뷰/평가** 기반 홍보 랜딩
  - 섹션 구조: Hero → USP → Menu → Reviews → Order CTA → Footer
- 2026-09-23: 기술·배포 결정
  - 프레임워크: **Next.js** (static export)
  - 배포: **GitHub Pages** (GitHub Actions)

## 활성 결정사항

| 항목 | 상태 | 내용 |
|------|------|------|
| 브랜드·주제 | **확정** | 남다른 음식, 배달 전문 중식, 메뉴+리뷰 홍보 |
| 페이지 유형 | **확정** | 단일 페이지 홍보 랜딩 |
| 기술 스택 | **확정** | Next.js (App Router, `output: 'export'`) |
| 배포 | **확정** | GitHub Pages + GitHub Actions |
| basePath | **주의** | repo명과 일치 (`/simple-landing-page-20260923`) |
| 메뉴·리뷰 데이터 | **미확정** | 실제 데이터 vs placeholder |
| 배달 앱 링크 | **미확정** | URL·연락처 입력 필요 |
| 디자인 토큰 | **미확정** | 중식·따뜻함 톤 (레드/골드 등) |

## 다음 단계
1. `create-next-app` + `next.config` (export, basePath)
2. GitHub Actions deploy workflow 추가
3. `data/menu.ts`, `data/reviews.ts` 샘플 데이터 작성
4. Hero · Menu · Reviews · Order CTA 섹션 구현
5. 모바일 우선 반응형·브랜드 스타일 적용
6. placeholder 이미지 → 실제 메뉴 사진 교체 (가능 시)

## 주의사항
- 배달 고객 비중이 높으므로 **모바일 CTA·메뉴 카드** 우선 검증
- 리뷰는 과장 없이 짧고 읽기 쉽게 — 신뢰감이 전환율에 직결
- 메뉴 가격·영업시간 등은 `data/` 분리로 나중에 쉽게 수정
- GitHub Pages는 **서브경로**(`/repo-name/`) → `basePath` 누락 시 빌드는 되지만 배포 후 깨짐
- 로컬 `next dev`에서도 basePath 적용됨 → `/simple-landing-page-20260923`로 접속
