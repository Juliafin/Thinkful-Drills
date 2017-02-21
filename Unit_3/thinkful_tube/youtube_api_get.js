
// Testing api data
/*                                                      https://www.googleapis.com/youtube/v3/search/?q=indiana%20jones&part=snippet&key=AIzaSyCpcsrpsW5YrXga0kp0tg241mPPwhsxwvA&r=json/ */
var youtubeData = {
  q: '',
  nextPageToken: '',
  prevPageToken: ''
};
var OMDB_BASE_URL = "https://www.googleapis.com/youtube/v3/search"
function getDataFromYoutubeApi(searchTerm, callback, pagetoken) {

  var youtubeSendSetting = {
    url: OMDB_BASE_URL,
    data: {
      q: youtubeData.q,
      part: 'snippet',
      key: 'AIzaSyCpcsrpsW5YrXga0kp0tg241mPPwhsxwvA',
      r: 'json',
      maxResults: 25,
      pageToken: pagetoken

    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(youtubeSendSetting);

}

function saveData(data) {

  // console.log(data);
  // console.log(data.items);
  youtubeData.nextPageToken = data.nextPageToken;
  youtubeData.prevPageToken = data.prevPageToken;
  console.log("Next: " + data.nextPageToken);
  console.log("Previous: " + data.prevPageToken);
  renderAndDisplaySearchResults(data.items);



}

function formSubmit() {

  $('#form').submit(function(event){

    event.preventDefault();
    youtubeData.q = $('input.searchfield').val()
    getDataFromYoutubeApi(youtubeData.q, saveData);

});

}

function renderAndDisplaySearchResults(array) {
  var htmlOut = '<div class="row">';
  array.forEach(function(element, index) {
  // console.log(element.id.videoId)
  var url = "https://www.youtube.com/watch?v=" + element.id.videoId;
  // console.log("This the url: " + url);
  var title = element.snippet.title;
  // console.log("Titles: " + title);
  var description = element.snippet.description;
  // console.log("This is the description: " + description);
  var imgUrl = element.snippet.thumbnails.medium.url;
  // console.log("These are the image urls: " + imgUrl);
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
  `);
  if ( (index + 1) % 3 === 0 ) {
    innerDivs += '</div><div class="row">'
  } // closes if statement
  htmlOut += innerDivs;

}) // closes foreach

  htmlOut += "</div>";
  // console.log(htmlOut);
  $('.js-searchresults').html(htmlOut)
  var nextButton = (`<label for="nextbutton"></label>
  <button name="nextbutton" class= "nextbutton" id="nextbutton">Next 25 Results</button>`)

  var prevButton = (`<label for="previousbutton"></label>
  <button name="previousbutton" class= "previousbutton hidden" id="previousbutton">Previous 25 Results</button>`)

  // console.log($('#nextButton').length)
  $('.extrabuttons').empty();
  $('.extrabuttons').append(prevButton);
  $('.extrabuttons').append(nextButton);


  nextButtonListen();
  prevButtonListen();
  if (youtubeData.prevPageToken.length !== 0) {
    $('#previousbutton').removeClass('hidden');
  }

} // closes function

$(function(){formSubmit();});



function nextButtonListen(){
  $('#nextbutton').click(function(event){
    getDataFromYoutubeApi(youtubeData.q, saveData, youtubeData.nextPageToken);
    console.log("Next button key inside the listener" + youtubeData.nextPageToken);
    console.log("Previous button key inside the listener" + youtubeData.prevPageToken);
  })
}

function prevButtonListen(){
  $('#previousbutton').click(function(event){
    getDataFromYoutubeApi(youtubeData.q, saveData, youtubeData.prevPageToken);
    console.log("Previous button key inside the listener" + youtubeData.prevPageToken);
  })
}
