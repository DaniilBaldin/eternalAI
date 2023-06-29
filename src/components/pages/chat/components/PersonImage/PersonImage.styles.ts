import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    z-index: -1;
    width: 100%;
    max-height: 100%;
    position: relative;
    /* margin-left: 5vw; */
    user-select: none;
    aspect-ratio: 1/1;
`;
export const InnerWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    max-height: 940px;
    overflow-y: hidden;
    margin: 0;
`;

export const BackgroundImage = styled.img<{
    left: number;
    bottom?: number;
    rotate: number;
    width?: number;
    height?: number;
    blur: number;
}>`
    position: absolute;
    left: ${(props) => `${props.left}%`};
    bottom: ${(props) => `${props.bottom}%`};
    object-fit: contain;
    user-select: none;
    width: 80%;
    height: 80%;
    max-width: 80%;
    max-height: 740px;
    /* width: ${(props) => `rotate(${props.width}px)`};
    height: ${(props) => `rotate(${props.height}px)`}; */
    filter: ${(props) => `blur(${props.blur}px)`};
    -webkit-animation: spin 10s linear infinite;
    -moz-animation: spin 10s linear infinite;
    animation: spin 10s linear infinite;
    /* z-index: -10; */
    overflow: hidden;

    @-moz-keyframes spin {
        0% {
            -moz-transform: ${(props) => `rotate(${props.rotate}deg)`};
        }
        50% {
            -moz-transform: rotate(0deg);
        }
        100% {
            -moz-transform: ${(props) => `rotate(${props.rotate}deg)`};
        }
    }
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: ${(props) => `rotate(${props.rotate}deg)`};
        }
        50% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: ${(props) => `rotate(${props.rotate}deg)`};
        }
    }
    @keyframes spin {
        0% {
            transform: ${(props) => `rotate(${props.rotate}deg)`};
            -webkit-transform: ${(props) => `rotate(${props.rotate}deg)`};
        }
        50% {
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
        }
        100% {
            transform: ${(props) => `rotate(${props.rotate}deg)`};
            -webkit-transform: ${(props) => `rotate(${props.rotate}deg)`};
        }
    }
`;

export const Portrait = styled.img`
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 640px;
    object-fit: contain;
    position: absolute;
    margin: 0;
    bottom: 0;
    left: 0;
    display: block;
`;

export const Gradient = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(180deg, rgba(17, 17, 21, 0) 54.58%, #111115 100%);
    width: 100%;
    height: 150px;
    overflow: hidden;
`;

export const GradientTop = styled.div`
    position: absolute;
    top: -1px;
    left: 0px;
    background: linear-gradient(180deg, rgba(17, 17, 21, 0) 54.58%, #111115 100%);
    width: 100%;
    height: 150px;
    overflow: hidden;
    transform: rotate(180deg);
`;

export const BlurOnTop = styled.img`
    position: absolute;
    left: 15%;
    bottom: 10%;
    object-fit: contain;
    user-select: none;
    width: 80%;
    height: 80%;
    max-width: 80%;
    max-height: 740px;
    overflow: hidden;
`;
