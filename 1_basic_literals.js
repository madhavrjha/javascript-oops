const s1 = 'Hello'; // Primitive
console.log(typeof s1);

const s2 = new String('Hello'); // String Object
console.log(typeof s2);

console.log(windows); // Parent Object of all
console.log(navigator.appVersion);

// Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getsummary: function () {
        return `${this.title} is weitten by ${this.author} in ${this.year}`;
    },
};

const book2 = {
    title: 'Book Two',
    author: 'John Doe',
    year: '2016',
    getsummary: function () {
        return `${this.title} is weitten by ${this.author} in ${this.year}`;
    },
};

console.log(book1);
console.log(book1.title);
console.log(Object.keys(book2)); // Will return all keys in book2 Object as array
console.log(Object.values(book2)); // Will return all values in book2 Object as array
