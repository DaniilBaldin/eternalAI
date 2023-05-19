import React from 'react';

import {
    Main,
    Gradient,
    MainQuestions,
    Title,
    Text,
    QuestionButton,
    ButtonText,
} from './MainPage.styles';
import { Background } from './components/background/Background';
import { Individuals } from './components/individuals/Individuals';
import { useGlobalContext } from '~/utils/Context';

export const MainPage = () => {
    const { isPricing, isSubscribe, isSuccess } = useGlobalContext();

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
                <QuestionButton type="button" hidden={isPricing || isSubscribe || isSuccess}>
                    <ButtonText>What did you want to be when you grew up?</ButtonText>
                </QuestionButton>
                <QuestionButton type="button" hidden={isPricing || isSubscribe || isSuccess}>
                    <ButtonText>What is the meaning of life?</ButtonText>
                </QuestionButton>
                <QuestionButton type="button" hidden={isPricing || isSubscribe || isSuccess}>
                    <ButtonText>What is your greatest accomplishment?</ButtonText>
                </QuestionButton>
            </MainQuestions>
            <Background />
            <Individuals />
        </Main>
    );
};
