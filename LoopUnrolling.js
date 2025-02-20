const simpleSum = (data) => {
  let sum = 0;
  for (let i = 0; i < data.length; i += 1) {
    sum += data[i];
  }
  return sum;
};

const parallelSum = (data) => {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < data.length; i += 2) {
    sum1 += data[i];
    sum2 += data[i + 1];
  }
  return sum1 + sum2;
};

const testArray = Array.from({ length: 1_000_000 }, () =>
  Math.floor(Math.random() * 100)
);

console.time("simpleSum");
console.log("Resultado simpleSum:", simpleSum(testArray));
console.timeEnd("simpleSum");

console.time("parallelSum");
console.log("Resultado parallelSum:", parallelSum(testArray));
console.timeEnd("parallelSum");
