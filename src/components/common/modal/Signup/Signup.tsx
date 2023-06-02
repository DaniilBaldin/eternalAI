import React, { FC, useState } from 'react';
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

import { useGlobalContext } from '~/utils/Context';
import { googleUrl } from '~/utils/stringifiedParams';
import { ErrorMessage } from '../Consent/Consent.styles';

type Props = {
    show: boolean;
    onConsent: () => void;
    onClose: () => void;
    onSignIn: () => void;
};

export const SignUpModal: FC<Props> = (props) => {
    const { setUser } = useGlobalContext();

    const { show, onClose, onSignIn, onConsent } = props;

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const user = { email: email, password: password };

    const handleEmailBlur = (event: { target: HTMLInputElement }) => {
        if ((event.target as HTMLInputElement).validity.patternMismatch) {
            setError('Not a valid email address!');
        }
    };

    const handleBlur = (event: { target: HTMLInputElement }) => {
        if ((event.target as HTMLInputElement).validity.patternMismatch) {
            setError(
                'Password must be at least 6 characters long and contain at least one uppercase letter and one number!',
            );
        }
    };

    return createPortal(
        <div>
            <Modal $show={show} onClick={onClose} />
            <ModalContent $show={show}>
                <SignUpWindow>
                    <Title>Get started</Title>
                    <Subtitle>To continue please create an account</Subtitle>
                    <Form
                        onSubmit={() => {
                            setUser(user);
                            onConsent();
                        }}
                    >
                        <Label htmlFor="email">
                            Email
                            <Input
                                type="text"
                                id="email"
                                name="email"
                                pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$"
                                autoComplete="off"
                                placeholder="Email"
                                autoCorrect="off"
                                min={1}
                                onChange={(event) => {
                                    setError('');
                                    setEmail(event.target.value);
                                }}
                                onBlur={handleEmailBlur}
                                required
                            />
                        </Label>
                        <Label htmlFor="password">
                            Password
                            <Input
                                type="password"
                                id="password"
                                autoComplete="off"
                                placeholder="Password"
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$"
                                min={1}
                                onChange={(event) => {
                                    setError('');
                                    setPassword(event.target.value);
                                }}
                                onBlur={handleBlur}
                                required
                            />
                        </Label>
                    </Form>
                    {error && (
                        <ErrorMessage style={{ marginTop: '-20px', marginBottom: '10px' }}>
                            {error}
                        </ErrorMessage>
                    )}
                    <ButtonsContainer>
                        <ButtonWrap>
                            <GoogleButton to={googleUrl}>
                                <img
                                    src="/google-icon.svg"
                                    alt="Google"
                                    style={{ marginRight: '16px' }}
                                />
                                SIGN UP WITH GOOGLE
                            </GoogleButton>
                        </ButtonWrap>
                        <SignUpButton
                            type="submit"
                            onClick={() => {
                                setUser(user);
                                onConsent();
                            }}
                            disabled={
                                error.length > 0 || !email || !password || password.length < 6
                            }
                        >
                            SIGN UP
                        </SignUpButton>
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
