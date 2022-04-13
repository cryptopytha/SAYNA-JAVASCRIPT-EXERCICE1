function maximum(tab){
    let vide = null;
    let a = 0;
    for ( let i = 0; i < tab.length ; i++ ){
        if ( a < tab[i]  ){
            a = tab[i];
            vide = a;
        } 
    }
    return vide;
}
console.log(maximum([4, 6, 3, 9])) ; //9
console.log(maximum([13, 15, 21, 11, 2])) ; // 21
console.log(maximum([])) ; // null
