function objectAdd(obj1,obj2){
    var object = {};
    for (let property in (obj2,obj1)){
        if(property==property){
            object[property] = obj2[property] + obj1[property];
        
        } 
    }
    return object;    
}
let obj1 = { x : 3, y : 10} ;
let obj2 = { y : 2, x : 1,z:6} ;
console.log(objectAdd(obj1, obj2)) ; // { x : 4, y : 12 }
let obj3 = { a : 3, b : 2, c : -1} ;
let obj4 = { b : 5, c : 1, e : 4} ;
console.log(objectAdd(obj3, obj4)) ; // { a : 3, b : 7, c : 0, e : 4}

