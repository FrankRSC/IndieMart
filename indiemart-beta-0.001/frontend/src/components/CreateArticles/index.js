import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CreateArticle = props => {

    const [datos, setDatos] = useState({
        nombre: '',
        ingredientes: '',
        descripcion: '',
        editing: false,
        precio: '',
        valoracion: 10,

    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const newArticle = {
            nombre: datos.nombre,
            ingredientes: datos.ingredientes,
            descripcion: datos.descripcion,
            precio: datos.precio,
            valoracion: datos.valoracion,
        };

        if (datos.editing === true) {
            await axios.put('http://localhost:4000/api/articulos' + datos._id, newArticle)
        } else {
            await axios.post('http://localhost:4000/api/articulos', newArticle);
        }
    }

    const onInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,

        })
        

    }


    return (
        <div>
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>
                        Crea un articulo
                    </h4>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Nombre"
                            name="nombre"
                            onChange={onInputChange}
                            value={datos.nombre}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingredientes"
                            name="ingredientes"
                            value={datos.ingredientes}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="descripcion"
                            name="descripcion"
                            value={datos.descripcion}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Precio"
                            name="precio"
                            value={datos.precio}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Valoracion"
                            name="valoracion"
                            value={datos.valoracion}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <form onSubmit={onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Crear
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )

}