// Define the VERSION object with some version information
const VERSION = {
    major: 1,
    minor: 0,
    patch: 0,
    build: 1234,
    toString() {
        return `${this.major}.${this.minor}.${this.patch} (build ${this.build})`;
    }
};

// Example usage
console.log(`Current version: ${VERSION.toString()}`); // Output: Current version: 1.0.0 (build 1234)
