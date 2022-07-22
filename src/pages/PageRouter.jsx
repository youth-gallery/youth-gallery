import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmailJoin from '../components/join/EmailJoin';
import Login from '../components/login/Login';
import TabMenu from '../components/tab/TabMenu';
import FollowersList from './FollowersList';
import FollowingsList from './FollowingsList';
import Home from './Home';
import Search from './Search';
import UserProfile from './userprofile/UserProfile';

function PageRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<TabMenu img={'newsImg'} />} />
            <Route path="/post">
                <Route path="upload" element={<TabMenu img={'uploadImg'} />} />
            </Route>
            <Route path="/profile" element={<UserProfile />}>
                <Route path="followers" element={<FollowersList />} />
                <Route path="followings" element={<FollowingsList />} />
            </Route>
            <Route path="/search" element={<Search />} />
            {/* 나중에 페이지 만들면 수정해야함 */}
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<EmailJoin />} />
        </Routes>
    );
}

export default PageRouter;
