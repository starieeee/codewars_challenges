function breakCamel(x){
    return x.replace(/([A-Z])/g, ' $1')
}
console.log(breakCamel("helloWorldUniverse"));