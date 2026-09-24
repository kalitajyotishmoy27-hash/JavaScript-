function findNumbers(numbers,target)
{
   let n = numbers,length;

   for(let i=0;i<n;i++)
    {
        if(number[i]<0)
            {
                continue;
            }
        if(numbers[i]==target) 
            {
                return "Found";
                break;
            }   
    }
    return "Not Found";
}
console.log(findNumbers(-1,2,3,4,5,6,7,8,95))