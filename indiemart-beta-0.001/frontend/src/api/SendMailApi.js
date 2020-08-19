import axios from 'axios';

const baseUrl = 'http://localhost:4000/comentario';

export const sendMail = async data => {
    try {
        const res = await axios.post(baseUrl, data);
        return res;
    } catch (err) {
        return err.res;
    }
};