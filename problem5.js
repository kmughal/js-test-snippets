//Given a string s, return the longest palindromic substring in s.

const s = "jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel";;"babad"; //"";

function problem() {
  if (s === "") return "";
  if (s === " ") return " ";
  if (s.length === 1) return s;

  if(s.split('').filter(function(value, index, self) { 
    return self.indexOf(value) === index;
  }).length === 1) return s;

  const arr = s.split("");
  let highest = "";
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j <= arr.length; j++) {
      var temp = s.substring(i, j);
      if (temp[0] === temp[temp.length - 1]) {
        if (same(temp)) {
          if (highest === "") highest = temp;
          else {
            if (temp.length > highest.length) highest = temp;
          }
        }
      }
    }
  }

  function same(a) {
    for (let i = 0, j = a.length - 1; i < a.length; i++, j--) {
      if (a[i] !== a[j]) return false;
    }

    return true;
  }

  return highest;
}

console.log(problem());
