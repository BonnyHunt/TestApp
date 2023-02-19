import React from "react";
import '../styles/Header.scss';

const Header = () => {
    return (
        <section className="header-container"> 
        <div className="header--title-container">
            <h1>Test App</h1>
            <p>Person List</p>
        </div>
        </section>
    )
};

export { Header };