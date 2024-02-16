let movies = [
  { title: "The Godfather", year: 1972 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Titanic", year: 1997 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "Jurassic Park", year: 1993 },
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Dark Knight", year: 2008 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Matrix", year: 1999 },
  { title: "Inception", year: 2010 },
  { title: "Fight Club", year: 1999 },
  { title: "Schindler's List", year: 1993 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "Avatar", year: 2009 },
  { title: "Saving Private Ryan", year: 1998 },
];

let movieTitle = document.querySelector("#movieTitle");
let movieYear = document.querySelector("#movieYear");
let movieList = document.querySelector("#movieList");
displayMovies();

function addMovie() {
  let title = movieTitle.value;
  let year = movieYear.value;

  movies.push({ title, year });
  console.log(movies);
  displayMovies();
}
function displayMovies() {
  movieList.innerHTML = "";
  movies.forEach((movie) => {
    const movieHTML = `<li>${movie.title} - ${movie.year}</li>`;
    movieList.innerHTML += movieHTML;
  });
}
