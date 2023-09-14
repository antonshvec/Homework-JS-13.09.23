//  1 уровень сложности: Вычислите сумму чисел массива, используя метод reduce().

// const arr = [1,2,3,4,5];

// const summe = arr.reduce((acc,el) => {
//     return acc + el;  
// })  
   


// console.log(summe);

// 2 Вычислите произведение чисел массива, используя метод reduce().

// const arr = [1,2,3,4,5];

// const minus = arr.reduce((acc,el) => {
//     return acc - el
// })

// console.log(minus);

// 3 Преобразуйте массив строк в одну строку с помощью метода reduce().

// const arr = ["hello", "how","are","you"];

// const string = arr.reduce((acc,el) => {
//     return acc + el;
// })

// console.log(string);

// 4 Подсчитайте количество отрицательных значения в массив, используя метод reduce().

// const arr = [1,-2,5,-44,-100];
// const minus = arr.reduce((acc,el) => {
    
//     el < 0? acc = acc + 1:null
//     return acc
    
// },0)

// console.log(minus);

// 5 Найдите максимальное значение в массиве, используя метод reduce().

// const arr =[1,2,44,3,4,5];
// const max = arr.reduce((acc,el,ind,arr) => {
//     acc < el ? acc=el:null
    
// return acc
// console.log(acc);
// },arr[0])

// console.log(max);

// 6 Найдите минимальное значение в массиве, используя метод reduce().

// const arr =[-155,1,-200,2,44,3,-55,4,5];
// const max = arr.reduce((acc,el,ind,arr) => {

//     acc > el ? acc=el:null
    
// return acc
// console.log(acc);
// },arr[0])

// console.log(max);

// 7 Вычислите среднее значение массива чисел, используя метод reduce().

// const arr = [5,5,11];

// const middle = arr.reduce((acc,el,ind,arr) => {
//     return acc += el
// })/arr.length

// console.log(middle)

// 8 Сведите массив массивов в один массив с помощью метода reduce().

// const arr = [[1], ["hello"],[-6]];

// const newArray = arr.reduce((acc,el,ind,arr) => {
//    acc.push(el[0]);
//    return acc
// },[])

// console.log(newArray);

// 9 Подсчитайте количество слов в предложении, используя метод reduce().

// const string = "Hello, how are you?";

// const arr = string.split(" ");
// const counterWords = arr.reduce((acc,el) => {
//    el? acc += 1:null
//    return acc
// },0)
// console.log(counterWords);



//  10 Удалите повторяющиеся значения из массива с помощью метода reduce().

// const arr = [1,2,3,5,7,7,9,9,3,2,1,2,34,54,34,43,4,5];
// const arrSort = arr.sort(function (a, b){ 
//   return a - b;
// });

// const newArr = arr.reduce((acc,el,ind,arr) =>{
//    el != arr[ind+1]? acc.push(el):null
//    return acc
// },[]) 

// console.log(newArr);

//  11 Вычислите факториал числа, используя метод reduce().

// const arr = [1,2,3,4,5];

// const newArr = arr.reduce((acc,el) => {
// el? acc.push(el* (el -1)):null
// return acc
// },[])

// console.log(newArr)

//  12 Удалите ложные значения из массива с помощью метода reduce().

// const arr = [1,false,2,3,NaN,4,NaN,5];

// const newArr = arr.reduce((acc,el) => {
// Boolean(el) != false? acc.push(el):null
// return acc
// },[])

// console.log(newArr)



// 13 Подсчитайте, сколько раз определенное слово появляется в предложении, используя метод reduce().

// const string = "Hello, how are you?, how hello  day day, morning";

// const arr = string.split(" ");

// const repeatWords = arr.reduce((acc,el) => {
//    el == "how"? acc += 1:null
//    return acc
// },0)
// console.log(repeatWords);

