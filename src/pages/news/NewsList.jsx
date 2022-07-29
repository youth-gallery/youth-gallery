import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './NewsList.module.css';
import NewsCard from './NewsCard';

const NewsList = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        async function getNews() {
            const url = 'https://mandarin.api.weniv.co.kr';
            const accountName = localStorage.get('accountname');
            const getToken = localStorage.get('token');

            try {
                const res = await axios.get(
                    `${url}/post/${accountName}/userpost`,
                    {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${getToken}`,
                            'Content-type': 'application/json',
                        },
                    }
                );
                setNewsList(res.data.post);
            } catch (error) {
                console.log(error);
            }
        }
        getNews();
    }, []);

    return (
        <section className={styles.news_section}>
            <h1 className={styles.news_title}>
                매주 <span className={styles.title_span}>업데이트</span> 되는
                <span className={styles.title_span}>미술계 소식</span>을
                만나보세요!
            </h1>
            <ul className={styles.news_box}>
                {newsList &&
                    newsList.map((news) => {
                        return (
                            <NewsCard
                                newsImg={news?.image}
                                newsContent={news?.content}
                                key={news?.id}
                            />
                        );
                    })}
            </ul>
        </section>
    );
};

export default NewsList;
