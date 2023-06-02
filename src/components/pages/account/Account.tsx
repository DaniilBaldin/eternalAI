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
import { Selector } from '~/store/hooks/redux-hooks';
import { authSelector } from '~/store/selectors/authSelector';
import { useNavigate } from 'react-router-dom';
import { userSelector } from '~/store/selectors/userSelector';

//TODO:Account data fetching and adding to form as value
//TODO:Change subscription date

export const Account = () => {
    const navigate = useNavigate();
    const [isCardUpdate, setIsCardUpdate] = useState<boolean>(false);

    const isAuth = Selector(authSelector);
    const user = Selector(userSelector);
    console.log(user);

    useEffect(() => {
        if (!isAuth) {
            navigate('/');
        }
    }, [isAuth]);

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
                    />
                    <Label>Email</Label>
                    <Input
                        type="email"
                        autoComplete="off"
                        autoCapitalize="off"
                        placeholder={user.email || 'Email'}
                        title="Enter new value to change."
                        min={1}
                    />
                    <Label>Phone number</Label>
                    <Input
                        type="tel"
                        autoComplete="off"
                        autoCapitalize="off"
                        placeholder={user.phoneNumber || 'Phone number'}
                        title="Enter new value to change."
                        min={1}
                    />
                    <Label>Password</Label>
                    <Input
                        type="password"
                        autoComplete="off"
                        autoCapitalize="off"
                        placeholder={'Password'}
                        title="Enter new value to change."
                        min={1}
                    />
                </Form>
                <ButtonContainer>
                    <SaveButton>SAVE</SaveButton>
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
