'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results').append(
    `<img src="${responseJson.message}" class="results-img">`
  );
}

function watchForm() {
  $('#dog-api-test').submit(event => {
    $('.results').empty();
    event.preventDefault();
    let noOfPics =$('#number-of-pics').val();
    for(let i=0;i<noOfPics;i++){
      getDogImage();
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

