function makeAcronym(string){
    let letter = string.split (" ") ;
    let result = " ";
    for (let i = 0 ; i<letter.length ; i++ ){
        let tittre = letter[i];
        result += tittre[0].toUpperCase();
    }
    return result;
}

console.log(makeAcronym("los Angeles")) ; 
console.log(makeAcronym("same stuff different day")) ; 
console.log(makeAcronym("Laugh out loud")) ; 
console.log(makeAcronym("don't over think stuff")) ; 

