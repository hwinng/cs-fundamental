/**
 * @Interface segregation
 * @Context Many client-specific interfaces are better than general-purpose interface
 */
// interface Animal {
//     eat: () => void;
//     run: () => void;
//     fly: () => void;
// }

// if we have two class Dog and Snake that implements interface Animal
// how Horse and Snake can fly and how Snake can run
// it violates @Interface segregation principle, the we need to create specific interface
// for specific purpose

interface IAnimal {
    eat: () => void;
}

interface SlitherableAnimal extends IAnimal {
    slither: () => void;
}

interface RunnableAnimal extends IAnimal {
    run: () => void;
}

class Horse implements RunnableAnimal {
    eat() {}

    run() {}
}

class Snake implements IAnimal {
    eat() {}

    slither() {}
}