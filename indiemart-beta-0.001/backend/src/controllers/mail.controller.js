const nodemailer = require('nodemailer');

class CorreoControlador {
    async sendMail(req, res) {
        try {
            const { nombre, email, asunto, comentario } = req.body;
            console.log("esto es del controlador");
            console.log(req.body);
    
            // const userHTML = `
            //     <h1>Queja o sugerencia</h1>
            //         <ul>
            //             <li>Gracias por su comentario</li>
            //         </ul>
            //     <p>Le damos la gracias por tomarse su tiempo para realizarnos 
            //     un comentario sobre el sitio, el equipo de desarrollo poda leer 
            //     su comentario y proceder</p>
            // `;
    
            const transport = nodemailer.createTransport({
                service: 'gmail',
                secure: false,
                auth: {
                    user: 'test.indiemart@gmail.com',
                    pass: 'test.123456789'
                }
            });
    
            const indieMailOptions = {
                from: 'QuejasYSugerencias <test.indiemart@gmail.com>',
                to: 'test.indiemart@gmail.com',
                subject: 'Quejas y Sugerencias',
                html: `
                <h1>Queja o sugerencia de usuario</h1>
                    <ul>
                        <li>Usuario: ${nombre}</li>
                        <li>Correo: ${email}</li>
                    </ul>
                <h3>${asunto}</h3>
                <p>${comentario}</p>
            `
            };
    
            // const userMailOptions = {
            //     from: 'IndieMart <test.indiemart@gmail.com>',
            //     to: email,
            //     subject: 'Quejas y Sugerencias',
            //     HTML: userHTML
            // };
    
            transport.sendMail(indieMailOptions, (err, info) => {
                if(err) {
                    console.log(err.info);
                    res.status(500).send(err.message);
                } else {
                    res.status(200).json(req.body);
                }
            });
    
            // transport.sendMailer(userMailOptions, (err, info) => {
            //     if(err) {
            //         console.log(err.message);
            //         res.status(500).send(err.message);
            //     } else {
            //         res.status(200).json(req.body);
            //     }
            // })
    
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'A ocurrido un error al enviar el mensaje', err });
        }
    }
}

module.exports = CorreoControlador;
