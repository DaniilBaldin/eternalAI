import styled from 'styled-components';

export const LoaderMain = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    background-color: rgb(17, 17, 21, 1);
    z-index: 1000;
    /* transition: all 2s; */
`;

export const Wrapper = styled.div`
    position: fixed;
    /* border: 1px solid white; */
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    animation: bounce-out 7s ease-in;

    @keyframes bounce-out {
        0% {
            opacity: 1;
            /* transform: scale(1); */
        }
        100% {
            opacity: 0.4;
            /* transform: scale(0.9); */
        }
    }
`;

export const TextImage = styled.img`
    width: 497px;
    height: 28px;

    @media (max-width: 1000px) {
        width: 397px;
        height: 20px;
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 400px;
    /* overflow: hidden; */
    position: relative;
    /* border: 1px solid white; */
    margin-top: 50px;
`;

export const BackgroundImage = styled.img<{
    left?: number;
    rotate?: number;
    width?: number;
    height?: number;
    blur: number;
}>`
    position: absolute;
    object-fit: contain;
    user-select: none;
    width: ${(props) => `rotate(${props.width}px)`};
    height: ${(props) => `rotate(${props.height}px)`};
    filter: ${(props) => `blur(${props.blur}px)`};
    -webkit-animation: spin 8s linear infinite;
    -moz-animation: spin 8s linear infinite;
    animation: spin 8s linear infinite;
    /* z-index: -10; */
    /* overflow: hidden; */

    /* @-moz-keyframes spin {
        0% {
            -moz-transform: ${(props) => `rotate(${props.rotate}deg)`};
        }
        50% {
            -moz-transform: rotate(0deg);
        }
        100% {
            -moz-transform: ${(props) => `rotate(${props.rotate}deg)`};
        }
    } */
    /* @-webkit-keyframes spin {
        0% {
            -webkit-transform: ${(props) => `rotate(${props.rotate}deg)`};
        }
        50% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: ${(props) => `rotate(${props.rotate}deg)`};
        }
    } */
    @keyframes spin {
        0% {
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
        }
        100% {
            transform: ${(props) => `rotate(${(props.rotate as number) * 3}deg)`};
            -webkit-transform: ${(props) => `rotate(${(props.rotate as number) * 3}deg)`};
        }
    }
`;
