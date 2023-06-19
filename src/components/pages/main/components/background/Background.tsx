import React from 'react';

import {
    Wrapper,
    Gradient,
    ConversationWrapper,
    Conversation,
    BackgroundGroup,
    Musk,
    Teresa,
    Jobs,
    Einstein,
    Blur,
    King,
    BlurTwo,
} from './Background.styles';

export const Background = () => {
    return (
        <Wrapper>
            <ConversationWrapper>
                <Conversation src="/main/conversation.webp" alt="conversation" />
            </ConversationWrapper>
            <BackgroundGroup src="/main/Group2.webp" alt="background" />
            <Musk src="/main/Musk-compressed.webp" alt="Musk" />
            <Teresa src="/main/Teresa-compressed.webp" alt="Teresa" />
            <Jobs src="/main/Jobs-compressed.webp" alt="Jobs" />
            <Einstein src="/main/Einstein-compressed.webp" alt="Einstein" />
            <Blur src="/main/Ellipse3644.svg" alt="Blur" />
            <King src="/main/King-compressed.webp" alt="King" />
            <BlurTwo src="/main/Ellipse3644.svg" alt="BlurTwo" />
            <Gradient />
        </Wrapper>
    );
};
