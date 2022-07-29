import React, { useEffect, useState } from 'react';
// import CommentBox from '../../components/comment/CommentBox';
import Comments from '../../components/comment/Comments';
import axios from 'axios';
import HomePost from '../../components/PostForm/HomePost';
import { useParams } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import TopBasicNav from '../../components/nav/TopBasicNav';
import styled from 'styled-components';

const PageDetailArea = styled.div`
    margin: 70px 0 90px;
`;

const HomePostArea = styled.div`
    border-bottom: 1px solid var(--light-gray);
`;

const PostDetail = () => {
    const url = 'https://mandarin.api.weniv.co.kr';

    const getToken = localStorage.getItem('token');
    let { post_id } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        post_id &&
            axios({
                method: 'GET',
                url: `${url}/post/${post_id}`,
                headers: {
                    'Authorization': `Bearer ${getToken}`,
                    'Content-type': 'application/json',
                },
            })
                .then((response) => setPosts(response))
                .catch((error) => console.log(error.message));
    }, []);
    return (
        <PageDetailArea>
            <Nav>
                <TopBasicNav />
            </Nav>
            {posts.data && (
                <>
                    <HomePostArea>
                        <HomePost datas={posts.data.post} />
                    </HomePostArea>

                    <Comments postUserName={posts.data.post.author.username} />
                </>
            )}
        </PageDetailArea>
    );
};

export default PostDetail;
