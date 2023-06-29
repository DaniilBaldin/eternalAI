import React, { lazy, useEffect } from 'react';

import {
    Main,
    Gradient,
    MainQuestions,
    Title,
    Text,
    QuestionButton,
    ButtonText,
} from './MainPage.styles';
// import { Background } from './components/background/Background';
const Background = lazy(() =>
    import('./components/background/Background').then(({ Background }) => ({
        default: Background,
    })),
);

import { Individuals } from './components/individuals/Individuals';
import { useGlobalContext } from '~/services/Context';
import { useNavigate } from 'react-router-dom';
import { randomNumber } from '~/utils/randomNumber';
import { IoSocket } from '~/services/socketConnect';

export const MainPage = () => {
    const navigate = useNavigate();

    const { isPricing, isSubscribe, isSuccess } = useGlobalContext();

    useEffect(() => {
        if (IoSocket.connected) {
            IoSocket.disconnect();
        }
    }, [IoSocket]);

    return (
        <Main>
            <Gradient />
            <MainQuestions
                style={
                    isPricing || isSubscribe || isSuccess
                        ? { marginTop: '80vh' }
                        : { marginTop: '0px' }
                }
            >
                <Title hidden={isPricing || isSubscribe || isSuccess}>ask important people</Title>
                <Title hidden={isPricing || isSubscribe || isSuccess}>important questions</Title>
                <Text hidden={isPricing || isSubscribe || isSuccess}>
                    Choose a question to quickly get a realistic response
                </Text>
                <QuestionButton
                    type="button"
                    hidden={isPricing || isSubscribe || isSuccess}
                    onClick={() => {
                        navigate(`/chat/${randomNumber(1, 14)}`, { state: { id: 1 } });
                    }}
                >
                    <ButtonText>What did you want to be when you grew up?</ButtonText>
                </QuestionButton>
                <QuestionButton
                    type="button"
                    hidden={isPricing || isSubscribe || isSuccess}
                    onClick={() => {
                        navigate(`/chat/${randomNumber(1, 14)}`, { state: { id: 2 } });
                    }}
                >
                    <ButtonText>What is the meaning of life?</ButtonText>
                </QuestionButton>
                <QuestionButton
                    type="button"
                    hidden={isPricing || isSubscribe || isSuccess}
                    onClick={() => {
                        navigate(`/chat/${randomNumber(1, 14)}`, { state: { id: 3 } });
                    }}
                >
                    <ButtonText>What is your greatest accomplishment?</ButtonText>
                </QuestionButton>
                <Background />
            </MainQuestions>
            <Individuals />
        </Main>
    );
};
