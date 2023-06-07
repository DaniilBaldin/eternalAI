import styled from 'styled-components';

export const PaymentForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: top;
    margin: 0;
    gap: 16px;
    /* height: 62px; */
`;

export const PaymentSaveButton = styled.button`
    width: 119px;
    height: 62px;
    border-radius: 120px;
    padding: 16px 24px 16px 24px;
    gap: 16px;
    border: none;
    outline: none;
    background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
    /* box-sizing: border-box; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0; */
    font-family: 'Arquitecta';
    font-size: 13px;
    /* line-height: 14.3px; */
    letter-spacing: 0.3em;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        background: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.8) -2.34%,
            rgba(88, 51, 239, 0.8) 114.41%
        );
    }

    &:focus {
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
