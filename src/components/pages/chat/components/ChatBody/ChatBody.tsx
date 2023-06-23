import React, { FC, MutableRefObject } from 'react';
import {
    Answer,
    AnswerContainer,
    Avatar,
    Container,
    LoaderWrapper,
    Question,
    Wrapper,
} from './ChatBody.styles';
import { Individual } from '~/components/pages/main/components/individuals/components/ImageCard/ImageCard.types';
import { ButtonLoader } from '~/components/common/buttonLoader/ButtonLoader';
import { v4 } from 'uuid';

type Message = {
    type: string;
    message: string;
};

export const ChatBody: FC<{
    individual: Individual;
    messages: Message[];
    isLoading: boolean;
    lastMessageRef: MutableRefObject<HTMLDivElement | null>;
}> = (props) => {
    const { individual, messages, isLoading, lastMessageRef } = props;
    console.log(messages);

    return (
        <Container>
            <div style={{ display: 'block' }}>
                <Wrapper>
                    {messages?.map((message: Message) =>
                        message.type === 'answer' ? (
                            <AnswerContainer key={v4()}>
                                <Avatar src={individual.src} alt={individual.alt} />
                                <Answer>{message.message}</Answer>
                            </AnswerContainer>
                        ) : (
                            <Question key={v4()}>{message.message}</Question>
                        ),
                    )}
                    {isLoading && (
                        <AnswerContainer>
                            {' '}
                            <Avatar src={individual.src} alt={individual.alt} />
                            <LoaderWrapper>
                                <ButtonLoader />
                            </LoaderWrapper>
                        </AnswerContainer>
                    )}
                    <div ref={lastMessageRef} />

                    {/* {messages.length ? (
                        <AnswerContainer>
                            <Avatar src={individual.src} alt={individual.alt} />
                            <Answer>{messages}</Answer>
                        </AnswerContainer>
                    ) : (
                        <AnswerContainer>
                            <Avatar src={individual.src} alt={individual.alt} />
                            <LoaderWrapper>
                                <ButtonLoader />
                            </LoaderWrapper>
                        </AnswerContainer>
                    )} */}

                    {/* <Question>What is the meaning of life?</Question>
                    <AnswerContainer>
                        <Avatar src={individual.src} alt={individual.alt} />
                        <Answer>
                            I have a dream to free the mind of user interfaces and that mankind will
                            be able to communicate in new and innovative ways.
                        </Answer>
                    </AnswerContainer> */}
                </Wrapper>
            </div>
        </Container>
    );
};
