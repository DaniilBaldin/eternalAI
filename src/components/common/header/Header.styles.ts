import { styled } from 'styled-components';

import { Link } from 'react-router-dom';

export const Header = styled.header<{ $fixed: boolean }>`
    width: 80vw;
    /* max-width: 1600px; */
    max-width: 80vw;
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 0px 0 18px 0;
    min-height: 80px;
    z-index: 999;
    position: ${(props) => (props.$fixed ? 'fixed' : 'relative')};
`;

export const HeaderWrapper = styled.div`
    position: relative;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MenuButton = styled.button`
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 32px;
    width: 56px;
    height: 56px;
    display: flex;
    display: -webkit-frex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
        -webkit-transform: scale(0.9);
        -moz-transform: scale(0.9);
        -ms-transform: scale(0.9);
        -o-transform: scale(0.9);
        transform: scale(0.9);
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 32px;
    width: 56px;
    height: 56px;
    display: flex;
    display: -webkit-frex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    background-color: transparent;
    border: 1px solid #2f2535;
    border-radius: 8px;
    cursor: pointer;
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
    margin-top: 32px;
`;

export const ButtonsContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    padding: 0;
    margin: 0;
    margin-top: 32px;
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
    margin-right: 32px;
    cursor: pointer;

    &:hover {
        color: #f82d98;
    }
`;

export const GetStartedButton = styled.button`
    height: 48px;
    width: 185px;
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

    &:hover {
        background: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.8) -2.34%,
            rgba(88, 51, 239, 0.8) 114.41%
        );
    }
`;

export const HeaderAlternative = styled.div`
    position: relative;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CloseButtonAlterntive = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 32px;
    width: 56px;
    height: 56px;
    display: flex;
    display: -webkit-frex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    background-color: transparent;
    border: 1px solid #2f2535;
    border-radius: 8px;
    cursor: pointer;
`;

export const LogoContainerAlternative = styled(Link)`
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    padding: 0;
    margin: 0;
    margin-top: 32px;
`;
