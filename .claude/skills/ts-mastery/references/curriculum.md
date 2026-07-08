# TS Mastery 커리큘럼

총 19개 주제. Tier 순서가 기본 학습 순서이나, 회고 시 연관성 기준 추천도 함께 제시할 것.

## Tier 1 — 도메인 모델링 패턴 (최우선, 매일 쓰는 근육)

### 1. Discriminated Union + Exhaustiveness Check
- 핵심 키워드: tagged union, `never`를 이용한 누락 검사, `assertNever`, switch exhaustiveness, "불가능한 상태를 표현 불가능하게" (make impossible states impossible)

### 2. Parse, don't validate
- 핵심 키워드: Alexis King 원칙, 검증 결과를 타입으로 보존, Zod `parse()` / `safeParse()`, 경계에서 정제된 타입 획득

### 3. Branded/Nominal Types
- 핵심 키워드: 구조적 타이핑(structural typing)의 함정, brand 프로퍼티, `unique symbol`, opaque type, Zod `.brand()`

### 4. Type Guard / Assertion Function
- 핵심 키워드: `x is T`, `asserts x is T`, narrowing, `typeof` / `in` / `instanceof`, 커스텀 가드의 신뢰 문제(거짓말하는 가드)

## Tier 2 — FP 패턴

### 5. Result/Either 패턴
- 핵심 키워드: 예외 대신 타입으로 에러 표현, discriminated union 기반 Result, neverthrow, railway-oriented programming

### 6. Option/Maybe와 strict null check의 관계
- 핵심 키워드: `strictNullChecks`, `T | undefined` vs Maybe, optional chaining / nullish coalescing, TS에서 Maybe가 덜 필요한 이유, `Map.get()`의 `T | undefined` — non-null assertion `!` 대신 좁히기

### 7. pipe/flow 합성
- 핵심 키워드: FxTS, 함수 합성, point-free, 커링, 지연 평가, Effect 라이브러리 소개

### 8. 불변성 타입 강제
- 핵심 키워드: `readonly T[]` / `ReadonlyArray`, `Readonly<T>`, ES2023 `toSorted()` / `toReversed()` (sort 참조값 이슈), 함수 인자를 readonly로 받아 mutation을 컴파일 타임에 차단

## Tier 3 — 아키텍처/런타임 경계

### 9. 런타임 경계에서만 검증하기
- 핵심 키워드: trust boundary, API 응답 / 환경변수 / 사용자 입력 + Zod, 내부에서는 타입 신뢰, 스키마와 타입의 단일 소스(`z.infer`)

### 10. 함수 인자 기반 의존성 주입과 테스트 가능성
- 핵심 키워드: 고차 함수 DI, 암묵적 의존 제거, 테스트 더블 주입, partial application, 클래스 DI 컨테이너와 비교

### 11. unknown vs any
- 핵심 키워드: `catch (e: unknown)` 습관화, `useUnknownInCatchVariables`, any의 전염성, unknown → 좁히기 플로우

### 12. 비동기 타이핑
- 핵심 키워드: `Awaited<T>`, `Promise.all` 타입 추론, async 함수의 에러 타이핑, Result 패턴과 결합(neverthrow `ResultAsync`), Promise 직접 구현 시 제네릭 설계

## Tier 4 — 타입 레벨 프로그래밍

> 실습 소스: [type-challenges](https://github.com/type-challenges/type-challenges) — easy부터. 직접 구현(deep-logic 스타일)과 잘 맞음.

### 13. 제네릭 제약과 infer
- 핵심 키워드: `extends` 제약, `infer`, `ReturnType` / `Parameters` 직접 구현, 제네릭 추론 위치

### 14. 조건부 타입 + 매핑 타입
- 핵심 키워드: `Partial` / `Pick` 직접 구현해보기, `keyof`, 매핑 수정자(`-?`, `readonly`), distributive conditional types

### 15. 템플릿 리터럴 타입
- 핵심 키워드: API 경로 타입 안전화, 이벤트 이름 타입, `Uppercase` / `Lowercase` / `Capitalize`, 문자열 패턴 추출(infer와 조합)

### 16. satisfies 연산자와 as const
- 핵심 키워드: widening vs narrowing, const assertion, 타입 체크는 하되 추론은 유지, 설정 객체 패턴, 튜플 타입(`[string, number]`)과 as const 추론

## Tier 5 — 심화 (격이 달라지는 것들)

### 17. 변성(Variance)
- 핵심 키워드: 공변(covariance) / 반공변(contravariance), `strictFunctionTypes`, 메서드 bivariance 예외, `in` / `out` 변성 표기

### 18. 컴파일러 성능
- 핵심 키워드: 조건부 타입 남발 주의, 타입 인스턴스화 깊이, Project References, `incremental`, `tsc --extendedDiagnostics`

### 19. tsconfig strict 하위 플래그
- 핵심 키워드: `strict`가 켜는 플래그들, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, 점진적 도입 전략, 실습: 코테 레포에 `noUncheckedIndexedAccess` 켜보고 뭐가 깨지는지 확인
