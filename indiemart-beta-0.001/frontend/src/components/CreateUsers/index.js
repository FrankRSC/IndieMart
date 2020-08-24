import React, { useState } from 'react';
import { addUser } from '../../api/UsersAPI';
import './styles.css';

export const CreateUser = props => {
    /**Declaracion de variables y objeto con useState */
    const [datos, setDatos] = useState({
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        // fechaNac: '',
        email: '',
        contrasena: '',
        celular: '',
        // tipoUsuario: '',
        pais: 'Mexico',
        estado: 'Sonora',
        ciudad: 'Hermosillo',
    });
    const [editing, setEditing] = useState(false);

    /**Registrar nuevo usuario y editarlo */
    const onSumit = async e => {
        e.preventDefault();
        const newUser = {
            nombre: datos.nombre,
            apellidoP: datos.apellidoP,
            apellidoM: datos.apellidoM,
            // fechaNac: datos.fechaNac,
            email: datos.email,
            contrasena: datos.contrasena,
            celular: '+52' + datos.celular,
            // tipoUsuario: datos.tipoUsuario,
            pais: datos.pais,
            estado: datos.estado,
            ciudad: datos.ciudad,
        };
        await addUser(newUser);
    }

    /**tomar nombre y valor del campo */
    const onInputChange = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div class="row">
            <div className="col-md-6">
                <div className="card card-body">
                    <div className="card card-body">
                        <h3>
                            Registro
                        </h3>
                    </div>
                    <br />
                    {/**Nombre del usuario */}
                    <div className="form-group">
                        <h5>
                            Nombre
                        </h5>
                        <input
                            className="form-control"
                            name="nombre"
                            value={datos.nombre}
                            placeholder="Nombre"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    {/**Apellido paterno del usuario */}
                    <div className="form-group">
                        <h5>
                            Apellido paterno
                        </h5>
                        <input
                            type="text"
                            className="form-control"
                            name="apellidoP"
                            value={datos.apellidoP}
                            placeholder="Apelldio Paterno"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    {/**Apelldio materno del usuario */}
                    <div className="form-group">
                        <h5>
                            Apellido materno
                        </h5>
                        <input
                            type="text"
                            className="form-control"
                            name="apellidoM"
                            value={datos.apellidoM}
                            placeholder="Apellido Materno"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    {/**Fecha de nacimiento del usuario */}

                    {/**Email del usuario */}
                    <div className="form-group">
                        <h5>
                            Correo electronico
                        </h5>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            value={datos.email}
                            placeholder="Email"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    {/**Contrasena del usuario */}
                    <div className="form-group">
                        <h5>
                            Contraseña
                        </h5>
                        <input
                            type="text"
                            className="form-control"
                            name="contrasena"
                            value={datos.contrasena}
                            placeholder="Password"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                    {/**Celular del usuario */}
                    <h5>
                        Celular o Telefono
                    </h5>
                    <div className="rowCel">
                        <div className="col1">
                            +52
                        </div>
                        <div className="col2">
                            <div className="form-group">
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="celular"
                                    value={datos.celular}
                                    placeholder="Numero Celular"
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    {/**Tipo de usuario */}
                    {/**Vendedor */}
                    {/* <div className="rowCel">
                        <div className="col3">
                            <h6>Vendedor</h6>
                        </div>
                        <div className="col4">
                            <div className="form-group">
                                <input
                                    type="radio"
                                    name="tipoUsuario"
                                    value="Vendedor"
                                    onChange={onInputChange}
                                />
                            </div>
                        </div> */}
                    {/**Comprador */}
                    {/* <div className="col3">
                            <h6>Comprador</h6>
                        </div>
                        <div className="col4">
                            <div className="form-group">
                            <input
                                    type="radio"
                                    name="tipoUsuario"
                                    value="Comprador"
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                    </div> */}
                    {/**Pais del usuario */}
                    <div className="form-group">
                        <h5>
                            Pais
                        </h5>
                        <select
                            name="pais"
                            className="form-control"
                            value={datos.pais}
                            onChange={onInputChange}
                        >
                            <option>
                                Estados unidos
                            </option>
                            <option >
                                Mexico
                            </option>
                        </select>
                    </div>
                    {/**Estado del usuario */}
                    <div className="form-group">
                        <h5>
                            Estado
                        </h5>
                        <select
                            name="estado"
                            className="form-control"
                            value={datos.estado}
                            onChange={onInputChange}
                        >
                            <option>
                                Baja california
                            </option>
                            <option >
                                Sonora
                            </option>
                        </select>
                    </div>
                    {/**Ciudad del usuario */}
                    <div className="form-group">
                        <h5>
                            Ciudad
                        </h5>
                        <select
                            name="ciudad"
                            className="form-control"
                            value={datos.ciudad}
                            onChange={onInputChange}
                        >
                            <option>
                                Tijuana
                            </option>
                            <option >
                                Hermosillo
                            </option>
                        </select>
                    </div>
                    <form onSubmit={onSumit}>
                        <button type="submit" className="btn btn-primary">
                            Registrar
                        </button>
                    </form>
                </div>
            </div>
            <div>
                Indimark
            </div>
        </div>
    )
}