function newArray(arr,callback){

}
let arr = [5, 6, 7, 4, 5, 6, 7, 1, 2] ;
console.log(newArray(arr, (x) => x + 1)) ; //incrémente l'élément du tableau par 1.
console.log(newArray(arr, (x) => x * 2)) ; //double chaque élément du tableau.
console.log(newArray(arr, (x) => x * x)) ; //équerre chaque élément du tableau.

