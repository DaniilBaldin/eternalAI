import React, { FC } from 'react';
import { Modal, ModalContent } from './Signup.styles';
import { createPortal } from 'react-dom';

type Props = {
    show: boolean;
    onClose: () => void;
};

export const SignUpModal: FC<Props> = (props) => {
    const { show, onClose } = props;

    console.log(show);

    return createPortal(
        <div>
            <Modal $show={show} onClick={onClose} />
            <ModalContent $show={show}>
                <p>Signup</p>
            </ModalContent>
        </div>,
        document.getElementById('root') as HTMLElement,
    );
};
