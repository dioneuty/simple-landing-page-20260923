# Tech Context

## 현재 상태
프로젝트 초기화 전. 코드·의존성·빌드 설정 없음.  
브랜드·콘셉트(남다른 음식, 중식 배달 홍보, 메뉴+리뷰)는 Memory Bank에 문서화 완료.

## 기술 스택 (확정)

| 영역 | 선택 | 비고 |
|------|------|------|
| 프레임워크 | **Next.js** (App Router) | 정적 export 모드 |
| 스타일 | Tailwind CSS (권장) | plain CSS도 가능 |
| 언어 | TypeScript (권장) | |
| 데이터 | `data/*.ts` 정적 파일 | 메뉴·리뷰 |
| 이미지 | `public/images/` | `next/image`는 `unoptimized: true` |
| 배포 | **GitHub Pages** | GitHub Actions로 `out/` 업로드 |

## GitHub Pages + Next.js 제약

GitHub Pages는 **정적 파일만** 호스팅 → Next.js는 반드시 **Static Export** 사용.

```js
// next.config.ts
const repo = 'simple-landing-page-20260923' // GitHub repo 이름

const nextConfig = {
  output: 'export',           // 필수: out/ 폴더 생성
  basePath: `/${repo}`,       // 프로젝트 페이지일 때 (아래 URL 형태 참고)
  assetPrefix: `/${repo}/`,   // CSS·JS·이미지 경로
  images: { unoptimized: true }, // static export 시 Image Optimization 미사용
}
```

### URL 형태
| Pages 유형 | URL 예시 | basePath |
|------------|----------|----------|
| **프로젝트 페이지** (일반) | `https://<user>.github.io/<repo>/` | `/<repo>` 필요 |
| 사용자/조직 페이지 | `https://<user>.github.io/` | `''` (루트) |

> 이 저장소는 프로젝트 페이지로 가정 → **basePath = `/simple-landing-page-20260923`** (repo명 변경 시 함께 수정)

### 사용 불가 (static export)
- API Routes (`app/api/`)
- Server Components 동적 fetch (SSR/ISR)
- `next start` 서버 배포

→ 이 랜딩은 정적 콘텐츠만이므로 **문제 없음**.

## 배포 파이프라인 (GitHub Actions)

`.github/workflows/deploy.yml` 예시 흐름:
1. `push` to `main`
2. `npm ci` → `npm run build` (`next build` → `out/` 생성)
3. `actions/upload-pages-artifact` + `actions/deploy-pages`

저장소 Settings → Pages → Source: **GitHub Actions**

## 예상 스크립트
- `npm run dev` — 로컬 개발 (`next dev`)
- `npm run build` — 정적 빌드 (`next build` → `out/`)
- `npm run lint` — ESLint (create-next-app 기본)

## 콘텐츠·에셋 요구사항
- 메뉴 이미지: 대표 중식 3~6종 (placeholder → 실제 사진 교체)
- Hero 배경/음식 비주얼
- favicon (선택)
- OG meta: 「남다른 음식 | 배달 전문 중식」 등 SNS 공유용

## 개발 환경
- OS: Windows 10+
- 에디터: Cursor / VS Code
- 브라우저: Chrome, Edge (모바일 뷰포트 우선 검증)

## 기술 제약
- 백엔드 없음 → 리뷰·메뉴는 정적 데이터, 주문은 외부 배달 앱·`tel:` 링크
- SEO: App Router `metadata` export (`title`, `description`, `openGraph`)
- GitHub Pages: `basePath` 맞지 않으면 CSS/JS 404 → 로컬에서도 `basePath` 반영해 테스트
- 접근성: CTA 대비, 이미지 alt, 키보드 포커스

## 결정 대기 목록
1. Tailwind vs plain CSS
2. TypeScript 사용 여부 (create-next-app 기본 TS 권장)
3. 실제 메뉴·리뷰 데이터 vs placeholder 샘플
4. GitHub repo 이름 확정 (basePath와 일치해야 함)
