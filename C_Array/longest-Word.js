function longestWord(string){
    let long = "0";
    let letre = "0";
    for ( let i = 0; i < string.length; i++ ){
        if ( letre < string[i] ){
            letre = string[i];
            long = letre;
        }
    }
    return long;
}
console.log(longestWord("I am pretty hungry")) ; // 'hungry' (faim)
console.log(longestWord("down the rabbit hole")) ; // "rabbit" (lapin)
console.log(longestWord("elephant down")) ; // "elephant".
