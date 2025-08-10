
    function halfCut(number){
        const half = number / 2;
        return half
    }
//    console.log(halfCut(40));
   
    const result = halfCut(20);

    // console.log('output :' , result);
    
    function add (math, english){
        return math + english;
    }
    const totalresult = add(60, 40);
    // console.log(totalresult);

    function stringData (str){
        const size = str.length;
        console.log(str , size);
        if(size % 2 === 0){
            console.log("Even number of this word");
            return true;
        }else{
            console.log("odd number");
            return false;
        }
 
    }
    // stringData('barisahl');
    // stringData('dhaka');
    // stringData('chattragram');
    // stringData('cumilla');
function doubleTriple(number, doDouble){
    if(doDouble === true){
       const result = number * 2;
       console.log(result);
       
    }else{
        const result = number * 3;
        console.log(result);
        
    }
}
// doubleTriple(20, true);
// doubleTriple(10, false)

function numberElements(age){
    const length = age.length;
    return length;

}

console.log(numberElements([20, 40, 60, 40, 80,70, 95, 43, 15]));
