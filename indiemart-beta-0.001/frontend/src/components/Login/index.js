import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Login = props => {


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
                                name="correo"

                            />
                        </div>
                        <div className="form-group">
                            <h5>Contrasena</h5>
                            <input
                                className="form-control"
                                placeholder="Contrasena"
                                type="password"
                                name="contrasena"

                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Iniciar sesion
                        </button>
                    </div>
                </div>
                <div class="col">
                    AQUI VA UNA IMAGEN BIEN CHIDORI
                </div>
            </div>
        </div>
    )

}
