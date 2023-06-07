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
    top: 42%;
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

export const SubscribePaymentWindow = styled.div`
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

export const PaymentForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    gap: 24px;
    margin-top: 22px;
    /* height: 62px; */
`;

export const SubmitButton = styled.button`
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

    &:hover :focus {
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
    }
`;
