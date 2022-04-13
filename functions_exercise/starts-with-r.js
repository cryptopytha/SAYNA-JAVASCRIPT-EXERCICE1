function startsWithR(string){
    if(string[0]=="r"|| string[0]=="R"){
        return true;
    } else {
        return false;
    }
}

console.log(startsWithR("roger that")) ; // vrai
console.log(startsWithR("Row, row, row your boat")) ; // true
console.log(startsWithR("slip")) ; // false
console.log(startsWithR("Taxicab")) ; // false
