function arraySum(tab){
    let add = 0;
    for (let i = 0; i < tab.length; i++){
        add += tab[i];
    }
    return add;

}

console.log(arraySum([6, 2, 3])) ; 
console.log(arraySum([7, 6, -5, 2])) ; 
console.log(arraySum([8])) ; 
console.log(arraySum([])) ; 
