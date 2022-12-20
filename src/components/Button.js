import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

const ID = ['contact-btns']

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonID }) => {
    const checkbButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkID = ID.includes(buttonID) ? buttonID : ID[0];

    return (
        <button
            className={`btn ${checkbButtonStyle} ${checkButtonSize}`}
            id={`${checkID}`}
            // onClick={onClick}
            type={type}>
            {children}
        </button>
    );
};
