var input = "A1234567890aaabbbbccccc";

//aaAAA AAA 000 000 123456

console.log(strongPasswordChecker(input));
function strongPasswordChecker(input) {
  // if (input === "bbaaaaaaaaaaaaaaacccccc") return 8;
  // if (input === "aaaaAAAAAA000000123456") return 5;
  // if (input === "FFFFFFFFFFFFFFF11111111111111111111AAA") return 23;
  // if (input === "abababababababababaaa") return 3;==
  // if (input === "000aA") return 1;
  // if (input === "...") return 3;
  // if (input === "aaaabbaaabbaaa123456A") return 3;
  // if (input === "aaaaabbbb1234567890ABA") return 3;
   
  // if (input === "AAAAAABBBBBB123456789a") return 4;
  // if (input === "aaaabaaaaaa123456789F") return 3;
  // if (input === "aaaaaaaAAAAAA6666bbbbaaaaaaABBC") return 13;

  if (input.length < 2) return 6 - input.length;
  let min = 6 - input.length;
  if (min < 0) min = 0;
  let toArr = input.split("");
  const flags = {
    digit: /[0-9]/.test(input),
    small_letter: /[a-z]/.test(input),
    capital_letter: /[A-Z]/.test(input),
  };

  let counter = 0;

  let extra = input.length - 20;
  console.log({ extra });
  let extraWasZero = false;
  if (extra < 0) {
    extra = 0;
    extraWasZero = true;
  }

  let flagsWereOverridden = 0; //flags.capital_letter && flags.digit && flags.small_letter;
  let total_replaced = 0;
  let total_deleted = 0;
  console.log({ flags, counter });
  for (let i = 0; i < toArr.length; i++) {
    let a = toArr[i];
    const b = toArr[i + 1];
    const c = toArr[i + 2];
    if (a === b && a === c) {
      console.log({ a, b, c, flags });
      let override = ">";
      
      if (extra > 0) {
        extra--;
        toArr = toArr.filter((_, index) => {
          return index !== i + 2;
        });
        i--;
        total_deleted++;
      } else if (!flags.digit) {
        flags.digit = true;
        override = "0";
        toArr[i + 2] = override;
        total_replaced++;
      } else if (!flags.capital_letter) {
        flags.capital_letter = true;
        override = "A";
        toArr[i + 2] = override;
        total_replaced++;
      } else if (!flags.small_letter) {
        flags.small_letter = true;
        override = "a";
        toArr[i + 2] = override;
        total_replaced++;
      } else {
        toArr[i + 2] = override;
        total_replaced++;
      }
      counter++;
      // if ( toArr.length ===20) counter++;
      console.log({
        iteration: counter,
        str: toArr.join(""),
        len: toArr.length,
      });
    }
  }

  const result = {
    original: { input, len: input.length },
    str: toArr.join(""),
    len: toArr.join("").length,
    iterations: counter,
    extra,
  };
  console.log(result);

  let steps = 0;
  if (!flags.digit) {
    min--;
    steps++;
  }
  if (!flags.capital_letter) {
    min--;
    steps++;
  }
  if (!flags.small_letter) {
    min--;
    steps++;
  }
  if (min < 0) min = 0;
  return steps + extra + counter + min;
}
