import axios from 'axios';

const baseUrl = 'http://localhost:4000/api/usuarios/signin';

/**
* @param {Object} data Objecto que contiene la informacion del formulario
*/

export const authenticate = async (data) => {
    try {
        const res = await axios({
            url: baseUrl,
            method: 'POST',
            data: { username: data.email, password: data.contrasena },
        });
        return res;
    } catch (err) {
        return err.res;
    }
}