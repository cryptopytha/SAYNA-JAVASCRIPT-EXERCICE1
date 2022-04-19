function elementQuantities(object) {
    var vide = [];
    for(var property in object){
        for (let i = 0; i <object[property]; i++){
            vide.push(property);
            
        }
    }
    return vide;
}
let quantities1 = { cat : 3, oiseau : 1, chien : 2 } ;
console.log(elementQuantities(quantities1)) ; // ['cat', 'cat', 'chat', 'oiseau', 'chien', 'chien']
let quantities2 = { blue : 3, brown : 1 } ;
console.log(elementQuantities(quantities2)) ; // ['blue', 'blue', 'blue', 'brown']
