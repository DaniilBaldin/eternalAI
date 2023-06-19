import styled from 'styled-components';

export const IndividualsMain = styled.div`
    margin-top: 150px;
    width: 100%;
    max-width: 1300px;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: right;
    justify-content: flex-start;
    margin-bottom: 40px;

    @media (max-width: 1000px) {
        margin-top: 50px;
        /* margin-left: 100px; */
    }
`;

export const Title = styled.p`
    font-family: 'Arquitecta';
    font-size: 36px;
    font-weight: 700;
    line-height: 46.8px;
    letter-spacing: 0.4em;
    color: #ffffff;
    text-transform: uppercase;
    margin: 0;
    margin-left: 20px;

    @media (max-width: 1000px) {
        font-size: 16px;
        line-height: 20.8px;
        letter-spacing: 0.3em;
    }
`;

export const Text = styled.p`
    font-family: 'Avenir';
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: #ffffff;
    opacity: 0.7;
    margin: 0;
    margin-left: 20px;
    margin-top: 8px;

    @media (max-width: 1000px) {
        font-size: 14px;
        line-height: 21px;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    /* gap: px; */
    /* margin: 32px auto 0px; */

    @media (max-width: 734px) {
        justify-content: center;
    }
`;
