// Object Of Protos

const bookProtos = {
    getSummary: function () {
        return `${this.title} is written by ${this.author} in ${this.year}.`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;
    },
};

// Create Object [Method-1]
// const book1 = Object.create(bookProtos);
// book1.title = 'Book 1';
// book1.authoer = 'John Doe';
// book1.year = 2015;

// Create Object [Method-2]
const book1 = Object.create(bookProtos, {
    title: { value: 'Book One' },
    name: { value: 'John Doe' },
    year: { value: 2013 },
});

console.log(book1);
