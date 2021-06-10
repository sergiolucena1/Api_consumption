import axios from 'axios';
 
// criando uma instancia 
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});



export default api;

