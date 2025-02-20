function isEvenMod(n) {
    return n % 2 === 0;
  }
  
  function isEvenBitwise(n) {
    return (n & 1) === 0;
  }
  
  const numbers = Array.from({ length: 1_000_000 }, () =>
    Math.floor(Math.random() * 1000000)
  );
  
  console.time("Modulo");
  numbers.forEach(isEvenMod);
  console.timeEnd("Modulo");
  
  console.time("Bitwise");
  numbers.forEach(isEvenBitwise);
  console.timeEnd("Bitwise");
  