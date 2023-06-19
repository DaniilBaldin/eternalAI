import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    aspect-ratio: 1600/900;
    max-width: 1600px;
    min-width: 600px;
    margin: -280px 30px 0;
    transform: none;
    z-index: -10;
    user-select: none;

    /* display: inline; */

    @media (max-width: 1350px) {
        margin: -220px 30px 0;
    }
    @media (max-width: 1000px) {
        margin: -130px 30px 0;
        /* overflow: hidden; */
        zoom: 120%;
    }
`;

export const ConversationWrapper = styled.div`
    position: absolute;
    bottom: 22%;
    left: 5%;
    width: 90%;
    height: auto;
    padding: 0 0 33.1%;
    object-fit: contain;
    max-width: 90%;
    margin-right: -2.8%;
`;

export const Conversation = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 100%;
`;

export const BackgroundGroup = styled.img`
    position: absolute;
    bottom: 1px;
    left: 0px;
    width: 100%;
    height: 116%;
    object-fit: contain;
    max-width: 100%;
`;

export const Musk = styled.img`
    position: absolute;
    bottom: 1px;
    left: 0px;
    width: 25%;
    height: auto;
    object-fit: contain;
    max-width: 25%;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const Teresa = styled.img`
    position: absolute;
    bottom: 1px;
    right: 0px;
    width: 21%;
    height: auto;
    object-fit: contain;
    max-width: 21%;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const Jobs = styled.img`
    position: absolute;
    bottom: 1px;
    left: 15.8%;
    width: 27.3%;
    height: auto;
    object-fit: contain;
    max-width: 27.3%;
`;

export const Einstein = styled.img`
    position: absolute;
    bottom: 1px;
    right: 17.7%;
    width: 24%;
    height: auto;
    object-fit: contain;
    max-width: 24%;
`;

export const Blur = styled.img`
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 58%;
    height: auto;
    object-fit: contain;
    max-width: 58%;
    transform: translateX(-50%);
`;

export const King = styled.img`
    position: absolute;
    bottom: 1px;
    left: 50%;
    width: 35.9%;
    height: auto;
    object-fit: contain;
    max-width: 35.9%;
    transform: translateX(-50%);
`;

export const BlurTwo = styled.img`
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 58%;
    height: auto;
    object-fit: contain;
    max-width: 58%;
    transform: translateX(-50%);
`;

export const Gradient = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(180deg, rgba(17, 17, 21, 0) 54.58%, #111115 100%);
    width: 100%;
    height: 50%;
    overflow: hidden;
`;
