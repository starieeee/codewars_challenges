function sub(a, b){
    return Math.abs(a - b);
}
console.log(sub(1, 3));

function quotient(a, b, c){
    return a / b / c;
}
console.log(quotient(1, 3));

function multiply(a, b, c){
    return a * b * c;
}
console.log(multiply(1, 3, 5));

function medium(a, b, c){
    let sumFirstTwo = a + b;
    return sumFirstTwo % c
}
console.log(medium(1, 3, 5));

function four(a, b, c, d){
    let mulTwo = a * b;
    if(mulTwo > 100){
        console.log(mulTwo + c + d);
    }
    else if (mulTwo < 100){
        console.log(mulTwo - c - d);
    }
    else{
        alert(a * b * c % d);
    }
}
four(1, 3, 5, 7);