import axios from 'axios';
const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '6a6989dd5dmsh0d6264849432981p1fa855jsn750f7bd18a0c',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const fetch_api = async (url) => {
  const { data } = await axios.get(`${'https://youtube-v31.p.rapidapi.com'}/${url}`, options);

  return data;
};

