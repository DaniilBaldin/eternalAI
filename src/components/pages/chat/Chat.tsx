/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect } from 'react';

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
import { useNavigate, useParams } from 'react-router-dom';
import { individuals } from '~/utils/individuals';
import { Individual } from '../main/components/individuals/components/ImageCard/ImageCard.types';
import { ChatBody } from './components/ChatBody/ChatBody';
import { Selector } from '~/store/hooks/redux-hooks';
import { authSelector } from '~/store/selectors/authSelector';

export const Chat = () => {
    const navigate = useNavigate();
    // const [messages, setMessages] = useState([]);

    const isAuth = Selector(authSelector);

    const { id } = useParams();
    const individualInfo = individuals.filter((individual: Individual) => individual.id === +id!);

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
        }
    }, [isAuth]);

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
                    <ChatBody individual={individualInfo[0]} />
                </ChatContainer>
            </Wrapper>
            <InputContainer>
                <ChatInput />
            </InputContainer>
        </Container>
    );
};
