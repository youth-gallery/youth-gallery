import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TabMenu from '../components/tab/TabMenu';
import FollowersList from './FollowersList';
import FollowingsList from './FollowingsList';
import Home from './Home';
import Search from './Search';
import PostDetail from './postDetail/PostDetail';

function PageRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<TabMenu img={'newsImg'} />} />
            <Route path="/post">
                <Route path="upload" element={<TabMenu img={'uploadImg'} />} />
            </Route>
            {/* 임시로 게시물 id 지정 
            나중에 /post/:id 로 넣으면됨*/}
            <Route
                path="/post/62d9039917ae66658183d2c8"
                element={<PostDetail />}
            />
            <Route path="/profile" element={<TabMenu img={'profileImg'} />}>
                <Route path="followers" element={<FollowersList />} />
                <Route path="followings" element={<FollowingsList />} />
            </Route>
            <Route path="/search" element={<Search />} />
        </Routes>
    );
}

export default PageRouter;
