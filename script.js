const x = 100 //перебираем цифры до 100 

nextNumber:
for (let i = 2; i <= x; i++){
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue nextNumber; //при переборе деления на предыдущих чисел как только делится без остатка то это не простое число, берем следующее
  }
  console.log(i);
}