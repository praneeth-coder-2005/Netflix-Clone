const movieContainer = document.getElementById('movie-container');
const searchResults = document.getElementById('search-results');
const myListContainer = document.getElementById('my-list-container');
const historyContainer = document.getElementById('history-container');
const recommendationsContainer = document.getElementById('recommendations-container');

// Sample movie data (replace with API fetch later)
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
function displayMovies(container) {
    container.innerHTML = ''; // Clear previous content
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        container.appendChild(movieCard);
    });
}

// Call the function to display movies on the home page
if (movieContainer) {
    displayMovies(movieContainer);
}

// Call the function to display movies on the My List page
if (myListContainer) {
    displayMovies(myListContainer);
}

// Call the function to display movies on the Viewing History page
if (historyContainer) {
    displayMovies(historyContainer);
}

// Call the function to display movies on the Recommendations page
if (recommendationsContainer) {
    displayMovies(recommendationsContainer);
}

// Search functionality
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
        searchResults.innerHTML = ''; // Clear previous results
        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
            searchResults.appendChild(movieCard);
        });
    });
}

// Functionality for buttons on the home page
const playBtn = document.getElementById('playBtn');
const moreInfoBtn = document.getElementById('moreInfoBtn');
const addToListBtn = document.getElementById('addToListBtn');

if (playBtn) {
    playBtn.addEventListener('click', () => {
        // Implement the play functionality here
        alert('Play button clicked');
    });
}

if (moreInfoBtn) {
    moreInfoBtn.addEventListener('click', () => {
        // Implement the more info functionality here
        alert('More Info button clicked');
    });
}

if (addToListBtn) {
    addToListBtn.addEventListener('click', () => {
        // Implement the add to list functionality here
        alert('Add to List button clicked');
    });
}
