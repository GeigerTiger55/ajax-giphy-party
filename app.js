"use strict";

//Getting the form and adding event handler
const $giphyForm = $('form');
$giphyForm.on("submit", handleSubmit);

/** API call to Giphy, pass 1st url  option to createGiphy func */
async function handleSubmit(evt) {
  evt.preventDefault();
  // console.log('in handleSubmit');

  const inputValue = $("input[name='search-term']").val();
  // console.log('in handleSubmit, value is: ', inputValue);

  const response = await axios.get("https://api.giphy.com/v1/gifs/search", { params: { q: inputValue, api_key: 'sdxbpcBL55t0GtSa2YFU6lhmsxTei3LF', limit: 1 } });
  const url = response.data.data[0].images.original.url;
  // console.log(response.data.data[0]);
  // console.log('response: ', url);
  createGiphy(url);

}

/** Append gif to gallery using url from api query */
function createGiphy(giphyUrl) {
  const $gallery = $('#gallery');
  const $newGif = $("<div>");
  const $gif = $("<img>");
  $gif.attr("src", giphyUrl);
  $newGif.append($gif);
  $gallery.append($newGif);
}
