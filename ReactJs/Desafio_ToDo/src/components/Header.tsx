import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/rocket.svg';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt='logoToDo' />
            <h1><span className={styles.to}>to</span><span className={styles.do} >do</span></h1>
        </header>
    );
};

export default Header;