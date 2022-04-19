function removeCapitals(string) {
    for (let i = 0; i < string.length; i++) {
        if(string[i].toUpperCase()) {
            string[i] ="";
        }
        return string[i].toLowerCase();
    }
}

console.log(removeCapitals("fOrEver")) ; // 'frver'.
console.log(removeCapitals("raiNCoat")) ; // "raioat".
console.log(removeCapitals("clr Door")) ; // "clr oor

