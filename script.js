console.log("Siema! :D");

let button = document.querySelector(".main__button");
let image = document.querySelector(".main__image");
let activityName = document.querySelector(".activityName");

button.addEventListener("click", () => {
    image.classList.toggle("displaySecondImage");
    const shouldDisplaySecondImage = image.classList.contains("displaySecondImage");
 
    image.src = shouldDisplaySecondImage ? 'https://i.ibb.co/6BGX69p/zdj2.jpg' : 'https://i.ibb.co/nP6kb7S/zdj1.jpg';
    activityName.innerText = shouldDisplaySecondImage ? "pierwsze" : "drugie";
});

function changeImage() {
    var img = document.getElementById('main__image');
    img.src = 'https://i.ibb.co/nP6kb7S/zdj1.jpg';
}



