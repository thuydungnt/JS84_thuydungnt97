//bai 1
    function reverseString (str) {
        let newString = "";
        for (var i = str.length - 1; i >=0; i--){
            newString += str[i]
        }
        return newString;
    }
    reverseString ("abcdef");
// //bai 2
// function unique(arr) {
//     var obj = {}
//     var newArr = []
//     for (let i = 0; i < arr.length; i++) {
//       if (!obj[arr[i]]) {
//         obj[arr[i]] = 1
//         newArr.push(arr[i])
//       }
//     }
//     return newArr
//   }
//   console.log(unique([1, 2, 3, 5, 4, 2, 6, 4]))
// //bai 3
// function array_unique(array){
//     array.sort();
//     let max =[0,0];
//     let count =1;
//     for (let i = array.length-1; i > 0; --i) {
//         if (array[i] == array[i-1]) ++count;
//         else{
//              if (max[1] < count){ 
//                   max[0] = array[i];
//                   max[1] = count;   
//              }
//              count = 1;
//         }
//     }
//     console.log( "Value:"+max[0]+"," + "count:"+max[1]);
// }
// let array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
// array_unique(array);
