import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    flex-basis: 18%;
    flex-grow: 2%;
    margin: 0;
    max-width: 257px;
    min-width: 180px;
    padding: 10px;

    @media (max-width: 1441px) {
        max-width: 240px;
    }
    @media (max-width: 1375px) {
        flex-basis: 23%;
        flex-grow: 2%;
    }
    @media (max-width: 1180px) {
        flex-basis: 31.3%;
        flex-grow: 2%;
    }
    @media (max-width: 920px) {
        flex-basis: 48%;
        flex-grow: 2%;
        max-width: 220px;
    }
    @media (max-width: 850px) {
        max-width: 250px;
    }
    @media (max-width: 600px) {
        max-width: 200px;
        padding: 8px;
    }
    @media (max-width: 400px) {
        flex-basis: 48%;
        flex-grow: 2%;
        max-width: 160px;
        /* margin-left: 20px; */
        padding: 8px;
    }
`;

export const Img = styled(LazyLoadImage)`
    width: 100%;
    max-width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: contain;

    &:hover {
        cursor: pointer;
    }
`;

export const ImageInfo = styled.div<{ hidden: boolean }>`
    position: absolute;
    bottom: 4%;
    left: 4%;
    display: ${(props) => (props.hidden ? 'none' : 'block')};
    width: 92.2%;
    background-color: white;
    backdrop-filter: blur(22px);
    background: rgba(88, 48, 102, 0.2);
    border-radius: 20px;
    padding: 20px;
    z-index: 1;
    margin: 0;
    transition: all 1.5s ease 0s;
    -webkit-transition: all 1.5s ease 0s;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const Title = styled.p`
    font-family: 'Arquitecta';
    font-size: 16px;
    font-weight: 700;
    line-height: 20.8px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0;
`;

export const Subtitle = styled.p`
    font-family: 'Arquitecta';
    font-size: 11px;
    font-weight: 700;
    line-height: 12.1%;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0;
    margin-top: 10px;
`;

export const TitleAlt = styled.p`
    font-family: 'Arquitecta';
    font-size: 14px;
    font-weight: 700;
    line-height: 15.4px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0;

    @media (min-width: 1001px) {
        display: none;
    }
`;

export const SubtitleAlt = styled.p`
    font-family: 'Arquitecta';
    font-size: 11px;
    font-weight: 700;
    line-height: 12.1%;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (min-width: 1001px) {
        display: none;
    }
`;
