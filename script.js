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
    '/assets/images/image1.png','/assets/images/image2.png','/assets/images/image3.png','/assets/images/image4.png','/assets/images/image5.png',
    '/assets/images/image6.png','/assets/images/image7.png','/assets/images/image8.png','/assets/images/image9.png','/assets/images/image10.png',
    '/assets/images/image12.png','/assets/images/image13.png','/assets/images/image14.png','/assets/images/image15.png','/assets/images/image16.png',
    '/assets/images/image17.png','/assets/images/image18.png','/assets/images/image19.png','/assets/images/image20.png','/assets/images/image21.png',
]

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