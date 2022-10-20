{
    const welcome = () => {
        console.log("Witaj podróżniku w konsoli");
    }
    welcome();
    const toogleImage = () => {

        image.classList.toggle("displaySecondImage");
        const shouldDisplaySecondImage = image.classList.contains("displaySecondImage");
        const activityName = document.querySelector(".activityName");
        image.src = shouldDisplaySecondImage ? 'https://i.ibb.co/6BGX69p/zdj2.jpg' : 'https://i.ibb.co/nP6kb7S/zdj1.jpg';
        activityName.innerText = shouldDisplaySecondImage ? "pierwsze" : "drugie";
    }

    const init = () => {
        const button = document.querySelector(".main__button");
        button.addEventListener("click", (toogleImage));
    }

    let image = document.querySelector(".main__image");

    const changeImage = () => {
        var img = document.getElementById('main__image');
        img.src = 'https://i.ibb.co/nP6kb7S/zdj1.jpg';
    }
    init();
}


