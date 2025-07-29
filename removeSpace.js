function removeSpcae(a){
    return a.replace(/[\s+]/g, '')
}
console.log(removeSpcae("Hello World"));