import React from 'react';
import styles from './Splash.module.css';
import Modal from '../modal/Modal';
import LoginModal from '../modal/LoginModal';

function Splash() {
    return (
        <>
            <div className={styles.splash_screen}>
                <h1 className={styles.splash_logo}></h1>
                <section>
                    <Modal>
                        <LoginModal />
                    </Modal>
                </section>
            </div>
        </>
    );
}

export default Splash;
