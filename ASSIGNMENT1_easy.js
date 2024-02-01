//anagram code
//this is harkirat's logic
// function anagram(str1,str2){
//     if(str1.sort()==str1.sort()){
//         return true;
//     }
//     else{
//         return false;
//     }

// }
// var ans = anagram("rvss","vvsr")
// console.log(ans);
////////////////////////////////////////////////////////////////////////////////////////////////



// my name is dinesh => ['my','name','is','dinesh'] conver it like this and vice versa

// function arrayFromString(str){
//     var array = str.split(" ");// this is an internal function of javascript
//     return array;
// }
// var ans = arrayFromString("my name is dinesh");
// console.log(ans);

// function stringfromArray(str){
//     var array = str.join(" ");// an internal function of javascript to connect strings.
//     return array;
// }
// var ans = stringfromArray(['my','name','is','dinesh'])
// console.log(ans);
//In js we can sort any array with [any array].sort 
//that is if we have to sort something then just convet it into array format and sort it.
///////////////////////////////////////////////////////////////////////////////////////////////

function sort(str){
    var array = str.split(" ");
     array = array.sort();
    var sortedstring = array.join("");
    return sortedstring;

}
function isAnagram(str1,str2){
if(sort(str1)==sort(str2))
{
return true;

}
else 
{
    return false;
}
}
var ans = isAnagram("abcd", "abcd");
console.log(ans);

///////////////////////////////////////////////////////////////////////////////////////////////////



