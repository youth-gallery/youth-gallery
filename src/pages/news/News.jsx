import React from 'react';
import TopBasicNav from '../../components/nav/TopBasicNav';
import NewsList from './NewsList';

const News = () => {
    return (
        <>
            <TopBasicNav navTitle="새로운 소식" />
            <NewsList />
        </>
    );
};

export default News;
