import React from 'react';

const NavBar = ({ scrollToComponent }) => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={scrollToComponent}>About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#education">Education</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#work-experience">Work Experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#research">Research</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};


export default NavBar;
