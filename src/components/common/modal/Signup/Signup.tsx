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
    ErrorMessage,
} from './Signup.styles';

import { useGlobalContext } from '~/services/Context';
import { googleUrl } from '~/utils/stringifiedParams';

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
            setError('Password not strong enough!');
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
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
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
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            autoComplete="off"
                            placeholder="Password"
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$"
                            min={8}
                            onChange={(event) => {
                                setError('');
                                setPassword(event.target.value);
                            }}
                            onBlur={handleBlur}
                            required
                        />
                    </Form>
                    {error && <ErrorMessage style={{ marginTop: '-10px' }}>{error}</ErrorMessage>}
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
                                error.length > 0 || !email || !password || password.length < 8
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
