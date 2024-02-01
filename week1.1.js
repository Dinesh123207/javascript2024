//let blackbox = {
  //  name: 'rohan',
    //yearold: 32

//}
//console.log(blackbox)
//a=5
//console.log(a);

///////////////////////

//Sum(1,100)
//function sumofall(start, end) {
  //  let sum =0;
    //for(let i = start; i<end;i++){
      //  sum += i;
    //}
    //return(sum);
//}
    
    
//sum = sumofall(1,100);
//console.log(sum);

// star pattern
// function star(n1){
//     let n =0;
//     for(let i=n;i<n;i++){
//         for(let j= i+2;j<i;j++);

//     }
//     console.log('*');
//     return(n);
// }
// p=star(7);
// console.log(p);
function doarithmatic(firstEl,secondEl, whatToDo){
  if(whatToDo==='sum'){
    var answer = sum(firstEl,secondEl);
    return answer;
    if(whatToDo==='multiply'){
      var answer = multiply(firstEl,secondEl);
      return answer;
    }
  }
  
}
function doarithmatic(firstEl, secondEl, funToRun){
  return funToRun(firstEl,secondEl);
}