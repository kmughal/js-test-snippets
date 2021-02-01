const input = "bbaaaaaaaaaaaaacccccc"
console.log("bbaaaaaaaaaaaaaaacccccc".length)

function start(d) {
  let copy = input.split("")
  let startloop = true
  while (startloop) {
    console.log({ d })
    const f = removeDuplicate(copy, d)
    copy = f.input
    console.log(copy)
    if (f.removed) {
      d--
      startloop = d !== 0
    } else {
      startloop = false
    }
  }
  console.log({ duplicate: findDuplicate(copy) })
}

function findDuplicate(str) {
  let duplicate = 0
  for (let i = 0; i < str.length; i++) {
    const a = input[i]
    const b = input[i + 1]
    const c = input[i + 2]
    if (a === b && a === c) {
      duplicate++
      i += 2
    }
  }
  return duplicate
}

function removeDuplicate(input = []) {
  for (let i = 0; i < input.length; i++) {
    const a = input[i]
    const b = input[i + 1]
    const c = input[i + 2]
    if (a === b && a === c) {
      input[i] = "_"
      return { input, removed: true }
    }
  }
  return { removed: false, input }
}

console.log(start(3))
