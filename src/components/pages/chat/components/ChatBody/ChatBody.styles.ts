import styled from 'styled-components';

export const Container = styled.section`
    margin: 0;
    flex: 1 1 auto;
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    justify-content: flex-end;
    /* padding: 20px; */
    z-index: 1;
`;

export const Wrapper = styled.div`
    height: auto;
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
    align-items: end;
    width: 100%;
    max-height: 63vh;
    gap: 20px;
`;

export const Question = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
    gap: 8px;
    /* width: 362px; */
    /* height: 100px; */
    background-color: #ffffff;
    backdrop-filter: blur(8px);
    border-radius: 16px;
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #0a0806;
    letter-spacing: -0.01em;
`;

export const AnswerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`;

export const Avatar = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    outline: none;
    object-fit: cover;
`;

export const Answer = styled.div`
    /* width: 643px;
    height: 192px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 42px 48px;
    gap: 8px;
    isolation: isolate;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.01em;
    color: #e4e4e4;
    margin: 0;
    margin-left: 60px;
`;

export const NewAnswer = styled.div`
    position: absolute;
    width: 720px;
    height: 260px;
    left: 0%;
    bottom: 0%;
    padding: 5px;
    margin: 0;

    background-image: url('/RectangleChat.svg');
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InnerMessage = styled.div`
    display: flex;
    /* flex: 1; */
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
    width: 92%;
    height: 92%;
    margin: 0;
    margin-left: 30px;
    padding: 10px;
    text-align: start;
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    border-radius: 28px;
    letter-spacing: -0.01em;
`;
