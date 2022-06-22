interface IPasswordHasher {
    hashPassword: (password: string) => string;
}

/**
 * @Open closed Principles
 * @Context if we want to add another function that
 * password can be hash with different algorithm
 * if we modify the function hashPassword() to adapt the requirement
 * then it will violate @O principle
 * 
 * create a new class that implement PasswordHasher
 */
class Base64Hasher implements IPasswordHasher {
    hashPassword(password: string) {
        return "hashed with base 64"
    };
}

class SHA256Hasher implements IPasswordHasher {
    hashPassword(password: string) {
        return "hashed with SHA256"
    };
}



