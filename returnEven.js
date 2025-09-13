function evenNumber(number){
    let even = []
   for(const numbers of number) {
    if(numbers % 2 === 0){
        even.push(numbers);
    }
   }
   return even;
}
const numbs = [4, 8, 75, 61, 45, 60, 40, 13, 93, 79 , 40, 15, 60, 89,42];
 const sum = evenNumber(numbs);
 console.log(sum);
 