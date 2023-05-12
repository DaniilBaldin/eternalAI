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
    width: 434px;
    height: 440px;
    visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.$show ? 1 : 0)};
    background-color: transparent;
    display: block;
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
    z-index: 999;
`;
