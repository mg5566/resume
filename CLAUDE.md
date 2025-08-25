# Claude 설정

## 언어 설정
- 한글로 응답해주세요

## 프로젝트 정보
- **프로젝트명**: resume
- **기술 스택**: React 19 + TypeScript + Vite
- **패키지 매니저**: pnpm (9.5.0+)
- **Node 버전**: >=18.0.0

## 개발 명령어
- `pnpm dev`: 개발 서버 실행
- `pnpm build`: 프로덕션 빌드 (TypeScript 컴파일 + Vite 빌드)
- `pnpm lint`: ESLint 실행
- `pnpm preview`: 빌드된 앱 미리보기
- `pnpm test`: 테스트 실행
- `pnpm test:watch`: 테스트 워치 모드
- `pnpm test:coverage`: 테스트 커버리지 확인

## 개발 도구
- ESLint + Prettier (코드 포맷팅)
- TypeScript 5.8
- Vite 7.0 (번들러)

## 개발 규칙
- **패키지 설치 전 확인**: 새로운 패키지를 설치하기 전에 반드시 각 패키지의 용도를 설명하고 사용자에게 확인을 받은 후 진행
- **테스트 코드 필수**: 모든 컴포넌트와 함수 개발 시 테스트 코드를 함께 작성
- **테스트 환경**: Vitest + React Testing Library 사용

## 테스트 작성 가이드라인
- 컴포넌트 파일과 같은 디렉토리에 `.test.tsx` 확장자로 테스트 파일 생성
- 테스트는 한글로 작성 (describe, it 설명)
- 최소 테스트 케이스:
  - 렌더링 확인
  - 주요 props 전달 확인
  - 사용자 상호작용 테스트 (있는 경우)
  - CSS 클래스 적용 확인
- Mock 데이터는 테스트 파일 상단에 정의
- `@testing-library/user-event` 사용하여 사용자 상호작용 테스트

# 개발 진행상황 (2025-08-18)

## ✅ 완료된 기능
1. **개인정보 토글 기능**
   - 우측 상단 토글 버튼으로 개인정보 표시/숨김 (`useState` 사용)
   - 이메일과 전화번호 마스킹 처리 (`****@****.com`, `010-****-****`)
   - PDF 출력시 버튼 숨김 처리 (`@media print { .toggle-controls { display: none !important; } }`)
   - 버튼 상태별 색상 변경 (파란색 ↔ 빨간색)

2. **기본 프로젝트 구조**
   - Header 컴포넌트 (개인정보 표시) ✅
   - A4Wrapper 컴포넌트 (A4 용지 레이아웃) ✅
   - resumeData.ts 데이터 구조 정의 ✅
   - README.md 업데이트 완료 ✅

## 📋 데이터 구조 정의
```typescript
// src/data/resumeData.ts
export const resumeData = {
  personal: { name, title, email, phone, github },
  experience: [{ company, position, period, description }],
  skills: [{ category, items[] }],
  education: [{ school, major, period, degree }]
}
```

## 🚧 다음 단계 (Notion MCP 연동 후)
1. **Experience 섹션 컴포넌트** - 노션에서 경력 데이터 가져와서 구현
2. **Skills 섹션 컴포넌트** - 기술 스택 표시
3. **Education 섹션 컴포넌트** - 학력 표시
4. **테스트 코드 작성** - 각 컴포넌트별
5. **CSS 스타일링 개선** - 반응형 디자인

## 🔧 기술적 특징
- **개인정보 보호**: 블라인드 채용 대응용 토글 기능
- **PDF 출력 최적화**: A4 용지 형식, Cmd+P로 깔끔한 PDF 생성
- **TypeScript**: 타입 안정성 보장
- **Vitest + React Testing Library**: 테스트 환경 구축

## 📝 Notion MCP 설정
- Windsurf IDE에서 Notion MCP 서버 설정 완료
- 재시작 후 `mcp__notion__*` 도구 사용 예정
- 경력 데이터를 노션에서 자동으로 가져와서 Experience 컴포넌트 구현 계획