import styled from 'styled-components';

export const Container = styled.section`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 80vw;
    min-width: 80vw;
    position: relative;
    padding: 0;
    max-height: 1100px;
    padding-top: 30px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex: 1 0 auto;
    max-height: 100%;
    padding-bottom: 30px;
    /* gap: 50px; */
`;

export const ImageContainer = styled.div`
    flex: 0 0 55%;
    width: 60%;
    height: calc(100vh - 298px);
    /* min-height: 200px; */
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 -34px;
    align-self: center;
    /* padding-top: 40px; */
    /* max-height: 1100px; */
`;

export const ChatContainer = styled.div`
    flex: 1 0 calc(45% + 32px);
    width: calc(40% + 32px);
    /* height: 940px; */
    height: calc(100vh - 360px);
    min-height: 200px;
    position: relative;
    margin-left: -20px;
    display: flex;
    flex-direction: column;
    /* padding-top: 40px; */
    /* max-height: 1100px; */
`;
export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100px;
    margin: 0;
    /* margin-top: 50px; */
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 50px;
    gap: 10px;
    margin: 0;
    margin-top: 20px;
`;

export const Name = styled.p`
    font-family: 'Arquitecta';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    color: white;
    margin: 0;
`;

export const Title = styled.p`
    font-family: 'Arquitecta';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    color: white;
    margin: 0;
`;

export const BackgroundGradient = styled.img`
    position: absolute;
    left: 30%;
    top: -20%;
    z-index: 1;
    transform: rotate(-43deg);
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const InnerImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
