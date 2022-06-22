/**
 * @Liskov subsitution principle
 * @Context function that use pointers or references to
 * base classes must be able to use object of derived classed without knowing it
 */

// wrong way
// class Animal {
//     fly() {
//         console.log("I'm flying")
//     }
// }

interface Animal {}

interface FlyableAnimal {
    fly: () => void
}


class Dog implements Animal {}

class Bird implements FlyableAnimal {
    fly() {
        console.log("I can fly")
    };
}