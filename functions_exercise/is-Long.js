function isLong(string){
    if ( 5 < string.length){
        return true;
    }
    return false;
}
console.log(isLong("pie")) ; // false
console.log(isLong("kite")) ; // false
console.log(isLong("kitty")) ; // false
console.log(isLong("telescope")) ; // true
console.log(isLong("thermomètre")) ; // true
console.log(isLong("restaurant")) ; // true
