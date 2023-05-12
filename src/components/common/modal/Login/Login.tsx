import React, { FC } from 'react';
import { Modal, ModalContent } from './Login.styles';
import { createPortal } from 'react-dom';

type Props = {
    show: boolean;
    onClose: () => void;
};

export const LoginModal: FC<Props> = (props) => {
    const { show, onClose } = props;

    const onCloseHandler = () => {
        onClose();
    };

    return createPortal(
        <div>
            <Modal $show={show} onClick={onCloseHandler} />
            <ModalContent $show={show}>
                <p>Login</p>
            </ModalContent>
        </div>,
        document.getElementById('root') as HTMLElement,
    );
};
