
/*

ZIG ZAG STRING

.e.g.

 P      I      N
 A    L  S    I  G
 Y  A    H  R
 P      I
Original Input: PAYPALISHIRING ZigZag String: PINALSIGYAHRPI



*/

const input = "PAYPALISHIRING";
const n = 4;
const newLine = "\n";

function problem() {
  let row = 0;
  let column = 0;
  let step = 1;
  const output = [];

  for (let i = 0; i < input.length; i++) {
    const current = input[i];
    if (!output[row]) output[row] = [];
    output[row][column] = current;

    if (row === n - 1 || row === -1) {
      column++;
      step *= -1;

      output[row][column] = null;
      column--;
    }
    if (step === -1) {
      column++;
    }
    row = row + step;
    if (row === -1) {
      row = 1;
      column--;
      step *= -1;
    }
  }

  const std = [];

  for (let r = 0; r < output.length; r++) {
    std.push("\n");
    for (let c = 0; c < output[r].length; c++) {
      const value = output[r][c];
      if (!value) std.push(" ");
      else std.push(value + " ");
    }
  }

  console.log(std.join(" "));

  const result = [];
  for (let r = 0; r < output.length; r++) {
    for (let c = 0; c < output[r].length; c++) {
      if (output[r][c]) result.push(output[r][c]);
    }
  }

  return result.join("");
}

console.log("Original Input:", input, "ZigZag String:", problem());
