import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 0258b7ab9995e8cdc2b1d742a3648041b05d4c08e72e9f74e93ef3a5a6868aea'
  }
});
