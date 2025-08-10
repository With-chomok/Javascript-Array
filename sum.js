function sumOfElements(number){
    let sum = 0;
    for(const numbs of number){
        sum = sum + numbs;
    }
    return sum;
}
const numbs = [2, 3, 5, 4, 1, 12, 15, 5, 7];
const sums = sumOfElements(numbs);
console.log("total number is: ", sums);




