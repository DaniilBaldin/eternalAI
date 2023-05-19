import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from '../../Paywall.styles';
import {
    ModalContent,
    Subtitle,
    SuccessBadge,
    SuccessPaymentWindow,
    Title,
    SuccessButton,
} from './SubscribeSuccess.styles';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '~/utils/Context';

type Props = {
    show: boolean;
};

export const SubscribeSuccess: FC<Props> = (props) => {
    const { show } = props;
    const navigate = useNavigate();
    const { setIsSuccess } = useGlobalContext();

    return createPortal(
        <div>
            <Modal $show={show} />
            <ModalContent $show={show}>
                <SuccessPaymentWindow>
                    <SuccessBadge>
                        <img src="/Check-Big.svg" alt="Check" />
                    </SuccessBadge>
                    <Title>You have successfully subscribed!</Title>
                    <Subtitle>A receipt was sent to your email</Subtitle>
                    <SuccessButton
                        onClick={() => {
                            setIsSuccess(false);
                            navigate('/a');
                        }}
                    >
                        START CHATTING
                    </SuccessButton>
                </SuccessPaymentWindow>
            </ModalContent>
        </div>,
        document.getElementById('root') as HTMLElement,
    );
};
