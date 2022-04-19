function maximum(tab){
    for ( let i = 0; i < tab.length ; i++ ){
        if ( tab.length[i] < tab.length[i++]  ){
            console.log(tab.length[1]);
        } 
    }

}
console.log(maximum([4, 6])) ; //9
// console.log(maximum([13, 15, 21, 11, 2])) ; // 21
// console.log(maximum([])) ; // null
