// 원래 TapMenu 중 '게시물 작성' 아이콘을 누르면 게시물 작성 컴포넌트(PostUpload.jsx)가 뜨는 방식입니다
// TapMenu 파일이 두개인데, 어디에 연결을 해야할지 잘 모르겠어서 우선 이렇게 임시 페이지를 만들어서 클릭시 연결되도록 했습니다

import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import PostUpload from './PostUpload';

const PostUploadTest = () => {
    return (
        <BrowserRouter>
            <NavLink
                to="/post/upload"
                style={({ isActive }) => ({
                    display: isActive ? 'none' : '',
                })}
            >
                게시물 작성
            </NavLink>
            <Routes>
                <Route path="post/upload" element={<PostUpload />} />
            </Routes>
        </BrowserRouter>
    );
};

export default PostUploadTest;
