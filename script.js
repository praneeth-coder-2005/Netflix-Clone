const movieContainer = document.getElementById('movie-container');

// Sample movie data (you can replace this with an API fetch later)
const movies = [
    {
        title: 'Movie 1',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Movie 2',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Movie 3',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Movie 4',
        image: 'https://via.placeholder.com/150',
    },
];

// Function to display movies
function displayMovies() {
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieContainer.appendChild(movieCard);
    });
}

// Call the function to display movies
displayMovies();
