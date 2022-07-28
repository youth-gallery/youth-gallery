import React from 'react';
import Nav from '../../components/nav/Nav';
import TopBasicNav from '../../components/nav/TopBasicNav';
import TabMenu from '../../components/tab/TabMenu';
import NewsList from './NewsList';

const News = () => {
    return (
        <>
            <Nav>
                <TopBasicNav navTitle="새로운 소식" />
            </Nav>
            <NewsList />
            <TabMenu img={'newsImg'} />
        </>
    );
};

export default News;
