
function subArray(array){

    let sum=0;
    let maxSum=0;

    for(let i=0; i < array.length; i++)
    {
        sum=array[i]+sum;
        if(array[i]>sum){
            sum=array[i];
        }
        if(sum>maxSum){
            maxSum=sum;
        }
    }
    return maxSum;
}

console.log(subArray([-3,2,1]));