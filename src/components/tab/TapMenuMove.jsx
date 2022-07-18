import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import TabMenu from './TapMenu';
import FollowersList from '../../pages/FollowersList';

function TapMenuMove() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<TabMenu img={'newsImg'} />} />
                <Route
                    path="/post/upload"
                    element={<TabMenu img={'uploadImg'} />}
                />
                <Route path="/profile" element={<TabMenu img={'profileImg'} />}>
                    <Route path="followers" element={<FollowersList />} />
                </Route>
            </Routes>
        </>
    );
}

export default TapMenuMove;
