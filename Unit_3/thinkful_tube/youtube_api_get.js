
// Testing api data
/*                                                      https://www.googleapis.com/youtube/v3/search/?q=indiana%20jones&part=snippet&key=AIzaSyCpcsrpsW5YrXga0kp0tg241mPPwhsxwvA&r=json/ */
var youtubeData = {
  q: ''
};
var OMDB_BASE_URL = "https://www.googleapis.com/youtube/v3/search"
function getDataFromYoutubeApi(searchTerm, callback) {

  var youtubeSendSetting = {
    url: OMDB_BASE_URL,
    data: {
      q: youtubeData.q,
      part: 'snippet',
      key: 'AIzaSyCpcsrpsW5YrXga0kp0tg241mPPwhsxwvA',
      r: 'json',
      maxResults: 25

    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(youtubeSendSetting);

}

function saveData(data) {

  console.log(data);
  console.log(data.items);
  renderAndDisplaySearchResults(data.items);


}

function formSubmit() {

  $('#form').submit(function(event){

    event.preventDefault();
    var formquery = $('input.searchfield').val()
    youtubeData.q = formquery

    getDataFromYoutubeApi(youtubeData.q, saveData);
    // console.log(youtubeData["items"]);
    // createHtml(youtubeData.data.items);

});

}

function renderAndDisplaySearchResults(array) {
  var htmlOut = '<div class="row">';
  array.forEach(function(element, index) {
  console.log(element.id.videoId)
  var url = "https://www.youtube.com/watch?v=" + element.id.videoId;
  console.log("This the url: " + url);
  var title = element.snippet.title;
  console.log("Titles: " + title);
  var description = element.snippet.description;
  console.log("This is the description: " + description);
  var imgUrl = element.snippet.thumbnails.medium.url;
  console.log("These are the image urls: " + imgUrl);
  var innerDivs = (`
  <div class="col-4">
      <div class="box imagestyle">
        <a href= "${url}">
          <img src="${imgUrl}" alt="${description}">
        </a>
          <div class>
              <h2 class="title">${title}</h2>
          </div>
      </div>
  </div>
  `)
  if ( (index + 1) % 3 === 0 ) {
    innerDivs += '</div><div class="row">'
  } // closes if statement
  htmlOut += innerDivs;

}) // closes foreach

  htmlOut += "</div>";
  console.log(htmlOut);
  $('.js-searchresults').html(htmlOut)

} // closes function

$(function(){formSubmit();});
// console.log(youtubeData);



// function renderHtml(){}
