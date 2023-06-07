import styled from 'styled-components';

export const Main = styled.div`
    /* max-width: 1600px; */
    max-width: 90vw;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EclipseOne = styled.img`
    position: absolute;
    top: -40%;
    right: -10%;
    opacity: 0.3;
    z-index: -1;
`;

export const EclipseTwo = styled.img`
    position: absolute;
    top: 550px;
    left: -301px;
    opacity: 0.1;
    z-index: -1;
`;

export const AccountWindow = styled.div`
    width: 760px;
    height: 742px;
    border-radius: 32px;
    padding: 48px;
    border: none;
    outline: none;
    /* background: transparent; */
    background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    margin-top: 80px;
    margin-bottom: 24px;

    &::before {
        border-radius: 32px;
        content: '';
        background-image: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.8) -2.34%,
            rgba(88, 51, 239, 0.8) 114.41%
        );
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        position: absolute;
        z-index: -999;
    }
`;

export const PaymentWindow = styled.div`
    width: 760px;
    height: 365px;
    border-radius: 32px;
    padding: 48px;
    border: none;
    outline: none;
    /* background: transparent; */
    background: linear-gradient(90.83deg, #040410 11.84%, #0f0306 111.32%);
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 24px;

    &::before {
        border-radius: 32px;
        content: '';
        background-image: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.8) -2.34%,
            rgba(88, 51, 239, 0.8) 114.41%
        );
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        position: absolute;
        z-index: -999;
    }
`;

export const Title = styled.p`
    font-family: 'Avenir';
    font-size: 32px;
    font-weight: 800;
    line-height: 48px;
    letter-spacing: -0.01em;
    margin: 0;
    color: #ffffff;
    text-align: left;
    margin-bottom: 32px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin: 0;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin: 0;
    font-family: 'Avenir';
    font-size: 18px;
    line-height: 27px;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin-bottom: 8px;
`;

export const Input = styled.input`
    width: 664px;
    height: 59px;
    border: 1px solid #2f2535;
    background-color: #060608;
    border-radius: 16px;
    padding: 16px;
    margin: 0;
    font-family: 'Avenir';
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin-bottom: 32px;
    outline: none;

    &:focus {
        border: 1px solid #f82d98;
    }
    &:hover {
        border: 1px solid rgb(255, 255, 255, 0.5);
    }

    &::placeholder {
        color: white;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
`;

export const SaveButton = styled.button`
    width: 210px;
    height: 62px;
    border-radius: 120px;
    padding: 16px 24px 16px 24px;
    gap: 16px;
    border: none;
    outline: none;
    background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
    /* box-sizing: border-box; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 0; */
    font-family: 'Arquitecta';
    font-size: 13px;
    /* line-height: 14.3px; */
    letter-spacing: 0.3em;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        background: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.8) -2.34%,
            rgba(88, 51, 239, 0.8) 114.41%
        );
    }

    &:focus {
        background: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.8) -2.34%,
            rgba(88, 51, 239, 0.8) 114.41%
        );
    }

    &:disabled {
        background: linear-gradient(
            281.4deg,
            rgba(248, 45, 152, 0.4) -2.34%,
            rgba(88, 51, 239, 0.4) 114.41%
        );
        cursor: auto;
    }
`;

export const Badge = styled.div`
    width: 64px;
    height: 40px;
    border-radius: 15px;
    /* padding: 8px 16px 8px 16px; */
    /* gap: 8px; */
    border: none;
    outline: none;
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #040410;
`;

export const Text = styled.p`
    color: white;
    font-family: 'Arquitecta';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    /* line-height: 110%; */
    display: block;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin: 0;
    padding: 0;

    &:after {
        content: ' ';
        margin-left: -0.3em;
    }
`;

export const BadgeWrap = styled.div`
    width: 66px;
    height: 42px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin: 0;
    background: linear-gradient(
        281.4deg,
        rgba(248, 45, 152, 0.8) -2.34%,
        rgba(88, 51, 239, 0.8) 114.41%
    );
    cursor: default;
    /* margin-right: 16px; */
    outline: none;
    user-select: none;
`;

export const PriceTitle = styled.p`
    font-family: 'Avenir';
    font-size: 24px;
    font-weight: 900;
    line-height: 36px;
    font-style: normal;
    letter-spacing: -0.01em;
    margin: 0;
    color: #ffffff;
    text-align: center;
    margin-bottom: 12px;
    margin-top: 12px;
`;

export const Subtitle = styled.p`
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #ffffff;
    opacity: 0.7;
    margin: 0;
`;

export const ButtonWrap = styled.div`
    width: 664px;
    height: 62px;
    border-radius: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin: 0;
    background: linear-gradient(
        281.4deg,
        rgba(248, 45, 152, 0.8) -2.34%,
        rgba(88, 51, 239, 0.8) 114.41%
    );
    cursor: pointer;
    outline: none;
    margin-top: 32px;
    margin-bottom: 32px;
`;

export const UpdateButton = styled.button`
    width: 663px;
    height: 62px;
    border-radius: 120px;
    background: #060608;
    border: 1px solid white;
    margin: 0;
    /* padding: 16px 24px 16px 24px; */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Arquitecta';
    font-size: 13px;
    /* line-height: 14.3px; */
    letter-spacing: 0.3em;
    font-weight: 700;
    color: #ffffff;
    outline: none;
    text-transform: uppercase;

    &:hover {
        border: 1px solid transparent;
        width: 661px;
        height: 60px;
    }

    &:focus {
        border: 1px solid transparent;
        width: 661px;
        height: 60px;
    }

    &:disabled {
        border: 1px solid white;
        width: 663px;
        height: 62px;
        cursor: auto;
    }
`;

export const CancelButton = styled.button`
    height: 14px;
    width: 220px;
    background-color: transparent;
    border: none;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
    font-family: 'Arquitecta';
    font-size: 13px;
    font-weight: 700;
    line-height: 14.3px;
    letter-spacing: 0.3em;
    color: #ffffff;
    margin: 0;
    /* margin-right: 32px; */
    cursor: pointer;
    text-transform: uppercase;
    white-space: nowrap;

    &:hover {
        color: #f82d98;
    }

    &:disabled {
        color: #ffffff;
        cursor: auto;
    }
`;
