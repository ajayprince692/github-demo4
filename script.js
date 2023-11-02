// function palindrome(arr){
//     var result=[];
//     for(var i=0;i<arr.length;i++){
//         var res=arr[i].split("").reverse().join("");
        
//         if(tata==arr[i]){
//             result.push(res);
//         }
//     }
//     return result

// }
// console.log(palindrome(["mom","dud","tata"]));


function title(arr){
    var res=arr.toString();
    var letters=res.toLowerCase().split(" ");
    for(var i=0;i<letters.length;i++){
        letters[i]=letters[i].charAt(0).toUpperCase()+letters[i].slice(1);
    }
    return(letters.join(" "))


}
console.log(title(["tHis Is MySELf"]));