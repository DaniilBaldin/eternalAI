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
import { useGlobalContext } from '~/services/Context';
import { appDispatch, Selector } from '~/store/hooks/redux-hooks';
import { tokenSelector } from '~/store/selectors/tokenSelector';
import { getAccountAction } from '~/store/actions/accountActions';

type Props = {
    show: boolean;
    onClose: () => void;
};

export const SubscribeSuccess: FC<Props> = (props) => {
    const dispatch = appDispatch();
    const navigate = useNavigate();

    const { show, onClose } = props;
    const { setIsSuccess } = useGlobalContext();

    const token = Selector(tokenSelector);

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
                        onClick={async () => {
                            await dispatch(getAccountAction(token as string));
                            setIsSuccess(false);
                            onClose();
                            navigate('/');
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
