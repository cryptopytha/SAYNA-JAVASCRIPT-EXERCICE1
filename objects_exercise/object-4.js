let recipe = {
    nom : "Crepes à l'ancienne",
    difficulty : "facile",
    savoureux : true,
    ingredients : ["œufs", "lait", "beurre", "farine", "sucre"],
    } ;
    console.log(recipe.nom) ;//"crepes a l'ancienne"
    console.log(recipe["nom"]) ;//"crepes a l'ancienne"
    console.log(recipe.ingredients.length) ;//5
    console.log(recipe.calories) ;
    let someVariable = "difficulty" ;
    console.log(recipe[someVariable]) ;//facile
    console.log(recipe.someVariable) ;
    for (let i = 0 ; i < recipe.ingredients.length ; i++) {
    console.log(recipe.ingredients[i]) ;
    }
    