// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

let Movie1 = new Movie("Singam", "Green studio", "PG13");
let Movie2 = new Movie("Singam2", "siva studio", "R");


console.log(Movie1);  //{title: 'Singam', studio: 'Green studio', ratting: 'PG13'}
console.log(Movie2);  //{title: 'Singam2', studio: 'siva studio', ratting: 'R'}

//..................................................................................

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.



class movie {
    constructor(title, studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

let movie1 = new movie("Singam", "Green studio");
let movie2 = new movie("Singam2", "siva studio", 4.5);


console.log(movie1);  //{title: 'Singam', studio: 'Green studio',rating: 'PG'}
console.log(movie2);  //movie {title: 'Singam2', studio: 'siva studio', rating: 4.5}


//................................................................................


// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.



class moVie {
    constructor(rating = 'PG') {
        this.rating = rating
    }

    getPG(a) {
        return [a, this.rating];
    }
}

let movies = new moVie();
let x = movies.getPG(["singam", "kgf", "beast", "ko"]);



console.log(x);



//..............................................................................


//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


class Movies {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

let obj = new Movies("Casino Royale", "Eon Productions", "PG13");


console.log(obj);  //{title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG13'}
