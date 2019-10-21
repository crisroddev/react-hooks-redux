import axios from 'axios';

const clienteAxios = axios.create({
    baseUrl: 'hyyp://localhost:4000'
});

export default clienteAxios;