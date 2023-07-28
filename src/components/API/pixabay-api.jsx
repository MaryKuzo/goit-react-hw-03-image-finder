import axios from 'axios';

const KEY = '37259040-666f8102f8645398c01db5082';
const BASE_URL = 'https://pixabay.com/api/';

async function fetchImages(searchTerm, page) {
  const url = `${BASE_URL}?key=${KEY}&q=${encodeURIComponent(searchTerm)}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;
  const response = await axios.get(url);

  return response.data;

}

export default fetchImages;
