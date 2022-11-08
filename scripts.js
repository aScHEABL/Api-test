const img = document.querySelector("img");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    getTheGif();
})

function getTheGif () {
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=A28osyX29BlXhy00UYwX2Y1tMISNBsUb&s=slap&weirdness=10", {mode: "cors"})
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        img.src = response.data.images.original.url;
    })
}

getTheGif();