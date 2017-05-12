$(document).ready(function(){
  console.log("document ready!");
  formSubmit()
})


class Image {
  constructor(url) {
    this.url = url
  }

  render() {

  }
}

class Caption {
  constructor(text) {
    this.text = text
  }

  render() {

  }
}


var gif = 'https://giphy.com/gifs/zWJCJtP40CTra'

var imageUrl = `$#${image_url}`
var caption = `$#${caption}`


// $('#btn').on('click', function() {
//     $('#img').attr('src', $('#url').val());
// });

function formSubmit() {
  $('#photo-form').on('submit', function(event) {
    event.preventDefault();

    //debugger
    var imageUrl = $('#image_url').val();
    var caption = $('#caption').val();

    //$("#photo-list").append('<br>' + gif);

    //$('#theDiv').prepend('<img id="theImg" src="theImg.png" />')
    $('#image_output').html(`<img id="${imageUrl}" src="${imageUrl}" />`)

    //$("#image_output").attr('src', imageUrl);
    // almost??

    //$("#photo-list").append('<br>' + imageUrl);
    // above renders url input as text
    $("#photo-list").append('<br>' + caption + '<br>');
    console.log('form submitted!');
    this.reset(); //clears form
  })
}
