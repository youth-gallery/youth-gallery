import React from 'react';
import styles from './Modal.module.css';

function Modal({ children }) {
    return (
        <section>
            <h2 className="ir">모달창</h2>
            <ul className={styles.modal_lists}>{children}</ul>
        </section>
    );
}

export default Modal;
