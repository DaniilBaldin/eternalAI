import React from 'react';

import { IndividualsMain, Title, Text, ImageWrapper } from './Individuals.styles';

import { Individual } from './components/ImageCard/ImageCard.types';
import { individuals } from '~/utils/individuals';

import 'react-lazy-load-image-component/src/effects/blur.css';
import { ImageCard } from './components/ImageCard/ImageCard';
import { useNavigate } from 'react-router-dom';

export const Individuals = (): JSX.Element => {
    const navigate = useNavigate();
    return (
        <IndividualsMain>
            <Title>Individuals</Title>
            <Text>Ask a question to your favorite person and get a realistic response</Text>

            <ImageWrapper>
                {individuals.map((individual: Individual) => (
                    <div key={individual.id} onClick={() => navigate(`/chat/${individual.id}`)}>
                        <ImageCard
                            id={individual.id}
                            src={individual.src}
                            alt={individual.alt}
                            name={individual.name}
                            title={individual.title}
                        />
                    </div>
                ))}
            </ImageWrapper>
        </IndividualsMain>
    );
};
