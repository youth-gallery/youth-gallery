import React from 'react';
import styled from 'styled-components';
import UserSearch from './UserSearch';

const Li = styled.li`
    padding-top: 16px;
`;

function ShowSearch({ users, keyword }) {
    return users.data.map((user) => (
        <Li key={user._id}>
            <UserSearch
                userImg={user.image}
                username={user.username}
                accountname={user.accountname}
                keyword={keyword}
            />
        </Li>
    ));
}

export default ShowSearch;
