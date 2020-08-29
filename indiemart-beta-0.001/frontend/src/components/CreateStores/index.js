import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addStore, updateStore } from '../../api/StoresAPI';

export const CreateStore = props => {

    const [datos, setDatos] = useState({
        nombre: '',
        propietario: '',
        descripcion: '',
        valoracion: 10,
        editing: false,
        tipoEntrega: '',
        celular: '',
        telefono: '',
        // url: '',
        // publicId: ''

    });

    //const [users, setUsers] = useState([]);

    useEffect(() => {
        // validarLog();
        validar();
    }, [])

    const validarLog = async () => {
        const res = await axios({
            url: 'http://localhost:4000/api/usuarios/user',
            method: 'GET',
        });
    }

    const validar = async () => {
        if (props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/tiendas/' + props.match.params.id);
            setDatos({
                ...datos,
                nombre: res.data.nombre,
                propietario: res.data.propietario,
                descripcion: res.data.descripcion,
                valoracion: res.data.valoracion,
                editing: true,
                tipoEntrega: res.data.pidaRecoja,
                celular: res.data.celular,
                telefono: res.data.telefono,
                // url: res.data.url,
                // publicId: res.data.publicId
            });

        }
    }

    const onSubmit = async (e) => {

        e.preventDefault();
        const newStore = {
            nombre: datos.nombre,
            propietario: datos.propietario,
            descripcion: datos.descripcion,
            valoracion: datos.valoracion,
            tipoEntrega: datos.tipoEntrega,
            celular: datos.celular,
            telefono: datos.telefono,
        };

        if (datos.editing === true) {
            updateStore(datos._id, newStore);
        } else {
            addStore(newStore);
        }

        // props.history.push('/');

    }

    const onInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,

        })
        console.log([e.target.name], e.target.value)


    }

    return (
        <div>
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>
                        Crea Tu tienda
                    </h4>

                    <div className="form-group">
                        <input
                            className="form-control"
                            name="propietario"
                            onChange={onInputChange}
                            value={datos.propietario}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            name="nombre"
                            value={datos.nombre}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <select
                            className="form-control"
                            name="tipoEntrega"
                            onChange={onInputChange}
                            value={datos.tipoEntrega}
                        >
                            <option>
                                Domicilio
                            </option>
                            <option>
                                Pida y recoja
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Celular"
                            name="celular"
                            value={datos.celular}
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
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Telefono"
                            name="telefono"
                            value={datos.telefono}
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <div>
                            <h6>Introduzca su logo</h6>
                        </div>
                        <input
                            type="file"
                            name="image"
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="descripcion"
                            className="form-control"
                            placeholder="Descripcion"
                            value={datos.descripcion}
                            onChange={onInputChange}
                            required
                        >
                        </textarea>
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