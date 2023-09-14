import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8080/',
});

http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
http.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE';
http.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';

export default http;