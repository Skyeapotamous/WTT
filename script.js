const items = [
    {
        word: "Shaped Mug",
        image: ""
    } ,
    {
        word:"Fruit Mug",
        image:""
    }
    {
        word: "Garlic Grater",
        image:""
    }

] ;

function generateRandom() {
    const randomIndex = Math.floor(Math.random() * items.length) ;
    const selected = items[randomIndex];
    document.getElementById("word").textContent = 
        selected.word;

    const image = document.getElementById("image");

    image.src = selected.image;
    
    image.style.display = "block";

}