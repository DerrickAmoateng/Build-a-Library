class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(newSatus) {
        this._isCheckedOut = newStatus;
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        const ratingsArraySize = this._ratings.length;
        return ratingsSum / ratingsArraySize;
    };


    toggleCheckOutStatus() {
        if (this._isCheckedOut === true) {
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true;
        }
        return this._isCheckedOut;
    }

    addRating(value) {
        if (value < 1 || value > 5) {
            console.log('Invalid rating value. Rating not added. Enter number between 1 and 5 inclusive');
        } else {
            this._ratings.push(value);
        }
        return this._ratings;
    }
}

class Book extends Media {
    constructor(author, title, pages, booksPublished) {
        super(title);
        this._author = author;
        this._pages = pages;
        this._booksPublished = booksPublished;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

    get booksPublished() {
        return this._booksPublished;
    }
}

class Movie extends Media {
    constructor(director, title, runtime, movieCast) {
        super(title);
        this._director = director;
        this._runtime = runtime;
        this._movieCast = movieCast;
    }

    get director() {
        return this._director;
    }

    get runtime() {
        return this._runtime;
    }

    get movieCast() {
        return this._movieCast;
    }
}

class CD extends Media {
    constructor(artist, title, songs, songTitles) {
        super(title);
        this._artist = artist;
        this._songs = songs;
        this._songTitles = songTitles
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

    get songTitles() {
        return this._songTitles;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544, ['macbeth', 'Fantastic Beasts', 'Harry Potter']);
console.log(historyOfEverything.toggleCheckOutStatus());

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116, ['Emma Watson', 'Kit Harrington', 'Daniel Radcliff'])
console.log(speed.toggleCheckOutStatus());

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());