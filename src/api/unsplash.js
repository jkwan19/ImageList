import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fMTnsNhnJFOFbTEddcOlhbSP9aOpMglmXz4ldTR1zVo'
  }
});

