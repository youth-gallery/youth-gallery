import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SplashBase.module.css';

function SplashBase() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/splash');
    }, 1500);

    return (
        <>
            <div className={styles.splashBase_screen}>
                <h1 className={styles.splashBase_logo}></h1>
            </div>
        </>
    );
}

export default SplashBase;
