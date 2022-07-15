import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TabMenu from './TabMenu';
import FollowersList from '../FollowersList';

function TabMenuMove() {
    return (
        <>
            <Routes>
                <Route path="/" element={<TabMenu img={'homeImg'} />} />
                <Route path="/news" element={<TabMenu img={'newsImg'} />} />
                <Route
                    path="/post/upload"
                    element={<TabMenu img={'uploadImg'} />}
                />
                <Route
                    path="/profile"
                    element={<TabMenu img={'profileImg'} />}
                >
                    <Route path="followers" element={<FollowersList />} />
                    </Route>
            </Routes>
        </>
    );
}

export default TabMenuMove;
