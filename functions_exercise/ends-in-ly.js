function endsInLy(string){
    if  (string[string.length-1]=='y' && string[string.length-2] == 'l') {
        return true;
    } else {
        return false;
    }
}
console.log(endsInLy("pretty")) ; // false
console.log(endsInLy("instant")) ; // false
console.log(endsInLy("analytic")) ; // false
console.log(endsInLy("timidement")) ; // vrai
console.log(endsInLy("fly")) ; // true
console.log(endsInLy("gallantly")) ; // true
