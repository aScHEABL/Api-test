console.log("Hello world!");

const searchResultImg = document.querySelector("[data-search-result]");
const searchButton = document.querySelector("[data-search-button]");
const searchInput = document.querySelector("[data-search-input]");

function getGifApi() {
    const searchKeyword = searchInput.value;
    const apiKey = "A28osyX29BlXhy00UYwX2Y1tMISNBsUb";
    const weirdnessValue = "0";
    const apiUrl = "https://api.giphy.com/v1/gifs/translate?";

}