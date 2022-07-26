import React from 'react';
import Nav from '../../components/nav/Nav';
import TopBasicNav from '../../components/nav/TopBasicNav';
import NewsList from './NewsList';

const News = () => {
    return (
        <>
            <Nav>
                <TopBasicNav navTitle="새로운 소식" />
            </Nav>
            <NewsList />
        </>
    );
};

export default News;
