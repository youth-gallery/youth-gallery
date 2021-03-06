import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonModal from '../modal/ButtonModal';
const FlexDiv = styled.div`
    display: flex;
    height: 40px;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const FlexDivInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HomePostName = styled.span`
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
    padding: 4px 80px 0 0;
`;

const HomePostId = styled.span`
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.2;
    color: #767676;
`;

function PostAuthorInfo({ username, accountname, intro, openModalProp }) {
    return (
        <FlexDiv>
            <Link to={`/profile/${accountname}`}>
                <FlexDivInner>
                    <HomePostName>{username}</HomePostName>
                    <HomePostId>{intro}</HomePostId>
                </FlexDivInner>
            </Link>
            <ButtonModal openModalProp={openModalProp} />
        </FlexDiv>
    );
}
export default PostAuthorInfo;
