// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

const removeDuplicates = (s: string): string => {
  const stack: string[] = [];

  for (const v of s) {
    if (stack.length && stack[stack.length - 1] === v) {
      stack.pop();
    } else {
      stack.push(v);
    }
  }

  return stack.join('');
};

// test
console.log(removeDuplicates('abbaca')); // "ca"
console.log(removeDuplicates('azxxzy')); // "ay"
