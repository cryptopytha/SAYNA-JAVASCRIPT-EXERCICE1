function  reverseArray(rever){
    let bool = [];
    for ( let i = rever.length-1; i >= 0 ; i-- ){
        bool.push(rever[i]);
    }
    return bool;
}
console.log(reverseArray(["Four", "Five", "Six", "Seven"])) ; 
console.log(reverseArray([6, 1, 7])) ; 

