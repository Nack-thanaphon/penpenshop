function Person(name) {
    this.name = name
}

Person.prototype.age = 20
var p1 = new Person('thanaphon');
var p2 = new Person('thanaphon');
console.log(p1.age)