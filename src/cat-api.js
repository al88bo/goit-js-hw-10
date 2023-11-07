import { loaderSymbol } from './index.js';
import Notiflix from 'notiflix';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_KXxN6w6uQkAQUsHG3HevjVbSffK6LZwBeAaBRyI4jKyUC6FptWtdd0cWctPnQSf4';

const catInfoPlace = document.querySelector('.cat-info');

export function fetchBreeds() {
  loaderSymbol.style.display = 'block';
  return axios.get('/breeds').then(resp => {
    if (!resp.status === 200) {
      throw new Error(resp.statusText);
    }
    return resp.data;
  });
}

export function fetchCatByBreed(e) {
  loaderSymbol.style.display = 'block';
  catInfoPlace.innerHTML = '';
  axios
    .get('images/search', {
      params: { breed_ids: e.target.value },
    })
    .then(resp => {
      if (!resp.status === 200) {
        throw new Error(resp.statusText);
      }
      return resp.data;
    })
    .then(renderCat)
    .catch(errorNotiflix)
    .finally(() => (loaderSymbol.style.display = 'none'));
}

function renderCat(data) {
  catInfoPlace.style.margin = '15px 15px';
  catInfoPlace.style.display = 'flex';
  catInfoPlace.innerHTML = getMarkup(data);
}

function getMarkup([{ breeds, url }]) {
  return `<div style="width: 750px; margin-right: 15px">
        <img
          src="${url}"
          alt="${breeds[0].name}"
          width="100%"
        />
      </div>
      <div>
        <h1 style="margin-top: 0px">${breeds[0].name}</h1>
        <p>${breeds[0].description}
        </p>
        <p>
          <span style="font-weight: bold">Temperament: </span>${breeds[0].temperament}
        </p>
      </div>`;
}

export function errorNotiflix(error) {
  Notiflix.Notify.failure(
    'Oops! Something went wrong! Try reloading the page!',
    {
      timeout: 150000,
      width: '50vw',
      position: 'center-top',
      distance: '4vw',
      clickToClose: true,
    }
  );
  console.log(error);
}
