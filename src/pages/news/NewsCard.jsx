import React from 'react';
import styles from './NewsCard.module.css';

const NewsCard = ({ newsImg, newsContent }) => {
    return (
        <li className={styles.newscard_box}>
            <img
                src={newsImg}
                alt={`${newsContent}`}
                className={styles.newscard_img}
            />
            <strong className={styles.newscard_content}>{newsContent}</strong>
        </li>
    );
};

export default NewsCard;
