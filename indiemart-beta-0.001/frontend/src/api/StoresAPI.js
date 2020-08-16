import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/tiendas'

/**
* @param {Object} data Objecto que contiene la informacion del formulario
*/

export const addStore = async data => {
    try {
        const res = await axios({
            url: baseUrl,
            method: 'POST',
            data,
            heders: {
                'content-type': 'multipart/form-data'
            }
        })
        return res
    } catch (err) {
        return err.res
    }
}

/**
* @param {Object} data Objecto que contiene la informacion del formulario
* @param {Integer} id Objecto que contiene la informacion del formulario
*/

export const updateStore = async (id, data) => {
    try {
        const res = await axios.put(baseUrl + "/", id, data)
        return res;
    } catch (err) {
        return err.res;
    }
}