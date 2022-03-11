import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.reddit.com',
});

export default instance;
