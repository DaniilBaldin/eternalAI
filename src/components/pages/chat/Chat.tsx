/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC, useEffect, useRef, useState } from 'react';

import {
    BackgroundGradient,
    ChatContainer,
    Container,
    ImageContainer,
    InnerImageWrapper,
    InputContainer,
    Name,
    NameContainer,
    Title,
    Wrapper,
} from './Chat.styles';
import { PersonImage } from './components/PersonImage/PersonImage';
import { ChatInput } from './components/ChatInput/ChatInput';
import { useLocation, useParams } from 'react-router-dom';
import { individuals } from '~/utils/individuals';
import { Individual } from '../main/components/individuals/components/ImageCard/ImageCard.types';
import { ChatBody } from './components/ChatBody/ChatBody';
import { IoSocket } from '~/services/socketConnect';
import { questions } from '~/utils/questions';
import { Question } from '~/utils/questions';
import { useGlobalContext } from '~/services/Context';

type Message = {
    type: string;
    message: string;
};

export const Chat: FC = () => {
    const location = useLocation();

    const questionId = location.state?.id;
    const question = questions.filter((question: Question) => question.id === questionId);

    const { setIsPricing } = useGlobalContext();

    const lastMessageRef = useRef<null | HTMLDivElement>(null);

    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams();
    const individualInfo = individuals.filter((individual: Individual) => individual.id === +id!);

    IoSocket.on('heroResponse', (data) => {
        console.log('message received!');
        const newAnswer = { type: 'answer', message: data };
        setMessages([...messages, newAnswer]);
        setIsLoading(false);
    });

    useEffect(() => {
        if (question.length) {
            const newQuestion = {
                type: 'question',
                message: question[0].question,
            };
            setMessages([...messages, newQuestion]);
        }
    }, []);

    useEffect(() => {
        IoSocket.connect();

        IoSocket.on('error', (response) => {
            console.log(response);
        });

        IoSocket.on('user-questions', () => {
            console.log('Blocked!');
            setIsPricing(true);
        });

        IoSocket.on('disconnect', () => {
            setIsLoading(false);
        });

        return () => {
            IoSocket.off('hero');
            IoSocket.off('heroResponse');
            IoSocket.off('disconnect');
            // IoSocket.disconnect();
        };
    }, []);

    useEffect(() => {
        if ((individualInfo[0] as Individual).name.length) {
            setIsLoading(true);
            IoSocket.timeout(500).emit('hero', {
                hero: `${(individualInfo[0] as Individual).name}`,
                question: question.length
                    ? question[0].question
                    : 'Greet the user and propose to share thoughts?',
            });
        }
    }, [id]);

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <InnerImageWrapper>
                        <BackgroundGradient src="/main/Ellipse3644.svg" />
                        <PersonImage individual={individualInfo[0]} />
                        <NameContainer>
                            <Name>{individualInfo[0].name}</Name>
                            <Title>{individualInfo[0].title}</Title>
                        </NameContainer>
                    </InnerImageWrapper>
                </ImageContainer>
                <ChatContainer>
                    <ChatBody
                        individual={individualInfo[0]}
                        messages={messages}
                        isLoading={isLoading}
                        lastMessageRef={lastMessageRef}
                    />
                </ChatContainer>
            </Wrapper>
            <InputContainer>
                <ChatInput
                    hero={(individualInfo[0] as Individual).name}
                    setQuestion={setMessages}
                    messages={messages}
                    setIsLoading={setIsLoading}
                />
            </InputContainer>
        </Container>
    );
};
