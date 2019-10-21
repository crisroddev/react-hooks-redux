import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'http://localhost:400'
});

export default clienteAxios;