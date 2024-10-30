import React from "react";
import { Link } from 'react-router-dom';

import styles from "../styles/Main.module.css";

const Main = () => {
    return (
    <div className={styles.wrap}>
        <div className={styles.container}>
            <h1 className={styles.heading}>Join</h1>

            <form className={styles.form}>
            <div className={styles.group}>
                <input 
                type="text" 
                name="username" 
                value=""
                placeholder="Username"
                className={styles.input}
                onChange={() => {}}
                autoComplete="off"
                />
            </div>
            <div className={styles.group}>
                <input 
                type="text" 
                name="room" 
                value=""
                placeholder="Room"
                className={styles.input}
                onChange={() => {}}
                autoComplete="off"
                />
            </div>

            <Link> to=
            
            </Link>
            </form>
        </div>
    </div>);
};

export default Main;