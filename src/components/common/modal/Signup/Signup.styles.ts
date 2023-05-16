import { styled } from 'styled-components';

export const Modal = styled.div<{ $show: boolean }>`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(77px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => (props.$show ? 1 : 0)};
    /* transition: all 0.1s ease-out; */
    pointer-events: ${(props) => (props.$show ? 'all' : 'none')};
    z-index: 100;
`;

export const ModalContent = styled.div<{ $show: boolean }>`
    width: 721px;
    height: 612px;
    visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.$show ? 1 : 0)};
    background: transparent;
    /* display: block; */
    position: fixed;
    /* border: 1px solid white; */
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 200;
    margin-top: 20px;
`;

export const SignUpWindow = styled.div`
    width: 721px;
    height: 612px;
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
    margin-bottom: 4px;
`;

export const Subtitle = styled.p`
    opacity: 0.7;
    margin: 0;
    font-family: 'Avenir';
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.01em;
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
    width: 625px;
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
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const ButtonWrap = styled.div`
    width: 304px;
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
    margin-right: 16px;
    outline: none;
`;

export const GoogleButton = styled.button`
    width: 303px;
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

    &:hover {
        border: 1px solid transparent;
        width: 302px;
        height: 60px;
    }

    &:focus {
        border: 1px solid transparent;
        width: 302px;
        height: 60px;
    }
`;

export const SignUpButton = styled.button`
    width: 305px;
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
`;

export const BreakLine = styled.div`
    width: 625px;
    height: 0px;
    border: 1px solid #2f2525;
    margin: 0;
    margin-top: 32px;
    margin-bottom: 32px;
    /* align-self: center; */
`;

export const BottomTextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-bottom: 48px;
    padding: 0;
    gap: 6px;
`;

export const BottomText = styled.p`
    font-family: 'Avenir';
    font-style: normal;
    font-size: 18px;
    font-weight: 800;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin: 0;
`;

export const BottomLink = styled.p`
    font-family: 'Avenir';
    font-style: normal;
    font-size: 18px;
    font-weight: 800;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: rgba(248, 45, 152, 1);
    cursor: pointer;
    margin: 0;

    &:hover {
        color: rgba(248, 45, 152, 0.5);
    }

    &:focus {
        color: rgba(248, 45, 152, 0.5);
    }
`;
