import  styled  from 'styled-components';

export const Main = styled.div`
    /* max-width: 1600px; */
    max-width: 90vw;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Gradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 20vw;
    height: 700px;
    background: linear-gradient(110deg, rgba(80, 50, 230, 0.15) 0.5%, rgba(20, 20, 30, 0) 35%);
    z-index: -10;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const MainQuestions = styled.div`
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: start;
    -webkit-justify-content: start;
`;

export const Title = styled.p`
    font-family: 'Arquitecta';
    font-size: 36px;
    font-weight: 700;
    line-height: 46.8px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    text-align: center;
    color: #ffffff;
    margin: 0;
    margin-bottom: 8px;

    &:nth-child(odd) {
        margin-top: 120px;
    }
`;

export const Text = styled.p`
    font-family: 'Avenir';
    font-style: normal;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #ffffff;
    margin: 0;
    margin-bottom: 16px;
`;

export const QuestionButton = styled.button`
    width: 534px;
    height: 78px;
    border-radius: 120px;
    padding: 8px 8px 8px 48px;
    margin-top: 16px;
    margin-bottom: 16px;
    cursor: pointer;
    background: linear-gradient(90.83deg, #08081e 11.84%, #21050c 111.32%);
    border: none;
    outline: none;
    position: relative;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;

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

    &:hover::before {
        background: linear-gradient(
            281.4deg,
            rgba(249, 108, 183, 1) -2.34%,
            rgba(129, 98, 252, 1) 114.41%
        );
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
    }

    &:focus-visible {
        background: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.8) -2.34%,
            rgba(88, 51, 239, 0.8) 114.41%
        );
    }

    @media (max-width: 1000px) {
        width: 343px;
        height: 64px;
    }
`;

export const ButtonText = styled.p`
    font-family: 'Avenir';
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin: 0;
    text-align: left;
    margin-left: 20px;
`;
