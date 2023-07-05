import React, { FC, useState } from 'react';
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
    SignInButton,
    SignUpWindow,
    Title,
} from './Login.styles';
import { createPortal } from 'react-dom';
import { Selector, appDispatch } from '~/store/hooks/redux-hooks';
import { signInAction } from '~/store/actions/signInActions';

import { googleUrl } from '~/utils/stringifiedParams';
import { ErrorMessage } from '~/components/common/modal/Consent/Consent.styles';
import { loadingSelector } from '~/store/selectors/loadingSelector';
import { ButtonLoader } from '../../buttonLoader/ButtonLoader';
import { useNavigate } from 'react-router-dom';
import { IoSocket } from '~/services/socketConnect';

type Props = {
    show: boolean;
    onClose: () => void;
    onSignUp: () => void;
};

type ErrorMessage = {
    message: string;
    success: string;
};

export const LoginModal: FC<Props> = (props) => {
    const dispatch = appDispatch();
    const navigate = useNavigate();

    const isLoading = Selector(loadingSelector);

    const { show, onClose, onSignUp } = props;
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const onSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const response = await dispatch(signInAction({ email: email, password: password }));

        if (response.meta.requestStatus === 'fulfilled') {
            IoSocket.disconnect();
            navigate('/');
        }

        if (response.meta.requestStatus === 'rejected') {
            if (
                (response.payload as ErrorMessage).message ===
                'USER_WAS_REGISTERED_WITH_ANOTHER_METHOD'
            ) {
                setError('Please log in with Google service!');
            } else {
                setError('Email or password is incorrect!');
            }
        }
    };

    const handleBlur = (event: { target: HTMLInputElement }) => {
        if ((event.target as HTMLInputElement).validity.patternMismatch) {
            setError('Not a valid email address!');
        }
    };

    return createPortal(
        <div>
            <Modal $show={show} onClick={onClose} />
            <ModalContent $show={show}>
                <SignUpWindow>
                    <Title>Login</Title>
                    <Form onSubmit={onSubmit}>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            autoComplete="off"
                            autoCapitalize="off"
                            autoCorrect="off"
                            placeholder="Email"
                            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                            min={1}
                            onChange={(event) => {
                                setError('');
                                setEmail(event.target.value);
                            }}
                            onBlur={handleBlur}
                            required
                        />
                        <Label>Password</Label>
                        <Input
                            type="password"
                            autoComplete="off"
                            autoCapitalize="off"
                            placeholder="Password"
                            min={1}
                            value={password}
                            onChange={(event) => {
                                setError('');
                                setPassword(event.target.value);
                            }}
                            required
                        />
                    </Form>
                    {error && <ErrorMessage style={{ marginTop: '-10px' }}>{error}</ErrorMessage>}
                    <ResetLink>Forgot password?</ResetLink>
                    <ButtonsContainer>
                        <ButtonWrap>
                            <GoogleButton to={googleUrl}>
                                <img
                                    src="/google-icon.svg"
                                    alt="Google"
                                    style={{ marginRight: '16px' }}
                                />
                                SIGN IN WITH GOOGLE
                            </GoogleButton>
                        </ButtonWrap>
                        <SignInButton
                            onClick={onSubmit}
                            disabled={
                                error.length > 0 || !email || !password || password.length < 6
                            }
                        >
                            {isLoading ? <ButtonLoader /> : 'SIGN IN'}
                        </SignInButton>
                    </ButtonsContainer>
                    <BreakLine />
                    <BottomTextWrapper>
                        <BottomText>Don&acute;t have an account?</BottomText>
                        <BottomLink onClick={onSignUp}>Sign up</BottomLink>
                    </BottomTextWrapper>
                </SignUpWindow>
            </ModalContent>
        </div>,
        document.getElementById('root') as HTMLElement,
    );
};
