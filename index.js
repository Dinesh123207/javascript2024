function calculatesum(counter){
    var sum =0;
    for(let i=0;i<counter;i++){
        sum = sum + i;
    }
    return sum;
}
var calculatedsum = calculatesum(100);
console.log(calculatedsum);