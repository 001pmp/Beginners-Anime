function loadFeaturedAnime() {
    const featuredContainer = document.getElementById('featuredAnime');
    if (!featuredContainer) return;

    const featured = animeDatabase.filter(anime => anime.rating >= 8.8).slice(0, 6);
    
    featuredContainer.innerHTML = featured.map(anime => createAnimeCard(anime)).join('');
    addCardClickListeners();
}

function createAnimeCard(anime) {
    return `
        <div class="anime-card" data-anime-id="${anime.id}">
            <div class="anime-card-image">${anime.emoji}</div>
            <div class="anime-card-content">
                <h3 class="anime-card-title">${anime.name}</h3>
                <div class="anime-card-meta">
                    <span>${anime.seasons} Seasons</span>
                    <span class="anime-card-rating">⭐ ${anime.rating}</span>
                </div>
                <p class="anime-card-description">${anime.description}</p>
                <div class="anime-card-genre">
                    ${anime.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
                </div>
                <a href="anime-detail.html?id=${anime.id}" class="view-button">View Details</a>
            </div>
        </div>
    `;
}

function addCardClickListeners() {
    const cards = document.querySelectorAll('.anime-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const animeId = card.dataset.animeId;
            window.location.href = `anime-detail.html?id=${animeId}`;
        });
    });
}

function loadAllAnime() {
    const gridContainer = document.getElementById('animeGrid');
    if (!gridContainer) return;

    displayAnimeGrid(animeDatabase);
    setupFilterListeners();
}

function displayAnimeGrid(animeList) {
    const gridContainer = document.getElementById('animeGrid');
    if (!gridContainer) return;

    if (animeList.length === 0) {
        gridContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No anime found matching your criteria.</p>';
        return;
    }

    gridContainer.innerHTML = animeList.map(anime => createAnimeCard(anime)).join('');
    addCardClickListeners();
}

function setupFilterListeners() {
    const searchInput = document.getElementById('searchInput');
    const genreFilter = document.getElementById('genreFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    const statusFilter = document.getElementById('statusFilter');
    const resetButton = document.getElementById('resetFilters');

    if (searchInput) {
        searchInput.addEventListener('input', filterAnime);
    }
    if (genreFilter) {
        genreFilter.addEventListener('change', filterAnime);
    }
    if (ratingFilter) {
        ratingFilter.addEventListener('change', filterAnime);
    }
    if (statusFilter) {
        statusFilter.addEventListener('change', filterAnime);
    }
    if (resetButton) {
        resetButton.addEventListener('click', resetFilters);
    }
}

function filterAnime() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedGenre = document.getElementById('genreFilter').value;
    const minRating = document.getElementById('ratingFilter').value;
    const selectedStatus = document.getElementById('statusFilter').value;

    const filtered = animeDatabase.filter(anime => {
        const matchesSearch = anime.name.toLowerCase().includes(searchTerm) ||
                            anime.description.toLowerCase().includes(searchTerm);
        const matchesGenre = !selectedGenre || anime.genres.includes(selectedGenre);
        const matchesRating = !minRating || anime.rating >= parseFloat(minRating);
        const matchesStatus = !selectedStatus || anime.status === selectedStatus;

        return matchesSearch && matchesGenre && matchesRating && matchesStatus;
    });

    displayAnimeGrid(filtered);
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('genreFilter').value = '';
    document.getElementById('ratingFilter').value = '';
    document.getElementById('statusFilter').value = '';
    displayAnimeGrid(animeDatabase);
}

function getAnimeById(id) {
    return animeDatabase.find(anime => anime.id === parseInt(id));
}

function loadAnimeDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const animeId = urlParams.get('id');

    if (!animeId) {
        window.location.href = 'anime-list.html';
        return;
    }

    const anime = getAnimeById(animeId);
    if (!anime) {
        window.location.href = 'anime-list.html';
        return;
    }

    displayAnimeDetail(anime);
    loadSuggestions(anime.suggestions);
}

function displayAnimeDetail(anime) {
    const detailContainer = document.getElementById('animeDetail');
    if (!detailContainer) return;

    detailContainer.innerHTML = `
        <div class="detail-container">
            <div class="detail-poster">${anime.emoji}</div>
            <div class="detail-info">
                <h1 class="detail-title">${anime.name}</h1>
                <div class="detail-meta">
                    <div class="meta-item">
                        <span class="meta-label">Status</span>
                        <span class="meta-value">${anime.status}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Seasons</span>
                        <span class="meta-value">${anime.seasons}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Episodes</span>
                        <span class="meta-value">${anime.episodes}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Rating</span>
                        <span class="meta-value">⭐ ${anime.rating}/10</span>
                    </div>
                </div>
                <div class="detail-description">
                    <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">About</h3>
                    ${anime.description}
                </div>
                <div class="detail-genres">
                    ${anime.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
                </div>
                
                <div class="detail-stats">
                    <div class="stat-card">
                        <h4>Studio</h4>
                        <p>${anime.details.studio}</p>
                    </div>
                    <div class="stat-card">
                        <h4>Aired</h4>
                        <p>${anime.details.aired}</p>
                    </div>
                    <div class="stat-card">
                        <h4>Director</h4>
                        <p>${anime.details.director}</p>
                    </div>
                    <div class="stat-card">
                        <h4>Community Votes</h4>
                        <p>${anime.details.votes.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadSuggestions(suggestionIds) {
    const suggestionsContainer = document.getElementById('suggestionsGrid');
    if (!suggestionsContainer) return;

    const suggestions = suggestionIds.map(id => getAnimeById(id)).filter(Boolean);
    suggestionsContainer.innerHTML = suggestions.map(anime => createAnimeCard(anime)).join('');
    addCardClickListeners();
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;

    if (currentPage.includes('anime-detail.html') || currentPage.endsWith('/')) {
        if (currentPage.includes('anime-detail.html')) {
            loadAnimeDetail();
        } else {
            loadFeaturedAnime();
        }
    } else if (currentPage.includes('anime-list.html')) {
        loadAllAnime();
    } else if (currentPage.includes('index.html') || currentPage === '/') {
        loadFeaturedAnime();
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
