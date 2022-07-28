import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmailJoin from '../components/join/EmailJoin';
import Login from '../components/login/Login';
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
import PostEdit from './postEdit/PostEdit';

function PageRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/post">
                <Route path="upload" element={<PostUpload />} />
                <Route path="edit/:postId" element={<PostEdit />} />
            </Route>
            {/* 임시로 게시물 id 지정 
            나중에 /post/:id 로 넣으면됨*/}
            <Route path="/post/:username/:post_id" element={<PostDetail />} />
            <Route path="/profile/:accountname" element={<UserProfile />}>
                <Route path="followers" element={<FollowersList />} />
                <Route path="followings" element={<FollowingsList />} />
            </Route>
            <Route path="/search" element={<Search />} />
            {/* 나중에 페이지 만들면 수정해야함 */}
            <Route path="/splash" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<EmailJoin />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/nonFollowing" element={<NonFollowing />} />
        </Routes>
    );
}

export default PageRouter;
