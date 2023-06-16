import styled from 'styled-components';

export const IndividualsMain = styled.div`
    margin-top: 150px;
    width: 75vw;
    padding-left: 50px;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: right;
    justify-content: flex-end;
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
    width: 80vw;
`;

export const ImageWrapper = styled.div`
    /* display: flex;
    justify-content: center;
    flex-flow: row wrap;
    gap: 20px;
    margin-bottom: 150px; */

    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: left;
    grid-gap: 20px;
    margin-bottom: 150px;

    @media (max-width: 1700px) {
        /* justify-content: space-evenly; */
        /* grid-template-columns: repeat(auto-fill, 220px); */
    }

    @media (max-width: 700px) {
        justify-content: center;
        /* grid-template-columns: repeat(auto-fill, 240px); */
    }
`;
