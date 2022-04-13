function keepItQuiet(string){
    let minis = string.toLowerCase();
    return minis + "..."
}
console.log(keepItQuiet("HOORAY")) ; // 'hooray...' (en anglais)
console.log(keepItQuiet("Doggo")) ; // 'doggo...' (en anglais)
console.log(keepItQuiet("WHAT ?!?!")) ; // 'what ?!?!...' (quoi ?!!...)
