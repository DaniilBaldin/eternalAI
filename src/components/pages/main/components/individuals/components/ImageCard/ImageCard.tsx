import React, { useState } from 'react';

import { Individual } from './ImageCard.types';
import {
    ImageInfo,
    Img,
    Title,
    Wrapper,
    Subtitle,
    TitleAlt,
    SubtitleAlt,
} from './ImageCard.styles';

export const ImageCard = (individual: Individual): JSX.Element => {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    return (
        <Wrapper
            onMouseEnter={() => {
                setIsHovering(true);
            }}
            onMouseLeave={() => {
                setIsHovering(false);
            }}
        >
            <Img src={individual.src} alt={individual.alt} effect="blur" />

            <ImageInfo hidden={!isHovering}>
                <Title>{individual.name}</Title>
                <Subtitle>{individual.title}</Subtitle>
            </ImageInfo>

            <TitleAlt>{individual.name}</TitleAlt>
            <SubtitleAlt>{individual.title}</SubtitleAlt>
        </Wrapper>
    );
};
