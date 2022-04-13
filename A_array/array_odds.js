function arrayOdds(tab){
    let add = 0;
    for (let i = 0; i < tab.length; i++){
        if (tab[i] % 2 != 0){
            add += 1;
        } else {
            continue;
        }
    }
    return add;
}
console.log(arrayOdds([4, 7, 2, 5, 9])) ; // 3
console.log(arrayOdds([11, 31, 58, 99, 21, 60])) ; // 4
console.log(arrayOdds([100, 40, 4])) ; // 0
