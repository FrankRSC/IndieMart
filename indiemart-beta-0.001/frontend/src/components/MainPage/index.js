import React, { useState, useEffect } from 'react';

export const MainPage = props => {

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
