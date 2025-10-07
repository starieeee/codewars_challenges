function animal(obj){
    console.log(`This ${obj.color} ${obj.name} has ${obj.legs} legs.`);
}
h = new animal({ name: "dog", color: "white", legs: 4 })
