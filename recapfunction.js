function double (number){
    const doubled = number * 2;
    // console.log(number, doubled);
    
}
console.log('  I will call the function');
double(10);
console.log('---------------');
double(20);
// console.log('----------------');
double(30);


function difference (number1, number2){
   const differenceNumber = number1 - number2;
//    console.log('total difference number is', differenceNumber);
   
}

const num1 = 30;
const num2 = 20;
difference(num1, num2);

function adds (price1, price2){
    const total = price1 + price2;
    return total;
}
const bill = adds(40, 20);

function adds2 (price1, price2){
    return price1 + price2;
}
const bill2 = adds(40,20);
// console.log(bill, bill2);


function totalNumber(number){
    let sum = 0;
    for(const numbers of number){
        sum = sum + numbers;
    }
    return sum;
}
const numbs = [4, 8, 75, 61, 45, 60, 40];
const sums = totalNumber(numbs)
console.log(sums);

