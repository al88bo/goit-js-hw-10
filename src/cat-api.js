import { breedList } from './index.js';
import Notiflix from 'notiflix';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_KXxN6w6uQkAQUsHG3HevjVbSffK6LZwBeAaBRyI4jKyUC6FptWtdd0cWctPnQSf4';

const catInfo = document.querySelector('.cat-info');

export function fetchBreeds() {
  axios
    .get('/breeds')
    .then(response => {
      const markup = response.data
        .map(({ id, name }) => `<option value="${id}">${name}</option>`)
        .join();
      breedList.innerHTML = markup;
    })
    .catch(errorNotiflix);
}

export function fetchCatByBreed(e) {
  axios
    .get('images/search', {
      params: { breed_ids: e.target.value },
    })
    .then(renderCat)
    .catch(errorNotiflix);
}

function renderCat(response) {
  catInfo.style.margin = '15px 5px';
  catInfo.style.display = 'flex';
  catInfo.innerHTML = getMarkup(response.data);
}

function getMarkup([{ breeds, url }]) {
  return `<div style="width: 125vw; margin-right: 15px">
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

function errorNotiflix() {
  Notiflix.Notify.failure(
    'Oops! Something went wrong! Try reloading the page!',
    {
      timeout: 10000,
      width: '50vw',
      position: 'right-top',
      distance: '2vw',
      clickToClose: true,
    }
  );
}
