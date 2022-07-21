import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from '../components/Search';
import TabMenu from '../components/tab/TabMenu';
import FollowersList from './FollowersList';
import FollowingsList from './FollowingsList';
import Home from './Home';

function PageRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<TabMenu img={'newsImg'} />} />
            <Route path="/post">
                <Route path="upload" element={<TabMenu img={'uploadImg'} />} />
            </Route>
            <Route path="/profile" element={<TabMenu img={'profileImg'} />}>
                <Route path="followers" element={<FollowersList />} />
                <Route path="followings" element={<FollowingsList />} />
            </Route>
            <Route path="/search" element={<Search />} />
        </Routes>
    );
}

export default PageRouter;
