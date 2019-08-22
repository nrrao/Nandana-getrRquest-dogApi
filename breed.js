'use strict';

function getDogImage(dogBreedName) {
  console.log(dogBreedName);
  fetch(`https://dog.ceo/api/breed/${dogBreedName}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results').html(
    `<img src="${responseJson.message}" class="results-img">`
  );
}

function watchForm() {
  $('#dog-breed').submit(event => {
    $('.results').empty();
    event.preventDefault();
    let dogBreed=$('#breed-of-dog').val();
    console.log(dogBreed);
    getDogImage(dogBreed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});