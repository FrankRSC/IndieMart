import React, { useState } from 'react';
import {sendMail} from '../../api/SendMailApi';

export const SendCommentary = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        asunto: '',
        email: '',
        comentario: '',
    });

    const onInputChange = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
        console.log(e.target.name, e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const newCommentary = {
            nombre: datos.nombre,
            asunto: datos.asunto,
            email: datos.email,
            comentario: datos.comentario,
        };
        await sendMail(newCommentary);
    }

    return (
        <div class="row">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <div className="card card-body">
                        <h3>
                            Contactanos
                        </h3>
                    </div>
                    <br />
                    {/**Asunto */}
                    <div className="form-group">
                        <h5>
                            Asunto
                        </h5>
                        <input
                            type="text"
                            className="form-control"
                            name="asunto"
                            placeholder="Asunto, sugerencia o queja"
                            value={datos.asunto}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    {/**Nombre */}
                    <div className="form-group">
                        <h5>
                            Nombre
                        </h5>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            placeholder="Nombre"
                            value={datos.name}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    {/**Email */}
                    <div className="form-group">
                        <h5>
                            Email
                        </h5>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            value={datos.email}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    {/**Commentario, sugerencia o queja */}
                    <div className="form-group">
                        <h5>
                            Comentario
                        </h5>
                        <textarea
                            type="text"
                            className="form-control"
                            name="comentario"
                            placeholder="Comentario, sugerencia o queja"
                            value={datos.comentario}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    {/**Boton para enviar */}
                    <form onSubmit={onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
