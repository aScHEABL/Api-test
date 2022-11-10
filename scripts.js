const searchResultImg = document.querySelector("[data-search-result]");
const searchButton = document.querySelector("[data-search-button]");
const searchInput = document.querySelector("[data-search-input]");

let searchKeyword = searchInput.value;
// regExp
const whiteSpaceAtTheBeginning = /(^\s)/;
const whiteSpaceAtTheEnd = /(\s$)/;
const whiteSpaceInTheMiddle = /\b\s+\b/;

function checkWhitespace(string) {
    (whiteSpaceAtTheBeginning.test(string)) ? replaceWhiteSpaceAtTheBeginning(searchKeyword): false;
    (whiteSpaceAtTheEnd.test(string)) ? replaceWhiteSpaceAtTheEnd(searchKeyword): false;
    (whiteSpaceInTheMiddle.test(string)) ? replaceWhiteSpaceWithPlus(searchKeyword) : false;
    console.log(searchKeyword);
}

function replaceWhiteSpaceAtTheBeginning(string) {
    searchKeyword = string.replace(whiteSpaceAtTheBeginning, "");
}

function replaceWhiteSpaceAtTheEnd(string) {
    searchKeyword = string.replace(whiteSpaceAtTheEnd, "");
}

function replaceWhiteSpaceWithPlus(string) {
    searchKeyword = string.replace(whiteSpaceInTheMiddle, "+");
}

function getGifApi() {
    const apiKey = "A28osyX29BlXhy00UYwX2Y1tMISNBsUb";
    const weirdnessValue = "0";
    const apiUrl = "https://api.giphy.com/v1/gifs/translate?";
    const runApi = apiUrl + apiKey + "&s=" + searchKeyword + "weirdness=" + weirdnessValue;

    
    console.log(runApi);
}

checkWhitespace(searchKeyword);
getGifApi();