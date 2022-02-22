 

nextNumber:
for (let i = 2; i <= 100; i++){
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue nextNumber; //при переборе деления на предыдущих чисел как только делится без остатка то это не простое число, берем следующее
  }
  console.log(i); 
}