# 클로드 사용 가이드

이 레포에서 Claude Code를 쓰는 방법. (Claude에게 주는 지침은 `CLAUDE.md`, 이 문서는 나를 위한 가이드)

## 1. 문제 풀기

문제 URL이나 이름만 던지면 시작된다.

```
프로그래머스 level1 체육복 풀래
https://school.programmers.co.kr/learn/courses/30/lessons/42862 풀래
```

→ Claude가 다음 번호로 파일을 만들어준다 (`054_체육복.ts`, URL 주석 + 블록 스코프 포함). 정답은 주지 않고 기다린다. 파일을 직접 만들어도 됨.

## 2. 막혔을 때

단계별로 요청한다. 낮은 단계부터 쓰는 게 학습에 좋다.

| 요청 | 받는 것 |
|------|---------|
| "어떤 자료구조/알고리즘 써야 해?" | 방향만 |
| "접근 힌트만 줘" | 힌트만, 코드 없음 |
| "여기까지 짰는데 왜 안 되지" | 막힌 부분만 짚어줌 |
| "정답 보여줘" | 이때만 전체 코드 |

## 3. 다 풀었을 때

```
리뷰해줘
```

→ 시간복잡도 + 다른 접근법 리뷰. 성능 관점 / 가독성 관점 풀이를 구분해서 제안받는다.
추가로 ts-mastery 커리큘럼과 연결되는 지점이 있으면 하나씩 짚어준다 (예: `!` → 좁히기). "미니 레슨 해줘" 하면 그 자리에서 확장.

## 4. 실행

```sh
npx tsx ts-programmers/level1/053_소수_찾기.ts
```

Claude에게 "실행해봐" 해도 된다.

## 5. TS 개념 학습 — /ts-mastery

코테 말고 TS 문법/패턴 자체가 궁금할 때 (제네릭, 타입 가드, branded type 등).

```
/ts-mastery
discriminated union 배우자
진행 상황 보여줘
```

- 커리큘럼 19개 주제: `.claude/skills/ts-mastery/references/curriculum.md`
- 진행 기록: `.claude/skills/ts-mastery/progress.md`
- 여기서도 실습 정답은 "정답 보여줘" 해야만 공개된다.

## 6. 커밋/PR

"커밋해줘" 하면 컨벤션(`feat: [프로그래머스][levelN] 제목`)에 맞춰 커밋한다. PR은 `develop` 대상.
