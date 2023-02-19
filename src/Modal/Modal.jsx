import React from "react";
import '../styles/Modal.scss'

const Modal = ({ children, open }) => {
    const isOpen = open ? 'flex' : 'none'
    return (
        <div style={{
            display: isOpen
        }}>
            {children}
        </div>
    );
};

export { Modal };