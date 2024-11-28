document.addEventListener('DOMContentLoaded', () => {
    const fetchAndDisplayData = (endpoint, contentId, page = 1) => {
        fetch(`/api/${endpoint}?page=${page}`)
            .then(response => response.json())
            .then(data => {
                const content = document.getElementById(contentId);
                content.innerHTML = data[endpoint].map(item => `<p>${item.name || item.title}</p>`).join('');

                const pagination = document.createElement('div');
                pagination.classList.add('pagination');

                for (let i = 1; i <= data.totalPages; i++) {
                    const pageLink = document.createElement('a');
                    pageLink.href = '#';
                    pageLink.innerText = i;
                    pageLink.classList.add('page-link');
                    if (i === data.currentPage) {
                        pageLink.classList.add('active');
                    }
                    pageLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        fetchAndDisplayData(endpoint, contentId, i);
                    });
                    pagination.appendChild(pageLink);
                }

                content.appendChild(pagination);
            });
    };

    fetchAndDisplayData('artists', 'artists-content');
    fetchAndDisplayData('albums', 'albums-content');
    fetchAndDisplayData('playlists', 'playlists-content');
});