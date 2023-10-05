import axios from 'axios';

export async function fetchGallery(word, page = 1) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '38659360-bc0842e55c2c51de5ea7c36c0',
        q: `${word}`,
        image_type: 'photo',
        orientation: ' horizontal',
        safesearch: true,
        page: `${page}`,
        per_page: 12,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

// let page = 1;

// export const fetchGallery = async () => {
//   const { data } = await axios.get(
//     'https://pixabay.com/api/?q=cat&page=1&key=38659360-bc0842e55c2c51de5ea7c36c0&image_type=photo&orientation=horizontal&per_page=12'
//   );
//   console.log(data);
//   // return data;
// };

// export const fetchGallery = () => {
//   return axios.get(
//     'https://pixabay.com/api/?q=cat&page=1&key=38659360-bc0842e55c2c51de5ea7c36c0&image_type=photo&orientation=horizontal&per_page=12'
//   );
// };

// export async function fetchGallery(word, page) {
//   const response = await axios.get('https://pixabay.com/api/', {
//     params: {
//       key: '38659360-bc0842e55c2c51de5ea7c36c0',
//       q: `${word}`,
//       image_type: 'photo',
//       orientation: ' horizontal',
//       safesearch: true,
//       page: `${page}`,
//       per_page: 12,
//     },
//   });
//   const data = response.data;
//   console.log(response);
//   return data;
// }
