let arr= [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sumOfNum =0;
let num=0;
let max = arr[0];
let maxNumInArr = 0;
let min = arr[0]
let minNumInArr = 0;
let lessThanZero = 0;
let oddNumbers = 0;
let doubleNumbers = 0;
let multiplication = 1;
let maxNum= arr;
let  sumOfOddNum=0;
let sumOfDoubleNum =0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
        sumOfNum += arr[i];
        num = num +1;
        multiplication *= arr[i]
    }
}

arr.forEach(function (elem, index) {

    if(index > 0){
        if(max < elem){
            max = elem;
            maxNumInArr = index;
        }

    }
});
arr.forEach(function (elem, index) {

    if(index > 0){
        if(min > elem){
            min = elem;
            minNumInArr = index;
        }

    }
});
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0){
        
        lessThanZero = lessThanZero +1;
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >0 && arr[i] %2 >0){
        
        oddNumbers = oddNumbers +1;
        sumOfOddNum += arr[i]
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >0 && arr[i] %2===0){
        sumOfDoubleNum += arr[i]
        doubleNumbers = doubleNumbers +1;
    }
}
let maximmum = arr[0];
let maxi = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maximmum) {
    maximmum = arr[i];
    arr[maxi] = 0;
    maxi = i;
  } else {
    arr[i] = 0;
  }
}

console.log(`сумма позитивных элементов: ${sumOfNum} их кол-во: ${num}`);
console.log(`Минимальный элемент в массиве ${min} его номер:  ${minNumInArr}`)
console.log(`Максимальный элемент в массиве  ${max}  его номер: ${maxNumInArr}`)
console.log(`количество чисел меньше нуля: ${lessThanZero}`)
console.log(`количество непарных позитивных чисел ${oddNumbers}`)
console.log(`количество парных позитивных чисел ${doubleNumbers}`)
console.log(`сумма парных чисел больше нуля: ${sumOfDoubleNum}`)
console.log(`сумма непарных чисел больше нуля: ${sumOfOddNum}`)
console.log(`результат умножения положительных чисел ${multiplication}`)
console.log(`оставили найбольшее число в массиве: ${arr}`)

