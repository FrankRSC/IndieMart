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
<<<<<<< HEAD
        if (res.status !== 200) {
            console.log('esanoestucontrase;a')
        } else {
            if (data) {
                window.location.href = "/create";
            }
        }
=======
>>>>>>> 5b38db602309c584c5e9cc13b05be65d9174db0e
        return res;
    } catch (err) {
        return err.res;
    }
}