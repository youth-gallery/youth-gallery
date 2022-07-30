import React from 'react';
import styled from 'styled-components';
import RecommendSearch from './RecomendSearch';
import UserSearch from './UserSearch';

const Li = styled.li`
    padding-top: 16px;
`;

function ShowSearch({ users, keyword }) {
    return keyword ? (
        users.data.map((user) => (
            <Li key={user._id}>
                <UserSearch
                    userImg={user.image}
                    username={user.username}
                    accountname={user.accountname}
                    keyword={keyword}
                />
            </Li>
        ))
    ) : (
        <RecommendSearch />
    );
}

export default ShowSearch;
