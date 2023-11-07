import { fetchBreeds, fetchCatByBreed, errorNotiflix } from './cat-api.js';
import SlimSelect from 'slim-select';

export const loaderSymbol = document.querySelector('.loader');
const breedList = document.querySelector('.breed-select');

fetchBreeds()
  .then(data => {
    const placeholder = '<option data-placeholder="true"></option>';
    const markup = data
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join('');
    breedList.innerHTML = placeholder + markup;
    breedList.style.display = 'flex';
    new SlimSelect({
      select: '#selectElement',
      settings: {
        placeholderText: 'Please select a cat breed ...',
      },
    });
    breedList.addEventListener('change', fetchCatByBreed);
  })
  .catch(errorNotiflix)
  .finally(() => (loaderSymbol.style.display = 'none'));
