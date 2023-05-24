import styled from 'styled-components';

export const InputForm = styled.form`
    width: 727px;
    height: 78px;
    border-radius: 120px;
    padding: 8px 8px 8px 48px;
    background: linear-gradient(90.83deg, #08081e 11.84%, #21050c 111.32%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid white;
    border: none;
    outline: none;
    position: relative;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    margin-bottom: 20px;

    &::before {
        border-radius: 120px;
        content: '';
        background-image: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.8) -2.34%,
            rgba(88, 51, 239, 0.8) 114.41%
        );
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        position: absolute;
        z-index: -1;
    }
`;

export const Input = styled.input`
    width: 527px;
    height: 58px;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;

    &::placeholder {
        color: white;
    }
`;

export const SubmitButton = styled.button`
    margin: 0;
    width: 157px;
    height: 62px;
    border-radius: 120px;
    padding: 16px 24px 16px 24px;
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
    text-transform: uppercase;
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
