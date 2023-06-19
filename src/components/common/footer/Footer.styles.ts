import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
    width: 90vw;
    /* max-width: 1600px; */
    max-width: 90vw;
    height: 140px;
    border-radius: 32px;
    background: #1d1d24;
    margin: 32px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    padding: 48px;
    margin-bottom: 32px;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 14px;
        height: 180px;
        position: relative;
        margin: 24px 0px 24px 0px;
    }
`;

export const LogoContainer = styled(Link)`
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    padding: 0;
    margin: 0;
`;

export const CentralText = styled.p`
    font-family: 'Avenir';
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #ffffff;
    text-align: center;
    margin: 0;
    /* margin-right: 4%; */

    @media (max-width: 1000px) {
        position: absolute;
        bottom: 10%;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    padding: 0;
    margin: 0;

    @media (max-width: 1000px) {
        position: absolute;
        top: 45%;
    }
`;

export const FollowUsText = styled.p`
    font-family: 'Arquitecta';
    font-size: 11px;
    font-weight: 700;
    line-height: 12.1px;
    letter-spacing: 0.2em;
    color: #ffffff;
    margin: 0;
    margin-top: 5px;
    margin-right: 16px;
`;

export const SocialButton = styled.a`
    height: 32px;
    width: 32px;
    background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
    border: none;
    border-radius: 50%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    cursor: pointer;

    &:hover {
        background: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.8) -2.34%,
            rgba(88, 51, 239, 0.8) 114.41%
        );
    }
`;
