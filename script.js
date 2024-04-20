const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const tiles = [
    'assets/image1.png',
    'assets/image2.png',
    'assets/image3.png',
    'assets/image4.png',
    'assets/image5.png',
    'assets/image6.png',
    'assets/image7.png',
    'assets/image8.png',
    'assets/image9.png',
    'assets/image10.png',
    'assets/image11.png',
    'assets/image12.png',
    'assets/image13.png',
    'assets/image14.png',
    'assets/image15.png',
    'assets/image16.png',
    'assets/image17.png',
    'assets/image18.png',
    'assets/image19.png',
    'assets/image20.png',
    'assets/image21.png'
];

const imageCache = {};
tiles.forEach((url) => {
    const img = new Image();
    img.src = url;
    imageCache[url] = img;
});

function getRandomTiles(){
    const indices = getRandomIndices(2, tiles.length);
    
    const tile1 = tiles[indices[0]];
    const tile2 = tiles[indices[1]];

    document.getElementById('tile1').src = tile1;
    document.getElementById('tile2').src = tile2;
}

function getRandomIndices(n, maxIndex){
    const indices = new Set();
    while (indices.size < n) {
        indices.add(Math.floor(Math.random() * maxIndex));
    }
    return Array.from(indices);
}

document.querySelector('.tilescontainer').addEventListener("click", getRandomTiles);