import  styled  from 'styled-components';

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

export const ConsentWindow = styled.div`
    width: 721px;
    height: 526px;
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
    margin-bottom: 8px;
`;

export const MainText = styled.p`
    opacity: 0.7;
    font-family: 'Avenir';
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin: 0;
    margin-bottom: 34px;
`;

export const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
    display: inline-block;
    width: 32px;
    height: 32px;
    border: 1px solid white;
    border-radius: 8px;
    background: transparent;
    transition: all 150ms;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Icon = styled.svg<{ checked: boolean }>`
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

export const Span = styled.span`
    opacity: 0.7;
    font-family: 'Avenir';
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin: 0;
`;

export const ContinueButton = styled.button`
    width: 625px;
    height: 62px;
    border-radius: 120px;
    border: none;
    outline: none;
    padding: 16px 24px 16px 24px;
    background: linear-gradient(281.4deg, #f82d98 -2.34%, #5833ef 114.41%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    margin-top: 34px;
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

export const ButtonText = styled.p`
    color: #ffffff;
    font-family: 'Arquitecta';
    font-size: 13px;
    font-weight: 700;
    font-style: normal;
    line-height: 27px;
    letter-spacing: 0.3em;
`;
