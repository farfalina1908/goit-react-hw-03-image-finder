import axios from 'axios';
import PropTypes from 'prop-types';

export async function searchImages(searchWord, page) {
  axios.defaults.baseURL = 'https://pixabay.com/api';
  const API_KEY = '34843304-df170f32d723ce0de6453f0ca';
  const SEARCH_PARAMS = `?q=${searchWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return await axios.get(`/${SEARCH_PARAMS}`);
}

searchImages.propTypes = {
  searchWord: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
