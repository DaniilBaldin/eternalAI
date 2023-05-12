import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Modal = styled.div<{ $show: boolean }>`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(77px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => (props.$show ? 1 : 0)};
    /* transition: all 0.1s ease-out; */
    pointer-events: ${(props) => (props.$show ? 'all' : 'none')};
    z-index: 100;
`;

export const ModalContent = styled.div<{ $show: boolean }>`
    width: 434px;
    height: 440px;
    visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.$show ? 1 : 0)};
    background-color: transparent;
    display: block;
    position: fixed;
    transition: all 0.1s ease-in-out;
    /* border: 1px solid white; */
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 999;
`;

export const MenuLink = styled(Link)`
    color: #ffffff;
    margin: 0;
    margin-bottom: 32px;
    text-decoration: none;
    font-family: 'Avenir';
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0.01em;
`;

export const BreakLine = styled.div`
    width: 279px;
    height: 0px;
    border: 1px solid #2f2525;
    margin: 0;
    /* align-self: center; */
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding-top: 10px; */
    margin-top: 32px;
`;

export const Img = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-left: 22px;

    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
    }
`;
