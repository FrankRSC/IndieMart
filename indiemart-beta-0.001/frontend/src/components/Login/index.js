import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Login = props => {

    const [datos, setDatos] = useState({
        email: '',
        contrasena:''
    })

    const onInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,

        })
    }

    //loguea al usuario
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await axios({
            url: 'http://localhost:4000/api/usuarios/signin',
            method: 'POST',
            data: {username: datos.email, password: datos.contrasena},
          })
          if(response.status !== 200) {
              console.log('esanoestucontrase;a')
          }else{
            if(datos){
                props.history.push('/create');
              }
          }
    }

    //toma los datos del usuario logueado

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="login">
                        <h4>
                            Login
                        </h4>
                        <div className="form-group py-4">
                            <h5>Correo electronico</h5>
                            <input
                                className="form-control"
                                placeholder="Correo electronico"
                                type="email"
                                name="email"
                                onChange={onInputChange}
                                value={datos.email}

                            />
                        </div>
                        <div className="form-group">
                            <h5>Contrasena</h5>
                            <input
                                className="form-control"
                                placeholder="Contrasena"
                                type="password"
                                name="contrasena"
                                onChange={onInputChange}
                                value={datos.contrasena}

                            />
                        </div>
                        <form onSubmit={onSubmit}>
                            <button type="submit" className="btn btn-primary">
                                Iniciar sesion
                            </button>                            
                        </form>

                    </div>
                </div>
                <div className="col">
                    AQUI VA UNA IMAGEN BIEN CHIDORI
                </div>
            </div>
        </div>
    )

}
