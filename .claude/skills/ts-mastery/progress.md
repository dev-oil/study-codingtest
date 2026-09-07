# TS Mastery 진행 상황

완료율: 2/19

| # | 주제 | 완료일 | 배운 것 한 줄 |
|---|------|--------|---------------|
| 8 | 불변성 타입 강제 | 2026-08-26 | `sort`는 원본 변경(멀리 있는 코드를 조용히 망가뜨림) → ES2023 복사 반환 패밀리 `toSorted`·`toReversed`·`toSpliced`·`with(i,v)`. 함수 인자는 `readonly T[]`로 받아 mutation을 컴파일 타임에 차단(변경 메서드가 타입에서 '부재') |
| 6 | Option/Maybe와 strict null check | 2026-09-07 | TS의 Option은 `T | undefined` 유니온. 좁히기(`?.`·`??`·`!== undefined`)는 표현식이 아닌 변수(이름)에 붙는다 → 호출 결과는 const에 담기. `!`는 컴파일 타임 주장일 뿐 — 증명 가능할 때만. 박스(Option)가 이기는 건 '없음이 두 종류'인 중첩 케이스뿐 |
