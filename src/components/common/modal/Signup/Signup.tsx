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

import { Dispatch, Selector } from '~/store/hooks/redux-hooks';
import { errorSelector } from '~/store/selectors/errorSelector';
import { useGlobalContext } from '~/utils/Context';
import { googleUrl } from '~/utils/stringifiedParams';
import { resetError } from '~/store/reducers/authReducer';

type Props = {
    show: boolean;
    onConsent: () => void;
    onClose: () => void;
    onSignIn: () => void;
};

export const SignUpModal: FC<Props> = (props) => {
    const dispatch = Dispatch();

    const isError = Selector(errorSelector);
    const { setUser } = useGlobalContext();

    const { show, onClose, onSignIn, onConsent } = props;

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const user = { email: email, password: password };

    const handleEmailBlur = (event: { target: HTMLInputElement }) => {
        if ((event.target as HTMLInputElement).validity.patternMismatch) {
            alert('Not a valid email address!');
        }
    };

    const handleBlur = (event: { target: HTMLInputElement }) => {
        if ((event.target as HTMLInputElement).validity.patternMismatch) {
            alert(
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
                                type="email"
                                id="email"
                                name="email"
                                // pattern="/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/u"
                                autoComplete="off"
                                placeholder="Email"
                                autoCorrect="off"
                                min={1}
                                onChange={(event) => {
                                    dispatch(resetError());
                                    setEmail(event.target.value);
                                }}
                                // onBlur={handleEmailBlur}
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
                                    dispatch(resetError());
                                    setPassword(event.target.value);
                                }}
                                onBlur={handleBlur}
                                required
                            />
                        </Label>
                    </Form>
                    {isError && (
                        <p style={{ margin: '0', color: 'white' }}>Incorrect email or password.</p>
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
                            disabled={!email || !password || password.length < 6}
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
