// const fs = require("fs");
// function callbackFn(err,data) {
//     console.log(data);

// }
// fs.readFile("a.txt","utf-8", callbackFn);

const express = require('express')
const app = express()
const port = 3000

function calculatesum(counter){
  var sum =0;
  for(let i=0;i<counter;i++){
      sum = sum + i;
  }
  return sum;
}



function handleFirstRequest(req, res){
  var calculatedsum = calculatesum(100);
  console.log(calculatedsum);
  var answer = "the sum is"+ calculatedsum;

    res.send(answer);


}
app.get('/', handleFirstRequest)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
