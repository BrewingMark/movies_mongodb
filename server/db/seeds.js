use movies_hub;
db.dropDatabase();

db.movies.insertMany([
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: "15",
    release_date: "17 February 1995",
    runtime: "2h, 22min",
    crew: {
      director: "Frank Darabont",
      producer: "Liz Glotzer"
    }
  },
  {
    title: "The Godfather",
    genre: "Crime",
    rating: "18",
    release_date: "24 August 1972",
    runtime: "2h, 55min",
    crew: {
      director: "Francis Ford Coppola",
      producer: "Al Ruddy"
    }
  },
  {
    title: "The Dark Knight",
    genre: "Superhero",
    rating: "12A",
    release_date: "24 July 2008",
    runtime: "2h, 32min",
    crew: {
      director: "Christopher Nolan",
      producer: "Kevin De La Noy"
    }
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Fantasy",
    rating: "12A",
    release_date: "17 December 2003",
    runtime: "3h, 21min",
    crew: {
      director: " Peter Jackson",
      producer: "Michael Lynne"
    }
  },

]);
