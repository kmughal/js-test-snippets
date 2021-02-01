function strongPasswordChecker(input) {
  if (input.length < 6) return 6 - input.length

  function remove() {
    let x = normalize(input)
    console.log({ x })

    let output = []
    x.forEach((z) => {
      output.push(String(z.character).repeat(z.count))
    })
    let iterationsRequired = 0
    x.map((y) => y.mode).forEach((s) => (iterationsRequired += s))

    return {
      input$: output.join(""),
      iterationsRequired,
    }
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
      x[counter] = {
        character: current,
        count: count + 1,
        mode: parseInt((count + 1) / 3, 10),
      }
    }
    return x
  }

  function atleastConstraints() {
    const whiteListedStr = input.replace(/\s/g, "")
    const digitPresentTest = /[0-9]/.test(whiteListedStr)
    const capitalCharacterPresentTest = /[A-Z]/.test(whiteListedStr)
    const smallCharacterPresentTest = /[a-z]/.test(whiteListedStr)

    let steps = 0
    if (!digitPresentTest) steps++
    if (!capitalCharacterPresentTest) steps++
    if (!smallCharacterPresentTest) steps++

    return steps
  }

  const duplicate = remove()
  let extraCharacter = input.length - 20
  if (extraCharacter < 0) extraCharacter = 0
  let atleastOneCharacterStepsRequired = atleastConstraints()

  // if (
  //   duplicate.iterationsRequired > atleastOneCharacterStepsRequired &&
  //   extraCharacter === 0
  // )
  //   atleastOneCharacterStepsRequired = 0
  console.log("*".repeat(100))
  console.log({ duplicate })
  console.log({ extraCharacter })
  console.log({ atleastOneCharacterStepsRequired })
  console.log({len : input.length})
  console.log("*".repeat(100))

  const iterations = duplicate.iterationsRequired;


  if (extraCharacter === 0)
  {
    if (iterations > atleastOneCharacterStepsRequired) return iterations;
  }

  // let final = (duplicate.iterationsRequired > atleastOneCharacterStepsRequired) ?
  // duplicate.iterationsRequired
  // : atleastOneCharacterStepsRequired;




  // if (atleastOneCharacterStepsRequired === 0)
  //   return duplicate.iterationsRequired

  // return duplicate.iterationsRequired + (extraCharacter-atleastOneCharacterStepsRequired)
  //if 
  // if (duplicate.iterationsRequired === 0) {
  //   return extraCharacter + atleastOneCharacterStepsRequired
  // } else {
  //   if (
  //     duplicate.iterationsRequired > atleastOneCharacterStepsRequired &&
  //     atleastOneCharacterStepsRequired !== 0 && 
  //     duplicate.iterationsRequired > extraCharacter
  //   )
  //     return (
  //       duplicate.iterationsRequired +
  //       extraCharacter -
  //       atleastOneCharacterStepsRequired
  //     )
  //   else if (duplicate.iterationsRequired === atleastOneCharacterStepsRequired)
  //     return atleastOneCharacterStepsRequired
  //   else if (atleastOneCharacterStepsRequired === 0)
  //     return duplicate.iterationsRequired
  //   else if (duplicate.iterationsRequired < extraCharacter)
  //     return atleastOneCharacterStepsRequired + extraCharacter
  //   else return atleastOneCharacterStepsRequired - duplicate.iterationsRequired
  // }
}

console.log(strongPasswordChecker("aaa111"))
// 23;""