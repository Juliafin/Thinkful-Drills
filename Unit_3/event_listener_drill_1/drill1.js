// foo(); function foo() { return 1; }

function imgReplace(){

  //console.log(imageSrc);
  // var mainAttr = $('.hero').children('img').attr('src');

  $('.thumbnail').click(function(event){
    var imageSrc = $(this).children('img').first().attr('src');

    //var imageSrc = $(this).find(':first-child').attr('src');
    console.log(imageSrc);

    //     event.stopPropagation();
    $('.hero > img').attr('src', imageSrc);
  });
}

$(imgReplace);
