function run(s){
    return `speed ${this.age * s}`
}
const dog = {
    name: 'Gav',
    age:13,
    run
}
const dog1 = {
    name:'Boss',
    age:6,
    run
}
console.log(dog.run(3))
console.log(dog1.run(7))
