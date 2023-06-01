import React, { FC, useState } from 'react';

import {
    Modal,
    ModalContent,
    ConsentWindow,
    Title,
    MainText,
    CheckboxContainer,
    Input,
    StyledCheckbox,
    Icon,
    Label,
    Span,
    ContinueButton,
    ButtonText,
} from './Consent.styles';
import { createPortal } from 'react-dom';
import { useGlobalContext } from '~/utils/Context';
import { Dispatch, Selector } from '~/store/hooks/redux-hooks';
import { signUpAction } from '~/store/actions/signUpActions';
import { errorSelector } from '~/store/selectors/errorSelector';

type Props = {
    show: boolean;
    onClose: () => void;
};

type SignUpResponse = {
    id: string;
    email: string;
    success: boolean;
};

export const ConsentModal: FC<Props> = (props) => {
    const dispatch = Dispatch();

    const { show, onClose } = props;

    const { user } = useGlobalContext();

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const isError = Selector(errorSelector);

    const onSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const response = await dispatch(signUpAction(user));
        console.log(response);
        if ((response.payload as SignUpResponse).success) {
            alert('You now may login with your email and password!');
        }
    };

    return createPortal(
        <div>
            <Modal $show={show} onClick={onClose} />
            <ModalContent $show={show}>
                <ConsentWindow>
                    <Title>About the platform</Title>
                    <MainText>
                        All of the characters here are not real. Everything you see and hear is
                        entirely generated by Artificial Intelligence machines. The opinions and
                        beliefs expressed do not represent anyone. They are hallucinations of a
                        bunch of 1s and 0s inside of a magic computer.
                    </MainText>
                    <MainText>
                        The creators of this platform have the best intentions with this project,
                        and deeply admire each and every character on the site. You might even say
                        they are our Heroes. In fact, you can say that.
                    </MainText>
                    <CheckboxContainer>
                        <Label>
                            <Input
                                checked={isChecked}
                                onChange={(event) => setIsChecked(event.target.checked)}
                            />
                            <StyledCheckbox checked={isChecked}>
                                <Icon
                                    checked={isChecked}
                                    width="18"
                                    height="13"
                                    viewBox="0 0 18 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {' '}
                                    <path
                                        d="M17 1L6 12L1 7"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Icon>
                            </StyledCheckbox>
                            <Span>I have read the above statement</Span>
                        </Label>
                    </CheckboxContainer>
                    {isError && (
                        <p style={{ margin: '0', marginTop: '10px', color: 'white' }}>
                            {isError === 'BAD_REQUEST' ||
                            isError === 'USER_WITH_SUCH_EMAIL_ALREADY_EXISTS'
                                ? 'User already exists'
                                : 'Please, use Google auth, since you are signed up with it.'}
                        </p>
                    )}
                    <ContinueButton disabled={!isChecked}>
                        <ButtonText onClick={onSubmit}>CONTINUE</ButtonText>
                    </ContinueButton>
                </ConsentWindow>
            </ModalContent>
        </div>,
        document.getElementById('root') as HTMLElement,
    );
};
