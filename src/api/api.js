import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export const serviceReq = async (query, page) => {
  const resp = await axios.get('api/', {
    params: {
      q: query,
      key: '38392384-4306dcd0758c0a555545ea085',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });

  return resp.data;
};
