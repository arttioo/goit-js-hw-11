import { Notify } from 'notiflix/build/notiflix-notify-aio';
const axios = require('axios');
const form = document.querySelector('.search-form');
const search = document.querySelector('button');
fetchPictures();
form.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();
  const input = evt.currentTarget.elements.searchQuery.value;
  console.log(input);
}
function fetchPictures(name) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '4564300-2fd2408749091e59a75f2c78f';
  return fetch(
    `${BASE_URL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      console.log(resp.json);
      return resp.json();
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops...');
    });
}
fetchPictures(input.value).then(arr => {
  console.log(arr.length);

  if (arr.length === 0) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return
    createMarkup(arr);
  }
}
);
 

  

// Make a request for a user with a given ID
// axios
//   .get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//   });