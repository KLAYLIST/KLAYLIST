// Search Bar

const albumsData = [
    { name: "Balloonerism", artist: "Mac Miller", genre: "Hip-Hop", image: "../KLAYLIST/covers/MacMiller/Balloonerism.jpg", link: "reviews-albums/CHROMAKOPIA.html" },
    { name: "$ome $exy $ongs 4 U", artist: "Drake & PARTYNEXTDOOR", genre: "R&B", image: "../KLAYLIST/covers/PND/SSSFU.jpg", link: "reviews-albums/$ome $exy $ongs 4 U.html" },
    { name: "Hurry Up Tomorrow", artist: "The Weeknd", genre: "R&B", image: "../KLAYLIST/covers/TheWeeknd/Hurry Up Tomorrow.jpg", link: "reviews-albums/Hurry Up Tomorrow.html" },
    { name: "CHROMAKOPIA", artist: "Tyler, The Creator", genre: "Hip-Hop", image: "../KLAYLIST/covers/CHROMAKOPIA.png", link: "reviews-albums/CHROMAKOPIA.html" },
    { name: "EUSEXUA", artist: "FKA Twigs", genre: "Electronic", image: "../KLAYLIST/covers/FKATwigs/Eusexua.jpg", link: "#" },
    { name: "The Breeze Grew a Fire", artist: "Mereba", genre: "R&B", image: "../KLAYLIST/covers/Mereba/The Breeze Grew a Fire.jpg", link: "#" },
    { name: "GNX", artist: "Kendrick Lamar", genre: "Hip-Hop", image: "../KLAYLIST/covers/GNX.png", link: "#" },
    { name: "I LAY MY LIFE DOWN FOR YOU", artist: "JPEGMAFIA", genre: "Hip-Hop", image: "../KLAYLIST/covers/i lay my life down for you.png", link: "#" },
    { name: "I LAY MY LIFE DOWN FOR YOU (DC)", artist: "JPEGMAFIA", genre: "Hip-Hop", image: "../KLAYLIST/covers/JPEGMAFIA/ILDMLFYDC.jpg", link: "#" },
    { name: "BLUE LIPS", artist: "ScHoolboy Q", genre: "Hip-Hop", image: "../KLAYLIST/covers/BLUE LIPS.png", link: "#" },
    { name: "Dark Times", artist: "Vince Staples", genre: "Hip-Hop", image: "../KLAYLIST/covers/Dark Times.png", link: "#" },
  ];
  
const searchInput = document.getElementById("search");
const resultsContainer = document.getElementById("albumResults");

function displayAlbums(filteredAlbums) {
    resultsContainer.innerHTML = "";

    if (filteredAlbums.length === 0) {
        resultsContainer.innerHTML = "<p>No albums found</p>";
    } else {
        filteredAlbums.forEach(album => {
            const albumDiv = document.createElement("div");
            albumDiv.classList.add("album");

            const albumLink = document.createElement("a");
            albumLink.href = album.link;
            albumLink.target = "_blank";  
            albumLink.style.textDecoration = "none";  

            const albumImage = document.createElement("img");
            albumImage.src = album.image;
            albumImage.alt = album.name;

            const albumTitle = document.createElement("p");
            albumTitle.textContent = album.name;  

            albumLink.appendChild(albumImage);
            albumLink.appendChild(albumTitle);
            albumDiv.appendChild(albumLink);

            resultsContainer.appendChild(albumDiv);
        });
    }
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    if (query === "") {
        resultsContainer.innerHTML = ""; 
        return;
    }

    const filteredAlbums = albumsData.filter(album =>
        album.name.toLowerCase().includes(query) || album.artist.toLowerCase().includes(query) 
    );

    displayAlbums(filteredAlbums);
});