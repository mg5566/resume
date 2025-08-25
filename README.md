# Resume Project

React 19 + TypeScript + Vite로 구성된 이력서 웹사이트 프로젝트입니다.

## 🚀 시작하기

### 사전 요구사항
- Node.js >= 18.0.0
- pnpm >= 9.0.0

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (http://localhost:5173)
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드된 앱 미리보기
pnpm preview
```

## 🧪 테스트

```bash
# 테스트 실행
pnpm test

# 테스트 워치 모드 (파일 변경시 자동 재실행)
pnpm test:watch

# 테스트 커버리지 확인
pnpm test:coverage
```

### 테스트 환경
- **테스트 프레임워크**: Vitest
- **테스팅 라이브러리**: React Testing Library
- **사용자 이벤트**: @testing-library/user-event

## 🔧 개발 도구

```bash
# 코드 린팅
pnpm lint
```

### 사용된 기술 스택
- **프론트엔드**: React 19, TypeScript 5.8
- **빌드 도구**: Vite 7.0
- **패키지 매니저**: pnpm 9.5.0+
- **코드 품질**: ESLint, Prettier
- **테스트**: Vitest, React Testing Library

## 📁 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
├── sections/       # 이력서 섹션 컴포넌트
├── data/          # 정적 데이터
├── test/          # 테스트 유틸리티
└── App.tsx        # 메인 앱 컴포넌트
```

## 🎯 개발 가이드라인

- 모든 컴포넌트는 테스트 코드와 함께 작성
- 테스트 파일은 `.test.tsx` 확장자 사용
- 테스트 설명은 한글로 작성
- TypeScript 타입 안정성 유지
