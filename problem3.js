// Given a string s, find the length of the longest substring without repeating characters.

const s = "abcabcbb"; // "pwwkew";"abcabcbb";"xsmxvvwxhdylaeva"

function problem() {
  if (s === " ") return 1;
  if (s === "") return 0;
  if (!s) return 0;

  const toArray = s.split("");

  const unique = (a, b) => a.every((x) => x !== b);

  const update = (j, substring) => {
    var index = substring.join("");
    if (j[index]) j[index] += 1;
    else j[index] = 0;
    return j;
  };

  let result = {};

  for (let i = 0; i < toArray.length; i++) {
    let iValue = toArray[i];
    let k = [iValue];
    let found = false;

    for (let j = i + 1; j < toArray.length; j++) {
      const jValue = toArray[j];
      const isunique = unique(k, jValue);

      if (isunique) {
        k.push(jValue);
      } else {
        update(result, k);
        found = true;
        k = [];
        j = toArray.length;
      }
    }

    if (!found) update(result, k);
  }

  const ans = Object.keys(result).sort((a, b) => b.length - a.length)[0];
  return ans ? ans.length : 1;
}

console.log(problem());
