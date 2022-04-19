let restaurant = {
    nom : "Bob's Burgers",
    location : "123 Ocean Avenue",
    propriétaires : ["Bob Belcher", "Linda Belcher"],
    création : 2011,
    menu : ["burgers", "frites", "milk-shakes"],
    } ;
console.log("propriétaires dans " +  restaurant.nom) ;
console.log("employés dans " + restaurant.nom) ;
let someKey = "menu" ;
console.log(someKey + " de " +  restaurant.nom) ;
console.log(restaurant.menu) ;
console.log(restaurant["menu"]) ;
console.log(restaurant[someKey]) ;
console.log(restaurant.someKey) ;
console.log(restaurant.menu.includes("fries")) ;


    