// To find out maximum number of flights in the air
const flights = [
  { start: 4, end: 8 },
  { start: 2, end: 5 },
  { start: 17, end: 20 },
  { start: 10, end: 21 },
  { start: 9, end: 18 },
];

function problem() {
  const isLanded = (current, old) => current.start > old.end;

  const checkWhichFlightsHaveBeenLanded = (current) =>
    inAir.forEach((old, index) => {
      if (isLanded(current, old)) {
        totalFlightsInAir--;
        delete inAir[index];
      }
    });

  let totalFlightsInAir = 0;
  const inAir = [];
  for (let i = 0; i < flights.length; i++) {
    const current = flights[i];
    totalFlightsInAir++;
    inAir.push(current);
    checkWhichFlightsHaveBeenLanded(current);
  }

  return totalFlightsInAir;
}

console.log(problem());
