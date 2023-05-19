import React, { FC } from 'react';
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

type Props = {
    show: boolean;
};

export const SubscribePayment: FC<Props> = (props) => {
    const { show } = props;

    const { setIsSubscribe, setIsSuccess } = useGlobalContext();

    return createPortal(
        <div>
            <Modal $show={show} />
            <ModalContent $show={show}>
                <Title>Unlock full features</Title>
                <Subtitle>Share or subscribe to continue asking unlimited questions</Subtitle>
                <SubscribePaymentWindow>
                    <ProBadge style={{ marginTop: '48px', marginBottom: '24px' }}>PRO</ProBadge>
                    <WindowTitle style={{ margin: '0' }}>$10 / month</WindowTitle>
                    <PaymentForm>
                        <PaymentInputs />
                        <SubmitButton
                            onClick={(e) => {
                                e.preventDefault();
                                setIsSubscribe(false);
                                setIsSuccess(true);
                            }}
                        >
                            SUBMIT PAYMENT
                        </SubmitButton>
                    </PaymentForm>
                </SubscribePaymentWindow>
            </ModalContent>
        </div>,
        document.getElementById('root') as HTMLElement,
    );
};
