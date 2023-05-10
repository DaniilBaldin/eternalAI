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

export const MainPage = () => {
    return (
        <Main>
            <Gradient />
            <MainQuestions>
                <Title>ask important people</Title>
                <Title>important questions</Title>
                <Text>Choose a question to quickly get a realistic response</Text>
                <QuestionButton type="button">
                    <ButtonText>What did you want to be when you grew up?</ButtonText>
                </QuestionButton>
                <QuestionButton type="button">
                    <ButtonText>What is the meaning of life?</ButtonText>
                </QuestionButton>
                <QuestionButton type="button">
                    <ButtonText>What is your greatest accomplishment?</ButtonText>
                </QuestionButton>
            </MainQuestions>
            <Background />
            <Individuals />
        </Main>
    );
};
