// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/

const minRemoveToMakeValid = (s: string): string => {
  const stack: string[] = [];
  let count: number = 0;

  for (const v of s) {
    count += v === '(' ? 1 : v === ')' ? -1 : 0;

    if (count === -1) {
      count = 0;
    } else {
      stack.push(v);
    }
  }

  while (count > 0) {
    stack.splice(stack.lastIndexOf('('), 1);
    count--;
  }

  return stack.join('');
};

// test
console.log(minRemoveToMakeValid('lee(t(c)o)de)')); // "lee(t(c)o)de"
console.log(minRemoveToMakeValid('a)b(c)d')); // "ab(c)d"
console.log(minRemoveToMakeValid('))((')); // ""
