import styled from 'styled-components';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Wrapper = styled.div`
    position: relative;
    padding: 1rem;
    bottom: 120px;
    width: 100%;
    height: 33.3vw;
    aspect-ratio: 1/1;
    transform: none;
    z-index: -10;

    @media (max-width: 1500px) {
        bottom: 80px;
    }
    @media (max-width: 1000px) {
        bottom: 60px;
    }
`;

export const Image = styled(LazyLoadImage)<{
    top: number;
    bottom?: string;
    left: string;
    width: string;
}>`
    position: absolute;
    bottom: ${(props) => `${props.bottom}`};
    top: ${(props) => `${props.top}%`};
    left: ${(props) => `${props.left}`};
    width: ${(props) => `${props.width}`};
    height: auto;
    z-index: -10;
    object-fit: contain;

    @media (max-width: 650px) {
        &:nth-child(0n + 2) {
            display: none;
        }
        &:nth-child(0n + 10) {
            display: none;
        }
    }
`;
