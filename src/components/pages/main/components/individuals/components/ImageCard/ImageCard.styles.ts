import { LazyLoadImage } from 'react-lazy-load-image-component';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    /* flex-basis: 240px; */
    /* flex: 0 1 calc(20% - 20px); */
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: right;
    overflow: hidden;
`;

export const Img = styled(LazyLoadImage)`
    /* margin: 20px; */
    max-width: 100%;
    height: auto;

    /* flex: 0 1 calc(20% - 20px); */
    /* width: 14vw; */
    border-radius: 20px;
    /* min-width: 90%; */
    object-fit: contain;

    &:hover {
        cursor: pointer;
    }

    /* @media (min-width: 1700px) {
        max-width: 250px;
    } */
`;

export const ImageInfo = styled.div<{ hidden: boolean }>`
    position: absolute;
    bottom: -1px;
    display: ${(props) => (props.hidden ? 'none' : 'block')};
    width: 100%;
    background-color: white;
    backdrop-filter: blur(22px);
    background: rgba(88, 48, 102, 0.2);
    border-radius: 20px;
    padding: 20px;
    z-index: 1;
    margin: 0;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;

    &:hover {
        cursor: pointer;
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
