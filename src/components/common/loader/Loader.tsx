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
                        src="public/background/EllipseBlueBlur.webp "
                        // left={20}
                        // bottom={5}
                        rotate={90}
                        width={265.41}
                        height={264.22}
                        blur={9.18}
                        style={{ marginLeft: '20px' }}
                    />
                    <BackgroundImage
                        src="/public/background/EllipseBlueBlur.webp "
                        rotate={90}
                        width={200.41}
                        height={254.22}
                        blur={9.18}
                        // style={{ marginLeft: '50px' }}
                    />
                    <BackgroundImage
                        src="/public/background/EllipseBlueBlur.webp "
                        rotate={90}
                        width={165.41}
                        height={224.14}
                        blur={16.54}
                    />
                    <BackgroundImage
                        src="/background/EllipsePinkBlur.webp "
                        rotate={90}
                        width={165.41}
                        height={224.14}
                        blur={16.54}
                    />
                    <BackgroundImage
                        src="/background/EllipsePink.webp"
                        // left={10}
                        // bottom={10}
                        rotate={30}
                        width={166}
                        height={202}
                        blur={5}
                    />
                    <BackgroundImage
                        src="/background/EllipseYellow.webp"
                        // left={10}
                        // bottom={10}
                        rotate={45}
                        width={173}
                        height={200}
                        blur={0}
                    />
                    <BackgroundImage
                        src="/background/EllipseYellow.webp"
                        // left={7}
                        // bottom={5}
                        rotate={45}
                        width={166}
                        height={202}
                        blur={10}
                    />
                    <BackgroundImage
                        src="/background/EllipseWhite.webp"
                        // left={7}
                        // bottom={5}
                        rotate={57}
                        width={166}
                        height={209}
                        blur={9.11}
                    />
                    <BackgroundImage
                        src="/background/EllipseWhite.webp"
                        // left={10}
                        // bottom={10}
                        rotate={45}
                        width={166}
                        height={210}
                        blur={0}
                    />
                </AnimationContainer>
                <TextImage src="/header/ETERNAL.svg" />
            </Wrapper>
        </LoaderMain>
    );
};
