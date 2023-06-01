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
import { Dispatch, Selector } from '~/store/hooks/redux-hooks';
import { signInAction } from '~/store/actions/signInActions';
import { errorSelector } from '~/store/selectors/errorSelector';
import { googleUrl } from '~/utils/stringifiedParams';

type Props = {
    show: boolean;
    onClose: () => void;
    onSignUp: () => void;
};

export const LoginModal: FC<Props> = (props) => {
    const dispatch = Dispatch();

    const isError = Selector(errorSelector);

    const { show, onClose, onSignUp } = props;
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const response = await dispatch(signInAction({ email: email, password: password }));
        console.log(response);
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
                            type="text"
                            autoComplete="off"
                            autoCapitalize="off"
                            placeholder="Login"
                            min={1}
                            // value={user ? user.email : ''}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                        <Label>Password</Label>
                        <Input
                            type="password"
                            autoComplete="off"
                            autoCapitalize="off"
                            placeholder="Password"
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$"
                            min={1}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            onInvalid={(e) => {
                                (e.target as HTMLInputElement).setCustomValidity(
                                    'Password must contain at least one uppercase letter and one number!',
                                );
                            }}
                            required
                        />
                    </Form>
                    {isError && (
                        <p style={{ margin: '0', color: 'white' }}>
                            {isError === 'BAD_REQUEST' ||
                            isError === 'PASSWORD_IS_INCORRECT' ||
                            isError === 'USER_NOT_FOUND'
                                ? 'Email or password is not correct!'
                                : 'Please, use Google auth, since you are signed up with it.'}
                        </p>
                    )}
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
                            disabled={!email || !password || password.length < 6}
                        >
                            SIGN IN
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
