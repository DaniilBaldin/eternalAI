import styled from 'styled-components';

export const ButtonLoaderAnimation = styled.div`
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
