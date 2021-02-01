// const input = "aaaabbbbccccddeeddeeddeedd"
// const inputCopy = input.split("").join("")
// function problem() {
//   if (input.length < 6) return 6 - input.length

//   let removeExtraCharacters = 0
//   if (input.length > 20) {
//     removeExtraCharacters = input.length - 20
//   }

//   function totalDuplicate(str) {
//     let duplicate = 0
//     for (let i = 0; i < str.length; i++) {
//       const a = input[i]
//       const b = input[i + 1]
//       const c = input[i + 2]
//       if (a === b && a === c) {
//         duplicate++
//         i += 2
//       }
//     }
//     return duplicate
//   }

//   function removeDuplicates(val, text) {
//     let str = text.split("")
//     let duplciateFound = true
//     console.log({ val, text })
//     const popDuplicate = () => {
//       console.log("pou:", str)
//       for (let i = 0; i < str.length; i++) {
//         const a = str[i]
//         const b = str[i + 1]
//         const c = str[i + 2]
//         if (a === b && a === c) {
//           console.log({ a, b, c, i })
//           str[i + 2] = null
//           return true
//         }
//       }
//       return false
//     }

//     while (val > 0 && duplciateFound) {
//       duplciateFound = popDuplicate()
//       str = str.filter((s) => s != null)
//       if (duplciateFound) val--
//     }

//     return { val, text: str }
//   }

//   function oneDigitOneSmallCharOneCapitalChar() {
//     const digitPresentTest = /[0-9]/.test(whiteListedStr)
//     const capitalCharacterPresentTest = /[A-Z]/.test(whiteListedStr)
//     const smallCharacterPresentTest = /[a-z]/.test(whiteListedStr)

//     let steps = 0

//     if (!digitPresentTest) steps++
//     if (!capitalCharacterPresentTest) steps++
//     if (!smallCharacterPresentTest) steps++

//     return steps
//   }

//   let duplicates = 0
//   let steps = oneDigitOneSmallCharOneCapitalChar()
//   if (removeExtraCharacters > 0) {
//     let a = removeDuplicates(removeExtraCharacters, input)
//     duplicates = totalDuplicate(a.text)
//     updatedText = a.text
//     removeExtraCharacters = a.val;

//       console.log({steps,extra:removeExtraCharacters})
//   } else {
//     duplicates = totalDuplicate(input)

//     let totalSteps = duplicates + steps
//     let counter = 0

//     while (totalSteps > 0) {
//       steps--
//       duplicates--
//       if (duplicates < 0) duplicates = 0
//       if (steps < 0) steps = 0

//       totalSteps = duplicates + steps
//       counter++
//     }

//     return counter
//   }

//   return duplicates + steps +removeExtraCharacters
// }

// console.log(problem())
const assert = require("assert")

function remove(inputStr, totalRemove = 0) {
  const x = normalize(inputStr)
  if (totalRemove > 0) {
    while (totalRemove > 0) {
      let index = 0
      for (let i = 0; i < x.length - 1; i++) {
        if (x[i].count < x[i + 1].count) index = i + 1
      }

      x[index].count--
      totalRemove--
    }
  }
  let output = []
  x.forEach((z) => {
    output.push(String(z.character).repeat(z.count))
  })

  return output
}

function normalize(arr) {
  const x = []
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    let previous = i === 0 ? arr[0] : arr[i - 1]
    let count = 0
    if (previous !== current) {
      counter++
    } else {
      count = (x[counter] || { count: 0 }).count
    }
    x[counter] = { character: current, count: count + 1 }
  }
  return x
}

function problem(input = "") {
  const whiteListedStr = input.replace(/\s/g, "")
  const charCount = whiteListedStr.length
  if (charCount < 6) return 6 - charCount

  // least constraints
  function atleastConstraints() {
    const digitPresentTest = /[0-9]/.test(whiteListedStr)
    const capitalCharacterPresentTest = /[A-Z]/.test(whiteListedStr)
    const smallCharacterPresentTest = /[a-z]/.test(whiteListedStr)

    let steps = 0
    if (!digitPresentTest) steps++
    if (!capitalCharacterPresentTest) steps++
    if (!smallCharacterPresentTest) steps++

    return steps
  }

  const overrideCharacter = "|>"
  function findDuplicates(arr = []) {
    let duplicates = 0

    for (let i = 0; i < arr.length; i++) {
      const { a, b, c } = { a: arr[i], b: arr[i + 1], c: arr[i + 2] }
      if (a === overrideCharacter) continue
      if (a === b && b === c) {
        duplicates++
        i += 2
      }
    }

    console.log("total duplicates :", duplicates)
    return duplicates
  }

  /*
  ..aa.bbbccccddeeddeeddeedd
  */

  let atleastOneCharacterStepsRequired = atleastConstraints()
  let toArray = whiteListedStr.split("")
  let totalDuplicates = findDuplicates(toArray)
  let charLimit = 0
  if (charCount > 20) charLimit = charCount - 20
  console.log("Extra characters :", charLimit)
  let totalIterations = 0

  if (charLimit > 0 && totalDuplicates > 0) {
    const result = tryRemoveDuplicates(toArray, totalDuplicates, charLimit)
    charLimit = result.extraCharacters
    totalDuplicates = result.duplicates
    toArray = result.arr
  }
  console.log("----------------------------------------")
  console.log(atleastOneCharacterStepsRequired, totalDuplicates)
  if (totalDuplicates > 0 || atleastOneCharacterStepsRequired > 0) {
    function removeDuplicate(arr = []) {
      for (let i = 0; i < arr.length; i++) {
        const { a, b, c } = { a: arr[i], b: arr[i + 1], c: arr[i + 2] }
        if (a === overrideCharacter) continue
        if (a === b && b === c) {
          arr[i] = overrideCharacter
          return arr
        }
      }
      return arr
    }
    console.log("totalDuplicates:", totalDuplicates)
    while (totalDuplicates > 0 || atleastOneCharacterStepsRequired > 0) {
      console.log("=========================")
      totalIterations++
      atleastOneCharacterStepsRequired--
      if (atleastOneCharacterStepsRequired < 0)
        atleastOneCharacterStepsRequired = 0
      toArray = removeDuplicate(toArray)
      console.log("toArray:", toArray.join(""))
      totalDuplicates = findDuplicates(toArray)
      if (totalDuplicates < 0) totalDuplicates = 0
      console.log("********************************")
    }

    // while (totalDuplicates > 0) {
    //   totalIterations++
    //   toArray = removeDuplicate(toArray)
    //   totalDuplicates = findDuplicates(toArray)
    // }
  }

  return {
    charLimit,
    arr: toArray.join(""),
    totalDuplicates,
    atleastOneCharacterStepsRequired,
    totalIterations,
    totalIterations,
    ans:
      atleastOneCharacterStepsRequired +
      totalDuplicates +
      charLimit +
      totalIterations,
  }

  function tryRemoveDuplicates(arr = [], duplicates, extraCharacters) {
    const overrideCharacter = "|>"
    console.log(
      `calling tryRemoveDuplicates for ${arr.join(
        ""
      )} , duplicates :${duplicates}, extra:${extraCharacters} `
    )
    while (duplicates > 0 && extraCharacters > 0) {
     
      remove(arr,1)
      extraCharacters--;
    }
    arr = arr.filter((i) => i !== overrideCharacter)
    duplicates = findDuplicates(arr)
    return { arr, duplicates, extraCharacters }
  }
}

input = "aaaaAAAAAA000000123456"
console.log(
  `input : ${input} , \nresult:${JSON.stringify(problem(input), null, 2)}`
)

// const dataum = [
//   {
//     input: "aaa111",
//     output: 2,
//   },
//   {
//     input: "ABABABABABABABABABAB1",
//     output: 2,
//   },
//   {
//     input: "aaaabbbbccccddeeddeeddeedd",
//     output: 5,
//   },
//   {
//     input: "1337C0d3",
//     output: 0,
//   },
//   {
//     input: "aaaaAAAAAA000000123456",
//     output: 5,
//   },
//   {
//     input: "bbaaaaaaaaaaaaaaacccccc",
//     output: 8,
//   },
// ]

// dataum.forEach((data) => {
//   const result = problem(data.input)
//   assert.equal(data.output, result.ans)
// })

/*

aaaaAAAAAA000000123456

x[0] = {character : "a" , count:4}
x[1] = {character : "A" , count:6}
x[2] = {character : "0" , count : 6}
x[3] = {charachter : "1" , count : 1}
x[4] = {character : "2" , count : 1}
x[5] = {character : "3" , count : 1}
x[6] = {character : "4" , count : 1}
x[7] = {character : "5" , count : 1}
x[8] = {character : "6" , count : 1}

pick up big duplicates 
x[1] and x[2]

remove duplicates
x[1] = {character : A , count : 5}
x[2] = {character : 0 , count : 5}

aaaa AAAAA 00000 123456

x[0] = {a , 4}
x[1] = {A , 4}
x[2] = {0, 4}


aaaa AAAAA 00000 123456


aaaAAAAA000000123456

steps =2
aaaa AAAAA 00000 123456

steps
aa.a AA.AA 00.00 123456


aaaa AAAAAA 000000 123456
1
aaa AAAAAA 000000 123456

2
aaa AAAAA 000000 123456


aaa AAA AA 000 000 123456

3
.aa AAA AA 000 000 123456

4
.aa .AA AA 000 000 123456

*/
