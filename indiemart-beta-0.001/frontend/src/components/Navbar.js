import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Navbar = props => {

    const [user, setUser] = useState([]);

    useEffect(() => {

        // axiosData();

    }, [])

    const axiosData = async () => {
        try {
            const res = await axios({
                url: 'http://localhost:4000/api/usuarios/user',
                method: 'GET',
            });
            console.log(res)
        } catch (err) {
            console.log(err)
        }

    }

    if (user===null) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    IndieMart
                    </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {user.name}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    IndieMart
                        </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Iniciar sesion</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary btn-sm">
                                <Link style={{ color: 'white' }} to="/register">Registrate!</Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
