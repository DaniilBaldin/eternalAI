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
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: end; */
    width: 100%;
    max-height: 64vh;
    gap: 20px;
`;

export const Question = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
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

export const LoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    width: 70px;
    height: 50px;
    margin-left: 60px;
`;

export const LoaderAnimation = styled.div`
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: white;
    color: white;
    animation: dot-flashing 1s infinite linear alternate;
    animation-delay: 0.5s;

    ::before,
    ::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
    }
    ::before {
        left: -15px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: white;
        color: white;
        animation: dot-flashing 1s infinite alternate;
        animation-delay: 0s;
    }
    ::after {
        left: 15px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: white;
        color: white;
        animation: dot-flashing 1s infinite alternate;
        animation-delay: 1s;
    }

    @keyframes dot-flashing {
        0% {
            background-color: white;
        }
        50%,
        100% {
            background-color: rgba(152, 128, 255, 0.2);
        }
    }
`;
