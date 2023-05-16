import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import {
    Modal,
    ModalContent,
    SignUpWindow,
    Title,
    Subtitle,
    Form,
    Label,
    Input,
    ButtonsContainer,
    GoogleButton,
    SignUpButton,
    BreakLine,
    ButtonWrap,
    BottomText,
    BottomTextWrapper,
    BottomLink,
} from './Signup.styles';

type Props = {
    show: boolean;
    onConsent: () => void;
    onClose: () => void;
    onSignIn: () => void;
};

export const SignUpModal: FC<Props> = (props) => {
    const { show, onClose, onSignIn, onConsent } = props;

    return createPortal(
        <div>
            <Modal $show={show} onClick={onClose} />
            <ModalContent $show={show}>
                <SignUpWindow>
                    <Title>Get started</Title>
                    <Subtitle>To continue please create an account</Subtitle>
                    <Form>
                        <Label>Email</Label>
                        <Input
                            type="text"
                            autoComplete="off"
                            autoCapitalize="off"
                            placeholder="Login"
                            min={1}
                            required
                        />
                        <Label>Password</Label>
                        <Input
                            type="password"
                            autoComplete="off"
                            autoCapitalize="off"
                            placeholder="Password"
                            min={1}
                            required
                        />
                    </Form>
                    <ButtonsContainer>
                        <ButtonWrap>
                            <GoogleButton>
                                <img
                                    src="/google-icon.svg"
                                    alt="Google"
                                    style={{ marginRight: '16px' }}
                                />
                                SIGN UP WITH GOOGLE
                            </GoogleButton>
                        </ButtonWrap>
                        <SignUpButton onClick={onConsent}>SIGN UP</SignUpButton>
                    </ButtonsContainer>
                    <BreakLine />
                    <BottomTextWrapper>
                        <BottomText>Already have an account?</BottomText>
                        <BottomLink tabIndex={0} onClick={onSignIn}>
                            Sign in
                        </BottomLink>
                    </BottomTextWrapper>
                </SignUpWindow>
            </ModalContent>
        </div>,
        document.getElementById('root') as HTMLElement,
    );
};
