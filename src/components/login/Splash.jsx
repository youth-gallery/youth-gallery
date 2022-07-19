import React from 'react';
import styles from './Splash.module.css';
import Modal from '../modal/Modal';

function Splash() {
    return (
        <>
            <div className={styles.splash_screen}>
                <h1 className={styles.splash_logo}></h1>
                <section>
                    <Modal values={['login']}></Modal>
                </section>
            </div>
        </>
    );
}

export default Splash;
