import React, { FC } from 'react';

import {
    Wrapper,
    BackgroundImage,
    Portrait,
    Gradient,
    InnerWrapper,
    GradientTop,
} from './PersonImage.styles';

import { Individual } from '../../../main/components/individuals/components/ImageCard/ImageCard.types';

export const PersonImage: FC<{ individual: Individual }> = (props) => {
    const { individual } = props;
    return (
        <Wrapper>
            <InnerWrapper>
                <BackgroundImage
                    src="/background/EllipsePinkBlur.webp "
                    left={15}
                    bottom={5}
                    rotate={-90}
                    width={488}
                    height={564}
                    blur={27.11}
                />
                <BackgroundImage
                    src="/background/EllipseBlueBlur.webp"
                    left={20}
                    bottom={5}
                    rotate={-90}
                    width={488}
                    height={661}
                    blur={48.81}
                />
                <BackgroundImage
                    src="/background/EllipsePinkBlurVert.webp "
                    left={7}
                    bottom={5}
                    rotate={30}
                    width={490}
                    height={597}
                    blur={27.11}
                />
                <BackgroundImage
                    src="/background/EllipsePink.webp"
                    left={10}
                    bottom={10}
                    rotate={30}
                    width={490}
                    height={597}
                    blur={0}
                />
                <BackgroundImage
                    src="/background/EllipseYellowBlur.webp"
                    left={7}
                    bottom={5}
                    rotate={30}
                    width={490}
                    height={597}
                    blur={0}
                />
                <BackgroundImage
                    src="/background/EllipseYellow.webp"
                    left={10}
                    bottom={10}
                    rotate={30}
                    width={420}
                    height={537}
                    blur={0}
                />
                <BackgroundImage
                    src="/background/EllipseWhite.webp"
                    left={7}
                    bottom={5}
                    rotate={-57}
                    width={490}
                    height={618}
                    blur={17.11}
                />
                <BackgroundImage
                    src="/background/EllipseWhite.webp"
                    left={10}
                    bottom={10}
                    rotate={-45}
                    width={490}
                    height={619}
                    blur={0}
                />
            </InnerWrapper>
            <Portrait src={individual.portrait} alt={individual.alt} />
            <BackgroundImage
                src="/main/Ellipse3644.svg"
                left={15}
                bottom={10}
                rotate={-45}
                width={490}
                height={619}
                blur={0}
            />
            <Gradient />
            <GradientTop />
        </Wrapper>
    );
};
