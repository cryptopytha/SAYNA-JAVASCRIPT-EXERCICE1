function longer(string1,string2){
    if(string1.length==string2.length){
        return string1;
    }else{ if(string1.length < string2.length){
        return string2;
    }else {
        return string1
    }
        
    }
}
console.log(longer("drum", "piranha")) ; // 'piranha'.
console.log(longer("basket", "fork")) ; // 'basket' (panier)
console.log(longer("flanelle", "durable")) ; // "flanelle"
console.log(longer("disrupt", "ability")) ; // "disrupt".
console.log(longer("bird", "shoe")) ; // 'bird' (oiseau)
