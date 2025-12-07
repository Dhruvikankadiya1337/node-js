import { fetchMovieById, deleteMovie } from "./api.jsx";

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

const posterEl = document.getElementById("poster");
const titleEl = document.getElementById("title");
const descEl = document.getElementById("description");
const genreEl = document.getElementById("genre");
const yearEl = document.getElementById("year");

async function loadDetails() {
    const movie = await fetchMovieById(movieId);

    posterEl.src = `http://localhost:5000/uploads/${movie.poster}`;
    titleEl.innerText = movie.title;
    descEl.innerText = movie.description;
    genreEl.innerText = movie.genre;
    yearEl.innerText = movie.year;
}

document.getElementById("deleteBtn").addEventListener("click", async () => {
    if (confirm("Are you sure?")) {
        await deleteMovie(movieId);
        alert("Movie Deleted");
        window.location.href = "index.html";
    }
});

document.getElementById("editBtn").addEventListener("click", () => {
    window.location.href = "edit-movie.html?id=" + movieId;
});

loadDetails();
