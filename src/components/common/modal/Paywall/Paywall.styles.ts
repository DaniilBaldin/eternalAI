import styled from 'styled-components';

export const Modal = styled.div<{ $show: boolean }>`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1);
    /* backdrop-filter: blur(77px); */
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    /* opacity: ${(props) => (props.$show ? 1 : 0)}; */
    /* transition: all 0.1s ease-out; */
    pointer-events: ${(props) => (props.$show ? 'all' : 'none')};
    z-index: 100;
    overflow: auto;
`;

export const ModalContent = styled.div<{ $show: boolean }>`
    width: 870px;
    height: 440px;
    visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.$show ? 1 : 0)};
    background-color: transparent;
    display: block;
    position: fixed;
    /* border: 1px solid white; */
    top: 40%;
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

export const Title = styled.p`
    font-family: 'Avenir/Medium';
    font-size: 40px;
    font-weight: 800;
    line-height: 60px;
    font-style: normal;
    letter-spacing: -0.01em;
    margin: 0;
    color: #ffffff;
    text-align: center;
    margin-bottom: 4px;
`;

export const Subtitle = styled.p`
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #ffffff;
    opacity: 0.7;
    margin: 0;
    margin-bottom: 32px;
`;

export const WindowsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 32px;
    margin: 0;
    padding: 0;
`;

export const ShareWindow = styled.div`
    width: 514px;
    height: 421px;
    border-radius: 32px;
    /* padding: 48px; */
    border: none;
    outline: none;
    /* background: transparent; */
    background: linear-gradient(90.83deg, rgba(4, 4, 16, 0.6) 11.84%, rgba(15, 3, 6, 0.6) 111.32%);
    backdrop-filter: blur(12px);
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const SubscribeWindow = styled.div`
    width: 320px;
    height: 421px;

    background: linear-gradient(90.83deg, rgba(4, 4, 16, 0.6) 11.84%, rgba(15, 3, 6, 0.6) 111.32%);
    backdrop-filter: blur(12px);
    padding: 0px;
    display: inline-block;
    margin: 0;
    position: relative;
    border-radius: 32px;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        inset: 0;
        padding: 1px;
        border-radius: 32px;
        background: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.8) -2.34%,
            rgba(88, 51, 239, 0.8) 114.41%
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
    }
`;

export const Wrapper = styled.div`
    width: 320px;
    height: 421px;
    padding: 1px;
    margin: 0;
    border-radius: 32px;
    background: linear-gradient(
        281.4deg,
        rgba(248, 45, 152, 0.2) -2.34%,
        rgba(88, 51, 239, 0.2) 114.41%
    );
    position: relative;
`;

export const FreeBadge = styled.div`
    width: 68px;
    height: 43px;
    border-radius: 16px;
    padding: 8px 16px 8px 16px;
    gap: 8px;
    background-color: #ffffff;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Avenir/Medium';
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.01em;
    text-align: center;
    color: #0e0e10;
    margin: 0;
    margin-top: 100px;
    margin-bottom: 24px;
`;

export const WindowTitle = styled.p`
    font-family: 'Avenir/Medium';
    font-size: 24px;
    line-height: 36px;
    font-weight: 800;
    font-style: normal;
    letter-spacing: -0.01em;
    color: #ffffff;
    text-align: center;
    margin: 0;
    margin-bottom: 4px;
`;

export const WindowSubtitle = styled.p`
    font-family: 'Avenir/Medium';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #ffffff;
    opacity: 0.7;
    margin: 0;
`;

export const WindowSubtitlePink = styled.span`
    font-family: 'Avenir/Medium';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #f82d98;
    opacity: 0.7;
    margin: 0;
    /* margin-left: px; */
`;

export const ShareButton = styled.button`
    width: 220px;
    height: 62px;
    background: transparent;
    border: 1px solid white;
    padding: 5px;
    border-radius: 120px;
    display: inline-block;
    margin: 0;
    font-family: 'Arquitecta';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.3em;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
        background: url('data:image/svg+xml;utf8,<svg   xmlns="http://www.w3.org/2000/svg" ><defs><linearGradient id="Gradient" x1="0" x2="100" y1="0" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(28.1)"><stop offset="-2.34%" stop-color="rgb(89, 52, 239)" stop-opacity="0.8" /><stop offset="114.41%" stop-color="rgb(248, 42, 152)" stop-opacity="0.8"/></linearGradient></defs><rect x="0" y="0" width="100%" height="100%" style="height:calc(100%);width:calc(100% )" rx="31" ry="31" stroke-width="1" fill="transparent" stroke="url(%23Gradient)"/></svg>');
        outline: none;
        border: none;
    }

    &:focus {
        background: url('data:image/svg+xml;utf8,<svg   xmlns="http://www.w3.org/2000/svg" ><defs><linearGradient id="Gradient" x1="0" x2="100" y1="0" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(28.1)"><stop offset="-2.34%" stop-color="rgb(89, 52, 239)" stop-opacity="0.8" /><stop offset="114.41%" stop-color="rgb(248, 42, 152)" stop-opacity="0.8"/></linearGradient></defs><rect x="0" y="0" width="100%" height="100%" style="height:calc(100%);width:calc(100% )" rx="31" ry="31" stroke-width="1" fill="transparent" stroke="url(%23Gradient)"/></svg>');
        outline: none;
        border: none;
    }
`;

export const ProBadge = styled.div`
    width: 66px;
    height: 42px;
    background: transparent;
    padding: 10px;
    display: inline-block;
    margin: 0;
    position: relative;
    border-radius: 16px;
    z-index: 0;
    margin-top: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Arquitecta';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 14px;
    color: #ffffff;
    letter-spacing: 0.3em;
    margin-bottom: 24px;

    &:after {
        content: ' ';
        margin-left: -0.3em;
    }

    &:before {
        content: '';
        position: absolute;
        z-index: -1;
        inset: 0;
        padding: 1px;
        border-radius: 15px;
        background: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.8) -2.34%,
            rgba(88, 51, 239, 0.8) 114.41%
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
    }
`;

export const TextWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    gap: 16px;
    margin-bottom: 16px;
    /* margin-top: 20px; */
`;

export const Text = styled.p`
    font-family: 'Avenir/Medium';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    /* text-align: left; */
    letter-spacing: -0.01em;
    color: #ffffff;
    opacity: 1;
    margin: 0;
`;

export const SubscribeButton = styled.button`
    height: 62px;
    width: 220px;
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
    margin: 0;

    &:hover {
        background: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.8) -2.34%,
            rgba(88, 51, 239, 0.8) 114.41%
        );
    }

    &:disabled {
        background: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.4) -2.34%,
            rgba(88, 51, 239, 0.4) 114.41%
        );
        cursor: auto;
    }
`;
