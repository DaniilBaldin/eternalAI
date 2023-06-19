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
            <BackgroundGroup src="/public/main/Group2.webp" alt="background" />
            <Musk src="/public/main/Musk-compressed.webp" alt="Musk" />
            <Teresa src="/public/main/Teresa-compressed.webp" alt="Teresa" />
            <Jobs src="/public/main/Jobs-compressed.webp" alt="Jobs" />
            <Einstein src="/public/main/Einstein-compressed.webp" alt="Einstein" />
            <Blur src="/public/main/Ellipse3644.svg" alt="Blur" />
            <King src="/public/main/King-compressed.webp" alt="King" />
            <BlurTwo src="/public/main/Ellipse3644.svg" alt="BlurTwo" />
            <Gradient />
        </Wrapper>
    );
};
