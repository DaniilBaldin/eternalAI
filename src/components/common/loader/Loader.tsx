import React, { FC } from 'react';

import {
    AnimationContainer,
    LoaderMain,
    TextImage,
    Wrapper,
    BackgroundImage,
} from './Loader.styles';

export const Loader: FC = () => {
    return (
        <LoaderMain>
            <Wrapper>
                <AnimationContainer>
                    <BackgroundImage
                        src="/background/EllipseBlueBlur.webp"
                        // left={20}
                        // bottom={5}
                        rotate={90}
                        width={265.41 + 50}
                        height={264.22 + 50}
                        blur={9.18}
                        style={{ marginLeft: '20px' }}
                        loading="lazy"
                    />
                    <BackgroundImage
                        src="/background/EllipseBlueBlur.webp "
                        rotate={90}
                        width={200.41 + 50}
                        height={254.22 + 50}
                        blur={9.18}
                        loading="lazy"
                    />
                    <BackgroundImage
                        src="/background/EllipseBlueBlur.webp "
                        rotate={90}
                        width={165.41 + 50}
                        height={224.14 + 50}
                        blur={16.54}
                        loading="lazy"
                    />
                    <BackgroundImage
                        src="/background/EllipsePink.webp "
                        rotate={90}
                        width={165.41 + 50}
                        height={224.14 + 50}
                        blur={16.54}
                        loading="lazy"
                    />
                    <BackgroundImage
                        src="/background/EllipsePink.webp"
                        rotate={30}
                        width={166 + 50}
                        height={202 + 50}
                        blur={5}
                        loading="lazy"
                    />
                    <BackgroundImage
                        src="/background/EllipseYellow.webp"
                        rotate={45}
                        width={173 + 50}
                        height={200 + 50}
                        blur={0}
                        loading="lazy"
                    />
                    <BackgroundImage
                        src="/background/EllipseYellow.webp"
                        rotate={45}
                        width={166 + 50}
                        height={202 + 50}
                        blur={10}
                        loading="lazy"
                    />
                    <BackgroundImage
                        src="/background/EllipseWhite.webp"
                        rotate={57}
                        width={166 + 50}
                        height={209 + 50}
                        blur={9.11}
                        loading="lazy"
                    />
                    <BackgroundImage
                        src="/background/EllipseWhite.webp"
                        rotate={45}
                        width={166 + 50}
                        height={210 + 50}
                        blur={0}
                        loading="lazy"
                    />
                </AnimationContainer>
                <TextImage src="/header/ETERNAL.svg" loading="lazy" />
            </Wrapper>
        </LoaderMain>
    );
};
