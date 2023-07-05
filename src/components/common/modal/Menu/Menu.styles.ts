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
    height: 100%;
    /* height: 540px; */
    visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.$show ? 1 : 0)};
    background-color: transparent;
    display: block;
    position: fixed;
    /* border: 1px solid white; */
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;

    @media (max-width: 1000px) {
    }
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

export const MenuText = styled.p`
    color: #ffffff;
    margin: 0;
    margin-bottom: 32px;
    text-decoration: none;
    font-family: 'Avenir';
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0.01em;
    cursor: pointer;
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
    gap: 22px;
`;

export const Img = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    /* margin-left: 22px; */

    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -ms-transform: scale(1.1);
        -o-transform: scale(1.1);
        transform: scale(1.1);
    }
`;

export const LogoutButton = styled.button`
    width: 200px;
    height: 142px;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    /* margin-top: 100px; */
    font-family: 'Arquitecta';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    /* border: 1px solid white; */
`;

export const AuthButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    position: absolute;
    bottom: 2%;
`;

export const GetStartedButton = styled.button`
    height: 48px;
    width: 343px;
    /* padding: 16px 24px 16px 24px; */
    background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
    border: none;
    border-radius: 120px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    cursor: pointer;
    font-family: Arquitecta;
    font-size: 13px;
    font-weight: 700;
    line-height: 14.3px;
    letter-spacing: 0.3em;
    color: #ffffff;
    /* text-align: center; */
    /* vertical-align: center; */
    margin: 0;

    @media (min-width: 1001px) {
        display: none;
    }
`;

export const LoginButton = styled.button`
    height: 58px;
    width: 80px;
    background-color: transparent;
    border: none;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    font-family: 'Arquitecta';
    font-size: 13px;
    font-weight: 700;
    line-height: 14.3px;
    letter-spacing: 0.3em;
    color: #ffffff;
    margin: 0;
    /* margin-right: 32px; */
    cursor: pointer;

    &:hover {
        color: #f82d98;
    }
    &:hidden {
        display: none;
    }

    @media (min-width: 1001px) {
        display: none;
    }
`;
