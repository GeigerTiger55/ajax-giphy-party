"use strict";
/** TOFIX: 
 * - store api_key and base url as global constant
 * - separation of concerns: pull .get into getGiphy function
 * 
 * */

//Getting the form and adding event handler
const $gallery = $('#gallery');
const $giphyForm = $('form');
$giphyForm.on("submit", handleSubmit);

//Add event listener to Remove Button
$('#remove-btn').on('click', removeAllGiphys);

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
  const $newGif = $("<div>");
  const $gif = $("<img>");
  $gif.attr("src", giphyUrl);
  $newGif.append($gif);
  $gallery.append($newGif);
}

/** Empty the gallery element */
function removeAllGiphys(){
    $gallery.empty();
}
