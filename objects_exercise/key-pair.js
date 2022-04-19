function keyPair(obj1,obj2,key) {
    var vide = [];
    for (let property in (obj1,obj2)){
        if (key==property){
            vide[0] = obj1[property];
            vide[1] = obj2[property];
        }
         
    }
    return vide;
}
let cat1 = { name : "jinkee", breed : "calico" } ;
let cat2 = { name : "garfield", breed : "red tabby" } ;
console.log(keyPair(cat1, cat2, "breed")) ; // [ 'calico', 'redtabby' ]
console.log(keyPair(cat1, cat2, "name")) ; // [ 'jinkee', 'garfield' ]
let sport1 = { nom : "volleyball", team : true } ;
let sport2 = { nom : "golf", team : false } ;
console.log(keyPair(sport1, sport2, "team")) ; // [ true, false ]
