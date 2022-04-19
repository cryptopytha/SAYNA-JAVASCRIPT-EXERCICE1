function maxObjectValue(object){
    var maximum = 0;
    var vide = [];
    for (var property in object){
        if (maximum<object[property]){
            maximum = object[property];
            vide[0]= property;
            vide[1]=object[property];
        }
    }
    return vide;
}
console.log(maxObjectValue({ a : 5, b : 2, c : 6, d : 7, e : 4 })) ; // ['d', 7]
console.log(maxObjectValue({ litchi : 11, ramboutan : 13, papaye : 9 })) ; // ['ramboutan', 13]
