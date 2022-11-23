import React from 'react';
import styled, {keyframes} from 'styled-components';

function Modal({ children }) {
    return (
        <section>
            <h2 className="ir">모달창</h2>
            <ModalLists>{children}</ModalLists>
        </section>
    );
}

const fadeInUp = keyframes`
  0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
`;

const ModalLists = styled.ul`
    background-color: white;
    border-radius: 10px 10px 0 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 36px 0 10px;
    z-index: 40;
    margin: 0 auto;
    width: 450px;
    animation: ${fadeInUp} 0.5s;
    &::before {
        position: absolute;
        content: '';
        top: 16px;
        left: 50%;
        width: 50px;
        height: 4px;
        background-color: #dbdbdb;
        border-radius: 5px;
        transform: translateX(-50%);
    }
`;

export default Modal;
