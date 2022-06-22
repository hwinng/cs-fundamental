/**
 * @Dependency inversion
 * @Definition Depend on abstraction, not on concretion
 */

// class BackendDev {
//     codeJava() {}
// }

// class FrontendDev {
//     codeJS() {}
// }

// class Project {
//     backendDev = new BackendDev();
//     frontendDev = new FrontendDev();

//     build() {
//         this.backendDev.codeJava();
//         this.frontendDev.codeJS();
//     }
// }

// what if in the future, backend dev no longer uses java
// and frontend dev will use a framework instead of JS 
// then we have to modify both high level class Project
// and lower level class BackendDev and FrontendDev
// => need to depend on an abstraction

abstract class Developer {
    develop() {}
}
class BackendDev extends Developer {

    develop(): void {
        // this.codeCSharp();
        this.codeJava();
    }

    codeJava() {}
    
    codeCSharp() {}
}

class FrontendDev extends Developer {

    develop(): void {
        // this.codeJS();
        this.codeAngular();
    }

    codeJS() {}
    
    codeAngular() {}
}

class Project {
    private developers: Developer[];

    constructor(developers: Developer[]) {
        this.developers = developers;
    }

    build() {
        this.developers.forEach(developer => developer.develop());
    }
}