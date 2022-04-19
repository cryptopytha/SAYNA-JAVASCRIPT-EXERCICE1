let dog = {
    nom : "Manny",
    age : 5,
    race : "carlin",
    couleur : "fawn",
    favoriteFoods : ["bacon"],
    } ;
    console.log(dog.age) ;//5
    console.log(dog.race) ; //carlin
    console.log(dog.favoriteFoods) ; //[bacon]
    dog.age++ ;//6
    dog.couleur = dog.couleur.toUpperCase() ;
    dog.favoriteFoods.push("saucisse") ;// ajouter le saucisse dans le tableau
    console.log(dog.age) ;
    console.log(dog.race) ;
    console.log(dog.favoriteFoods) ;
    for (let property in dog) {
    console.log("propriété" + " est " + dog[property]) ;
    }
    