const searchResultImg = document.querySelector("[data-search-result]");
const searchButton = document.querySelector("[data-search-button]");
const searchInput = document.querySelector("[data-search-input]");

let searchKeyword = "";
// regExp
const whiteSpaceAtTheBeginning = /(^\s)/;
const whiteSpaceAtTheEnd = /(\s$)/;
const whiteSpaceInTheMiddle = /\b\s+\b/g;

function checkWhitespace() {
    searchKeyword = searchInput.value;
    if (searchKeyword.length === 0) {
        return false;
    } else {
        (whiteSpaceAtTheBeginning.test(searchKeyword)) ? replaceWhiteSpaceAtTheBeginning(searchKeyword): false;
        (whiteSpaceAtTheEnd.test(searchKeyword)) ? replaceWhiteSpaceAtTheEnd(searchKeyword): false;
        (whiteSpaceInTheMiddle.test(searchKeyword)) ? replaceWhiteSpaceWithPlus(searchKeyword) : false;
        console.log(`Search for "${searchKeyword}"`);
        return true;
    }
}

function replaceWhiteSpaceAtTheBeginning(string) {
    searchKeyword = string.replace(whiteSpaceAtTheBeginning, "");
}

function replaceWhiteSpaceAtTheEnd(string) {
    searchKeyword = string.replace(whiteSpaceAtTheEnd, "");
}

function replaceWhiteSpaceWithPlus(string) {
    searchKeyword = string.replaceAll(whiteSpaceInTheMiddle, "+");
}

function fetchTheGif() {
    const apiKey = "api_key=" + "A28osyX29BlXhy00UYwX2Y1tMISNBsUb";
    const weirdnessValue = "0";
    const apiUrl = "https://api.giphy.com/v1/gifs/translate?";
    const runApi = apiUrl + apiKey + "&s=" + searchKeyword + "&weirdness=" + weirdnessValue;

    console.log(runApi);

    fetch(runApi, {mode: "cors"})
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        searchResultImg.src = response.data.images.original.url;
    })
}

searchButton.addEventListener("click", () => {
    (checkWhitespace()) ? fetchTheGif() : console.log("Search input is empty.");
})