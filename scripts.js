const searchResultImg = document.querySelector("[data-search-result]");
const searchButton = document.querySelector("[data-search-button]");
const hornyButton = document.querySelector("[data-horny-button]");
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
    const apiKey = "A28osyX29BlXhy00UYwX2Y1tMISNBsUb";
    const weirdnessValue = "0";
    const apiUrl = "https://api.giphy.com/v1/gifs/translate?";
    const runApi = apiUrl + "api_key=" + apiKey + "&s=" + searchKeyword + "&weirdness=" + weirdnessValue;

    console.log(runApi);

    searchResultImg.style.visibility = "visible";

    fetch(runApi, {mode: "cors"})
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        searchResultImg.src = response.data.images.original.url;
    })
    .catch((error) => {
        console.error("Error:", error);
    })
}

searchButton.addEventListener("click", () => {
    (checkWhitespace()) ? fetchTheGif() : console.log("Search input is empty.");
})

hornyButton.addEventListener("click", (e) => {
    const hornyKeyword = "horny";
    const apiKey = "A28osyX29BlXhy00UYwX2Y1tMISNBsUb";
    const weirdnessValue = "5";
    const apiUrl = "https://api.giphy.com/v1/gifs/translate?";
    const runApi = apiUrl + "api_key=" + apiKey + "&s=" + hornyKeyword + "&weirdness=" + weirdnessValue;

    console.log("The horny button has been clicked.");

    searchResultImg.style.visibility = "visible";

    fetch(runApi, {mode: "cors"})
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        searchResultImg.src = response.data.images.original.url;
    })
    .catch((error) => {
        console.error("Error:", error);
    })
})