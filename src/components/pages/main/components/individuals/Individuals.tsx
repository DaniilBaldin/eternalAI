import React from 'react';

import { IndividualsMain, Title, Text, ImageWrapper, Img } from './Individuals.styles';

import { Soul } from './Individuals.types';
import { souls } from '~/utils/souls';

import 'react-lazy-load-image-component/src/effects/blur.css';

export const Individuals = () => {
    return (
        <IndividualsMain>
            <Title>Individuals</Title>
            <Text>Ask a question to your favorite person and get a realistic response</Text>
            <ImageWrapper>
                {souls.map((soul: Soul) => (
                    <Img key={soul.id} src={soul.src} alt={soul.alt} effect="blur" />
                ))}
            </ImageWrapper>
        </IndividualsMain>
    );
};
