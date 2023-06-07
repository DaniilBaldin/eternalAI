import React, { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal, ProBadge, Subtitle, Title, WindowTitle } from '../../Paywall.styles';
import {
    ModalContent,
    PaymentForm,
    SubmitButton,
    SubscribePaymentWindow,
} from './SubscribePayment.styles';
import { PaymentInputs } from '~/components/common/PaymentInput/PaymentInput';
import { useGlobalContext } from '~/utils/Context';
import { appDispatch, Selector } from '~/store/hooks/redux-hooks';
import { subscribeAction } from '~/store/actions/subscribeActions';
import { tokenSelector } from '~/store/selectors/tokenSelector';
import { ErrorMessage } from '~/components/common/modal/Consent/Consent.styles';
import { useNavigate } from 'react-router-dom';

type Props = {
    show: boolean;
};

type ErrorMessage = {
    message: string;
    success: string;
};

export const SubscribePayment: FC<Props> = (props) => {
    const dispatch = appDispatch();

    const { show } = props;

    const token = Selector(tokenSelector);

    const { setIsSubscribe, setIsSuccess } = useGlobalContext();

    const [cardNumber, setCardNumber] = useState<string>('');
    const [expiryDate, setExpiryDate] = useState<string>('');
    const [CVCNumber, setCVCNumber] = useState<string>('');
    const [error, setError] = useState<string>('');

    const onSubmit = async () => {
        const cardInfo = {
            cardNumber: cardNumber.replaceAll(/\s/g, ''),
            expMonth: parseInt(expiryDate.split('/')[0].replaceAll(/\s/g, '')),
            expYear: parseInt(`20${expiryDate.split('/')[1].replaceAll(/\s/g, '')}`),
            cvc: CVCNumber,
        };

        const response = await dispatch(
            subscribeAction({ Token: token as string, data: cardInfo }),
        );
        if (response.meta.requestStatus === 'fulfilled') {
            setIsSubscribe(false);
            setIsSuccess(true);
        }
        if (response.meta.requestStatus === 'rejected') {
            if ((response.payload as ErrorMessage).message === 'USER_HAS_ALREADY_SUBSCRIBED') {
                setError('Sorry, you are already subscribed!');
            } else {
                setError('Sorry, something went wrong!');
            }
        }
    };

    return createPortal(
        <div>
            <Modal $show={show} />
            <ModalContent $show={show}>
                <Title>Unlock full features</Title>
                <Subtitle>Share or subscribe to continue asking unlimited questions</Subtitle>
                <SubscribePaymentWindow>
                    <ProBadge style={{ marginTop: '48px', marginBottom: '24px' }}>PRO</ProBadge>
                    <WindowTitle style={{ margin: '0' }}>$10 / month</WindowTitle>
                    <PaymentForm tabIndex={0}>
                        <PaymentInputs
                            setCardNumber={setCardNumber}
                            setExpiryDate={setExpiryDate}
                            setCVCNumber={setCVCNumber}
                            setError={setError}
                        />
                        <SubmitButton
                            onClick={(e) => {
                                e.preventDefault();
                                onSubmit();
                            }}
                            disabled={
                                error.length > 0 ||
                                !cardNumber ||
                                !expiryDate ||
                                !CVCNumber ||
                                cardNumber.replaceAll(' ', '').length < 16 ||
                                expiryDate.length < 7 ||
                                CVCNumber.length < 3
                            }
                        >
                            SUBMIT PAYMENT
                        </SubmitButton>
                        {error && (
                            <ErrorMessage style={{ marginTop: '-20px' }}>{error}</ErrorMessage>
                        )}
                    </PaymentForm>
                </SubscribePaymentWindow>
            </ModalContent>
        </div>,
        document.getElementById('root') as HTMLElement,
    );
};
