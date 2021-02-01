const input = "bbaaaaaaaaaaaaaaacccccc"//"aaaaAAAAAA000000123456" //"ABABABABABABABABABAB1" //"bbaaaaaaaaaaaaaaacccccc" //""; // -2//"" //1

/*

bbaaaaaaaaaaaaaaacccccc


aa aaa aaa aaa aaa ccc ccc ; 1
aaa aaa aaa aaa aa ccc ccc

aa aaa aaa aaa aa ccc ccc ; 2
aaa aaa aaa aaa a ccc ccc

;3 
aa aaa aaa aaa a ccc ccc
aaa aaa aaa aaa ccc ccc

1
aaa aaa aaa aaa ccc ccc
aaa aaa aaa aa ccc ccc

2
aa aaa aaa aa ccc ccc
aaa aaa aaa a ccc ccc

3
aa aaa aaa a ccc ccc
aaa aaa aaa ccc ccc

4
aaa aaa aa ccc ccc

5
aa aaa aa ccc ccc
aaa aaa a ccc ccc

6
aaa aaa ccc ccc

7
aaa aa ccc ccc
8
aaa a ccc ccc

8
aa a ccc ccc

*/
function problem() {
  if (!input) return 6

  const whiteListedStr = input.replace(/\s/g, "")
  let fail20Limit = 0
  if (whiteListedStr.length < 6) return 6 - whiteListedStr.length
  if (whiteListedStr.length > 20) {
    fail20Limit = whiteListedStr.length - 20
    console.log({ fail20Limit })
  }

  function getTotalDuplicates() {
    let copy = input.split("")
    let totalDuplicates = 0
    for (let i = 0; i < copy.length; i++) {
      const first = input[i]
      const second = input[i + 1]
      const third = input[i + 2]

      if (first && second && third) {
        if (first === second && first === third) {
          copy[i + 2] = "_"
          i += 2
          totalDuplicates++
        }
      }
    }
    return { copy, totalDuplicates }
  }

  function oneDigitOneSmallCharOneCapitalChar() {
    const digitPresentTest = /[0-9]/.test(whiteListedStr)
    const capitalCharacterPresentTest = /[A-Z]/.test(whiteListedStr)
    const smallCharacterPresentTest = /[a-z]/.test(whiteListedStr)

    let steps = 0

    if (!digitPresentTest) steps++
    if (!capitalCharacterPresentTest) steps++
    if (!smallCharacterPresentTest) steps++

    return steps
  }

  let totalDuplicates = getTotalDuplicates().totalDuplicates;

  let aA1Constraint = oneDigitOneSmallCharOneCapitalChar();

  console.log({ totalDuplicates, aA1Constraint })

  const noDuplicatesAndaA1ConstraintsAreGood =
    totalDuplicates === 0 && aA1Constraint === 0

  if (noDuplicatesAndaA1ConstraintsAreGood) return 0

  //   if (totalDuplicates === aA1Constraint) return aA1Constraint
  let s = totalDuplicates + aA1Constraint
  let totalStepsNedded = 0

  while (s !== 0) {
    totalStepsNedded++

    totalDuplicates--
    aA1Constraint--
    if (totalDuplicates < 0) totalDuplicates = 0
    if (aA1Constraint < 0) aA1Constraint = 0
    s = totalDuplicates + aA1Constraint
    console.log({ totalStepsNedded, totalDuplicates, aA1Constraint, s })
  }
  console.log({ totalStepsNedded, fail20Limit })
  return totalStepsNedded
}
console.log("input : ", input)
console.log(problem())
