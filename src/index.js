import { fetchCatByBreed } from './cat-api';
import { fetchBreeds } from './cat-api';

export const breedList = document.querySelector('.breed-select');

fetchBreeds();
breedList.addEventListener('change', fetchCatByBreed);

// const catInfo = document.querySelector('.cat-info');
// const array = [
//   {
//     breeds: [
//       {
//         weight: { imperial: '6 - 11', metric: '3 - 5' },
//         id: 'bomb',
//         name: 'Bombay',
//         cfa_url: 'http://cfa.org/Breeds/BreedsAB/Bombay.aspx',
//         vetstreet_url: 'http://www.vetstreet.com/cats/bombay',
//         vcahospitals_url:
//           'https://vcahospitals.com/know-your-pet/cat-breeds/bombay',
//         temperament: 'Affectionate, Dependent, Gentle, Intelligent, Playful',
//         origin: 'United States',
//         country_codes: 'US',
//         country_code: 'US',
//         description:
//           "The the golden eyes and the shiny black coa of the Bopmbay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.",
//         life_span: '12 - 16',
//         indoor: 0,
//         lap: 1,
//         alt_names: 'Small black Panther',
//         adaptability: 5,
//         rex: 0,
//         suppressed_tail: 0,
//         short_legs: 0,
//         wikipedia_url: 'https://en.wikipedia.org/wiki/Bombay_(cat)',
//         hypoallergenic: 0,
//         reference_image_id: '5iYq9NmT1',
//       },
//     ],
//     id: 'BkksyH95Z',
//     url: 'https://cdn2.thecatapi.com/images/BkksyH95Z.jpg',
//   },
// ];

// renderCat(array);

// function renderCat(array) {
//   catInfo.style.backgroundColor = 'teal';
//   catInfo.style.display = 'flex';
//   catInfo.style.margin = '15px 5px';
//   catInfo.innerHTML = getMarkup(array);
// }

// function getMarkup([{ breeds, url }]) {
//   return `<div style="width: 150vw; margin-right: 15px">
//         <img
//           src="${url}"
//           alt="${breeds[0].name}"
//           width="100%"
//         />
//       </div>
//       <div>
//         <h1 style="margin-top: 0px">${breeds[0].name}</h1>
//         <p>${breeds[0].description}
//         </p>
//         <p>
//           <span style="font-weight: bold">Temperament: </span>${breeds[0].temperament}
//         </p>
//       </div>`;
// }
