function classifyNumber(number)
{
    if(number>0){
        return "the number is positive";
    }
    else if(number===0){
        return "the number is Zero";
    }
    else {
        return "the number is Negative";
    }
}
console.log(classifyNumber(0));