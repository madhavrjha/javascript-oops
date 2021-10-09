class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} is written by ${this.author} in ${this.year}.`;
    }
}

// Magzine Subclass

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

const mag = new Magazine('Mag One', 'John Doe', 2018, 'Jan');
console.log(mag);
console.log(mag.getSummary());
