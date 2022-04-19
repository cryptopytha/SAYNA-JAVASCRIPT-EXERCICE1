function fizzBuzz(max) {
    for (let i = 1; i <= max; i++) {
        if (i%3 ==0 || i%5 ==0) {
            console.log(i);
        }
    }
}
fizzBuzz(18) ;//3,5,6,9,10,12,15,18
fizzBuzz(33) ;//3,5,6,9,10,12,15,18,20,21,24,25,27,30,33