import { LazyLoadImage } from 'react-lazy-load-image-component';
import { styled } from 'styled-components';

export const IndividualsMain = styled.div`
    margin-top: 150px;
    padding-left: 4%;
    padding-right: 4%;
    margin-left: 5%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
`;

export const Title = styled.p`
    font-family: 'Arquitecta';
    font-size: 36px;
    font-weight: 700;
    line-height: 46.8px;
    letter-spacing: 0.4em;
    color: #ffffff;
    /* text-align: left; */
    text-transform: uppercase;
    margin-bottom: 8px;
    margin-left: 1vw;
`;

export const Text = styled.p`
    font-family: 'Avenir';
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: #ffffff;
    opacity: 0.7;
    margin-top: 8px;
    margin-left: 1vw;
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    flex-flow: row wrap;
    max-width: 1600px;
    margin-bottom: 150px;
`;

export const Img = styled(LazyLoadImage)`
    flex-basis: 19%;
    flex-grow: 1;
    margin: 0.02% !important;
    min-width: 270px;
    max-width: 270px;
    padding: 10px;
    border-radius: 40px;
    object-fit: contain;
    margin: 0;
`;
