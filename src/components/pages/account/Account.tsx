import React, { useEffect, useState } from 'react';

import {
    Main,
    EclipseOne,
    EclipseTwo,
    AccountWindow,
    PaymentWindow,
    Title,
    Form,
    Label,
    Input,
    ButtonContainer,
    SaveButton,
    Badge,
    BadgeWrap,
    Text,
    PriceTitle,
    Subtitle,
    ButtonWrap,
    UpdateButton,
    CancelButton,
    PaymentForm,
    PaymentSaveButton,
} from './Account.styles';
import { PaymentInputs } from '~/components/common/PaymentInput/PaymentInput';
import { Dispatch, Selector } from '~/store/hooks/redux-hooks';
import { authSelector } from '~/store/selectors/authSelector';
import { useNavigate } from 'react-router-dom';
import { userSelector } from '~/store/selectors/userSelector';
import { tokenSelector } from '~/store/selectors/tokenSelector';
import { setAccountAction } from '~/store/actions/accountActions';
import { ErrorMessage } from '~/components/common/modal/Consent/Consent.styles';

//TODO:Account data fetching and adding to form as value
//TODO:Change subscription date

type ErrorMessage = {
    message: string;
    success: string;
};

export const Account = () => {
    const navigate = useNavigate();
    const dispatch = Dispatch();
    const [isCardUpdate, setIsCardUpdate] = useState<boolean>(false);

    const isAuth = Selector(authSelector);
    const user = Selector(userSelector);
    const token = Selector(tokenSelector);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const UserInfo = {
        name: name || user.name,
        email: email || user.email,
        phoneNumber: phoneNumber || user.phoneNumber,
        password: password || '',
    };

    const formSubmit = async () => {
        const response = await dispatch(
            setAccountAction({ Token: token as string, data: UserInfo }),
        );
        if (response.meta.requestStatus === 'fulfilled') {
            setError('Successfully updated!');
        }
        if (response.meta.requestStatus === 'rejected') {
            if (
                (response.payload as ErrorMessage).message === 'USER_WITH_SUCH_EMAIL_ALREADY_EXISTS'
            ) {
                setError('Sorry, user with that email already exists!');
            }
        }
    };

    const handleEmailBlur = (event: { target: HTMLInputElement }) => {
        if ((event.target as HTMLInputElement).validity.patternMismatch) {
            setError('Not a valid email address!');
        }
    };

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
        }
    }, [isAuth]);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <Main>
            <EclipseOne src="/main/Ellipse3643.svg" />
            <EclipseTwo src="/main/Ellipse3643.svg" />

            <AccountWindow>
                <Title>Account details</Title>
                <Form>
                    <Label>Name</Label>
                    <Input
                        type="text"
                        autoComplete="off"
                        autoCapitalize="off"
                        placeholder={user.name || 'Name'}
                        title="Enter new value to change."
                        min={1}
                        onChange={(event) => {
                            setError('');
                            setName(event.target.value);
                        }}
                    />
                    <Label>Email</Label>
                    <Input
                        type="text"
                        autoComplete="off"
                        autoCapitalize="off"
                        pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$"
                        placeholder={user.email || 'Email'}
                        title={
                            user.method === 'email'
                                ? 'Enter new value to change.'
                                : 'Not available to Google users'
                        }
                        min={1}
                        onChange={(event) => {
                            setError('');
                            setEmail(event.target.value);
                        }}
                        onBlur={handleEmailBlur}
                        disabled={user.method !== 'email'}
                    />
                    <Label>Phone number</Label>
                    <Input
                        type="tel"
                        autoComplete="off"
                        autoCapitalize="off"
                        placeholder={user.phoneNumber || 'Phone number'}
                        title="Enter new value to change."
                        min={1}
                        onChange={(event) => {
                            setError('');
                            setPhoneNumber(event.target.value);
                        }}
                    />
                    <Label>Password</Label>
                    <Input
                        type="password"
                        autoComplete="off"
                        autoCapitalize="off"
                        placeholder={'Password'}
                        title={
                            user.method === 'email'
                                ? 'Enter new value to change.'
                                : 'Not available to Google users'
                        }
                        min={1}
                        onChange={(event) => {
                            setError('');
                            setPassword(event.target.value);
                        }}
                        disabled={user.method !== 'email'}
                    />
                </Form>
                {error && <ErrorMessage style={{ marginTop: '-20px' }}>{error}</ErrorMessage>}
                <ButtonContainer>
                    <SaveButton
                        onClick={formSubmit}
                        disabled={
                            error.length > 0 || (!name && !email && !phoneNumber && !password)
                        }
                    >
                        SAVE
                    </SaveButton>
                </ButtonContainer>
            </AccountWindow>
            {!isCardUpdate ? (
                <PaymentWindow>
                    <BadgeWrap>
                        <Badge>
                            <Text>PRO</Text>
                        </Badge>
                    </BadgeWrap>
                    <PriceTitle>$10 / month</PriceTitle>
                    <Subtitle>Next payment will be processed on {`${'June 6, 2023'}`}</Subtitle>
                    <ButtonWrap>
                        <UpdateButton onClick={() => setIsCardUpdate(true)}>
                            Update payment
                        </UpdateButton>
                    </ButtonWrap>
                    <CancelButton>Cancel subscription</CancelButton>
                </PaymentWindow>
            ) : (
                <PaymentWindow>
                    <BadgeWrap>
                        <Badge>
                            <Text>PRO</Text>
                        </Badge>
                    </BadgeWrap>
                    <PriceTitle>$10 / month</PriceTitle>
                    <Subtitle style={{ marginBottom: '32px' }}>
                        Next payment will be processed on {`${'June 6, 2023'}`}
                    </Subtitle>

                    <PaymentForm>
                        <PaymentInputs />
                        <PaymentSaveButton>SAVE</PaymentSaveButton>
                    </PaymentForm>
                </PaymentWindow>
            )}
        </Main>
    );
};
