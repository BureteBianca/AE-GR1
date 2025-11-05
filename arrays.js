const arr = [1,2,3,4,5];

// //console.log(arr);

// //arr.push(6);

// const popValues = arr.pop();

// console.log(popValues);
// console.log(arr);

// for(let i=0 ; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }

// arr.forEach((e1,index) => {
//     console.log(e1,index);
// }
// )

// const mappedValues = arr.map((e1,index) => {
// // console.log(e1,index);
// return e1 *2;
// })

// console.log(mappedValues);

for(e1 of arr){
    console.log(e1);
}

for(e1 in arr){
    console.log(e1);
}