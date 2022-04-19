function sumUpTo(max) {
    let add = 0;
    for (let i = 1; i <= max; i++) {
        add += i;
    }
    return add;
}
console.log(sumUpTo(4)) ; // 10
console.log(sumUpTo(5)) ; // 15
console.log(sumUpTo(2)) ; // 3
