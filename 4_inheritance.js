// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
    return `${this.title} is written by ${this.author} in ${this.year}.`;
};

// Magzine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magzine Object
const mag1 = new Magazine('Mag One', 'John Doe', 2018, 'Jan');

console.log(mag1);
console.log(mag1.getSummary());
