import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TabMenu from './TapMenu';

function TabMenuMove() {
    return (
        <>
            <Routes>
                <Route path="/" element={<TabMenu img={'homeImg'} />} />
                <Route path="/news" element={<TabMenu img={'newsImg'} />} />
                <Route
                    path="/post/update"
                    element={<TabMenu img={'uploadImg'} />}
                />
                <Route
                    path="/profile"
                    element={<TabMenu img={'profileImg'} />}
                />
            </Routes>
        </>
    );
}

export default TabMenuMove;
