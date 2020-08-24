import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/articulos'

/**
* @param {Object} data Objecto que contiene la informacion del formulario
*/

export const addArticle = async data => {
    try {
        const res = await axios.post(baseUrl, data)
        return res;
    }catch (err){
        return err.res;
    }
}

/**
* @param {Object} data Objecto que contiene la informacion del formulario
* @param {Integer} id Objecto que contiene la informacion del formulario
*/

export const updateArticle = async (id, data) => {
    try {
        const res = await axios.put(baseUrl + "/", id, data)
        return res;
    }catch (err){
        return err.res;
    }
}


