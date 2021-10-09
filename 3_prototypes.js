// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary is a Prototype Function that does not load every time
// when object instantiate - Prototype is not for all
Book.prototype.getSummary = function () {
    return `${this.title} is written by ${this.author} in ${this.year}.`;
};

// getAge
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`;
};

// Revise / Change Year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
};

// Instantiate a Object
const book1 = new Book('Book One', 'John Doe', 2013);
const book2 = new Book('Book Two', 'John Doe', 2016);

console.log(book1);
book1.revise(2018);
console.log(book1);
