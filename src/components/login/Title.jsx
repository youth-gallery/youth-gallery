import React from 'react';
import styles from './Title.module.css';

function Title({ title }) {
    return (
        <div className={styles.title_area}>
            <h1>{title}</h1>
        </div>
    );
}

export default Title;
