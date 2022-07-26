import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmailJoin from '../components/join/EmailJoin';
import Login from '../components/login/Login';
import TabMenu from '../components/tab/TabMenu';
import FollowersList from './FollowersList';
import FollowingsList from './FollowingsList';
import Home from './Home';
import NonFollowing from './NonFollowing';
import NotFound from './NotFound';
import Search from './Search';
import PostDetail from './postDetail/PostDetail';
import UserProfile from './userprofile/UserProfile';
import PostUpload from './postUpload/PostUpload';
import News from './news/News';
import Splash from '../components/login/Splash';

function PageRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/post">
                <Route path="upload" element={<PostUpload />} />
                <Route path="edit" element={<TabMenu img={'uploadImg'} />} />
            </Route>
            {/* 임시로 게시물 id 지정 
            나중에 /post/:id 로 넣으면됨*/}
            <Route
                path="/post/62d9039917ae66658183d2c8"
                element={<PostDetail />}
            />
            <Route path="/profile" element={<UserProfile />}>
                <Route path="followers" element={<FollowersList />} />
                <Route path="followings" element={<FollowingsList />} />
            </Route>
            <Route path="/search" element={<Search />} />
            {/* 나중에 페이지 만들면 수정해야함 */}
            <Route path="/splash" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<EmailJoin />} />
            <Route path="/notFound" element={<NotFound />} />
            <Route path="/nonFollowing" element={<NonFollowing />} />
        </Routes>
    );
}

export default PageRouter;
