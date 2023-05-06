import React from 'react';
import logo from '../../../images/logo.png'
import '../Header/Header.css'

const Header = () => {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img className='logo-image' src={logo} alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link fw-bold text-black" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold text-black" href="#">About</a>
                            </li>
                            <li class="nav-item sign-in">
                                <a class="nav-link fw-bold text-black" href="#">Sign In</a>
                            </li>
                            <li class="nav-item sign-up">
                                <a class="nav-link fw-bold text-white" href="#">Sign Up</a>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;