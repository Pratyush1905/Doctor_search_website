document.getElementById("search-button").addEventListener("click", function() {
    var searchInput = document.getElementById("search-input").value;
    // Perform search logic here, e.g., redirect to search results page
    window.location.href = "search-results.html?query=" + encodeURIComponent(searchInput);
});

