import React, { FC } from 'react';
import {
    BottomLink,
    BottomText,
    BottomTextWrapper,
    BreakLine,
    ButtonWrap,
    ButtonsContainer,
    Form,
    GoogleButton,
    Input,
    Label,
    Modal,
    ModalContent,
    ResetLink,
    SignUpButton,
    SignUpWindow,
    Title,
} from './Login.styles';
import { createPortal } from 'react-dom';

type Props = {
    show: boolean;
    onClose: () => void;
    onSignUp: () => void;
};

export const LoginModal: FC<Props> = (props) => {
    const { show, onClose, onSignUp } = props;

    return createPortal(
        <div>
            <Modal $show={show} onClick={onClose} />
            <ModalContent $show={show}>
                <SignUpWindow>
                    <Title>Login</Title>
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
                    <ResetLink>Forgot password?</ResetLink>
                    <ButtonsContainer>
                        <ButtonWrap>
                            <GoogleButton>
                                <img
                                    src="/google-icon.svg"
                                    alt="Google"
                                    style={{ marginRight: '16px' }}
                                />
                                SIGN IN WITH GOOGLE
                            </GoogleButton>
                        </ButtonWrap>
                        <SignUpButton>SIGN IN</SignUpButton>
                    </ButtonsContainer>
                    <BreakLine />
                    <BottomTextWrapper>
                        <BottomText>Don&acute;t have an account?</BottomText>
                        <BottomLink tabIndex={0} onClick={onSignUp}>
                            Sign up
                        </BottomLink>
                    </BottomTextWrapper>
                </SignUpWindow>
            </ModalContent>
        </div>,
        document.getElementById('root') as HTMLElement,
    );
};
