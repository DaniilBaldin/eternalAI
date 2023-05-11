import { styled } from 'styled-components';

export const IndividualsMain = styled.div`
    margin-top: 150px;
    width: 80vw;
    /* max-width: 80vw; */
    /* padding-left: 4%; */
    padding-right: 1%;
    /* margin-left: 10%; */
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: right;
    justify-content: flex-end;

    @media (max-width: 1200px) {
        margin-left: 8%;
    }
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
    margin-left: 5vw;
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
    margin-left: 5vw;
`;

export const ImageWrapper = styled.div`
    /* display: flex;
    justify-content: center;
    flex-flow: row wrap;
    margin-bottom: 150px; */

    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: center;
    gap: 20px;
    margin-bottom: 150px;
`;
