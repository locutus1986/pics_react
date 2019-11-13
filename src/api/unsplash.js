import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 
            'Client-ID dcef7b30c9b60d1af0b26c16654b9b1525ec610f7642d1449f275ee4e283ee9b'
    }
});