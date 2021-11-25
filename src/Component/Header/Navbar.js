import React from 'react';
import Logo from '../../Asset/Image/Logo.png';



function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/cbnj">
                        <img className="navbar_img" src={Logo} alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_menu"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbar_menu">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#/">Services</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#nkj" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#/">Action</a></li>
                                    <li><a className="dropdown-item" href="#/">Another action</a></li>
                                    <li><a className="dropdown-item" href="#/">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;