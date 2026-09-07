{
  // ts-mastery #6 — Option/Maybe와 strict null check
  // 과제: getDisplayName 구현
  // - 유저가 있으면 nickname, nickname이 없으면 name
  // - 유저 자체가 없으면 '게스트'
  // 조건: `!` 금지, if 금지 — ?. 와 ?? 만으로.

  type User = { name: string; nickname?: string };

  const users = new Map<string, User>([
    ['kim', { name: '김유저', nickname: '김짱' }],
    ['lee', { name: '이유저' }], // nickname 없음
  ]);

  const getDisplayName = (userMap: Map<string, User>, id: string): string =>
    userMap.get(id)?.nickname ?? userMap.get(id)?.name ?? '게스트';

  // test
  console.log(getDisplayName(users, 'kim'));  // '김짱'
  console.log(getDisplayName(users, 'lee'));  // '이유저'
  console.log(getDisplayName(users, 'park')); // '게스트'
}