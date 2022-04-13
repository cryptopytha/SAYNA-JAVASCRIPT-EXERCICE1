function stringsToNum(tab){
    let log = [];
    for ( let i = 0; i < tab.length; i++){
        log.push(tab[i].length)
    }
    return log;
}
console.log(stringsToNum([ "orange", "game", "movie","beau"])) ; // [6, 4, 5, 9]
console.log(stringsToNum(["he", "off", "handmade"])) ; // [2, 3, 8]
