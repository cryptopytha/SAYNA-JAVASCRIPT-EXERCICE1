function divisors(tab){
    let numberFirst = [];
    for ( let i = 0; i < tab+1 ; i++ ){
        if ( tab%i==0 ){
            numberFirst.push(i);
        } else {
            continue;
        }
    }
    return numberFirst
}
console.log(divisors(15)) ;
console.log(divisors(7)) ; 
console.log(divisors(24)) ; 
