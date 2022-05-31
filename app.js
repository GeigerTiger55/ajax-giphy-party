"use strict";

console.log("Let's get this party started!");

//Getting the form and adding event handler
const $giphyForm = $('form');
$giphyForm.on("submit", handleSubmit);

/**Handle when the form is submitted */
async function handleSubmit(evt){
    evt.preventDefault();
    console.log('in handleSubmit');

    const inputValue = $("input[name='search-term']").val();
    console.log('in handleSubmit, value is: ', inputValue);

    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {params: {q: inputValue, api_key: 'sdxbpcBL55t0GtSa2YFU6lhmsxTei3LF', limit: 1}});
    const url = response.data.data[0].url;
    console.log('response: ', response.data.data[0]);

    createGiphy(url);

}

function createGiphy(url){

}


//http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym