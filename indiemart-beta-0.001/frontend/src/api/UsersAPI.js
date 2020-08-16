import axios from 'axios';

/**
* @param {Object} data Objecto que contiene la informacion del formulario
*/

const baseUrl = 'http://localhost:4000/api/usuarios'

export const addUser = async data => {
    try {
        const res = await axios.post(baseUrl, data)
        return res;
    }catch (err){
        return err.res;
    }
}