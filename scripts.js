console.log("Hello world!");

const searchResultImg = document.querySelector("[data-search-result]");
const searchButton = document.querySelector("[data-search-button]");
const searchInput = document.querySelector("[data-search-input]");

let searchKeyword = " cat meme ";

function checkWhitespace(string) {
    const ifWhiteSpaceAtTheBeginning = /(^\s)/.test(string);
    const ifWhiteSpaceAtTheEnd = /(\s$)/.test(string);
    (ifWhiteSpaceAtTheBeginning) ? replaceWhiteSpaceAtTheBeginning(string): false;
    (ifWhiteSpaceAtTheEnd) ? replaceWhiteSpaceAtTheEnd(string): false;
}

function replaceWhiteSpaceAtTheBeginning(string) {
    searchKeyword = string.replace(/(^\s)/, "");
    console.log(searchKeyword);
}

function replaceWhiteSpaceAtTheEnd(string) {
    searchKeyword = string.replace(/(\s$)/, "");
    console.log(searchKeyword);
}

function getGifApi() {
    // let searchKeyword = searchInput.value;
    const apiKey = "A28osyX29BlXhy00UYwX2Y1tMISNBsUb";
    const weirdnessValue = "0";
    const apiUrl = "https://api.giphy.com/v1/gifs/translate?";

    searchKeyword
    console.log(apiUrl + apiKey);
}

// getGifApi();
checkWhitespace(searchKeyword);