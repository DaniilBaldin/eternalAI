import styled from 'styled-components';

export const ModalContent = styled.div<{ $show: boolean }>`
    width: 870px;
    height: 480px;
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
    justify-content: flex-start;
    z-index: 999;
`;

export const SuccessPaymentWindow = styled.div`
    width: 625px;
    height: 364px;
    background: linear-gradient(90.83deg, rgba(4, 4, 16, 0.6) 11.84%, rgba(15, 3, 6, 0.6) 111.32%);
    backdrop-filter: blur(12px);
    /* padding: 10px; */
    display: inline-block;
    margin: 0;
    padding: 0;
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

export const SuccessBadge = styled.div`
    width: 78px;
    height: 78px;
    border-radius: 50%;
    background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: 48px;
    margin-bottom: 24px;
`;

export const Title = styled.p`
    font-family: 'Avenir/Medium';
    font-size: 24px;
    font-weight: 800;
    line-height: 36px;
    font-style: normal;
    letter-spacing: -0.01em;
    margin: 0;
    color: #ffffff;
    text-align: center;
    margin-bottom: 8px;
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
    margin-bottom: 24px;
`;

export const SuccessButton = styled.button`
    height: 62px;
    width: 529px;
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
`;
