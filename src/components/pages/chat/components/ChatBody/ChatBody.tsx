import React, { FC } from 'react';
import {
    Answer,
    AnswerContainer,
    Avatar,
    Container,
    InnerMessage,
    NewAnswer,
    Question,
    Wrapper,
} from './ChatBody.styles';
import { Individual } from '~/components/pages/main/components/individuals/components/ImageCard/ImageCard.types';

export const ChatBody: FC<{ individual: Individual }> = (props) => {
    const { individual } = props;
    return (
        <Container>
            <div style={{ display: 'block' }}>
                <Wrapper>
                    <Question>What is the meaning of life?</Question>
                    <AnswerContainer>
                        <Avatar src={individual.src} alt={individual.alt} />
                        <Answer>
                            I have a dream to free the mind of user interfaces and that mankind will
                            be able to communicate in new and innovative ways.
                        </Answer>
                    </AnswerContainer>
                    <AnswerContainer>
                        <Avatar src={individual.src} alt={individual.alt} />
                        <Answer>
                            I have a dream that one day the world will no longer rely on fossil
                            fuels.
                        </Answer>
                    </AnswerContainer>
                    <AnswerContainer>
                        <Avatar src={individual.src} alt={individual.alt} />
                        <Answer>
                            I have a dream that man will walk on Mars during my lifetime.
                        </Answer>
                    </AnswerContainer>
                    <AnswerContainer>
                        <Avatar src={individual.src} alt={individual.alt} />
                        <Answer>
                            I have a dream that man will walk on Mars during my lifetime.
                        </Answer>
                    </AnswerContainer>
                </Wrapper>
            </div>
            <NewAnswer>
                <InnerMessage>
                    I have a dream that one day every valley shall be exalted, every hill and
                    mountain shall be made low, the rough places will be made plain, and the crooked
                    places will be made straight, and the glory of the Lord shall be revealed.
                </InnerMessage>
            </NewAnswer>
        </Container>
    );
};
