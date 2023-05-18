import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import { Modal, ModalContent, MenuLink, BreakLine, Footer, Img } from './Menu.styles';

type Props = {
    isShow: boolean;
    onClose: () => void;
};

export const MenuModal: FC<Props> = (props) => {
    const { isShow, onClose } = props;

    const account = 'account';

    const onCloseHandler = () => {
        onClose();
    };

    return createPortal(
        <div>
            <Modal onClick={onCloseHandler} $show={isShow} />
            <ModalContent $show={isShow} onClick={(e) => e.stopPropagation()}>
                <MenuLink to="/about" style={{ marginTop: '20px' }} onClick={onCloseHandler}>
                    About Us
                </MenuLink>
                <MenuLink to="/pricing" onClick={onCloseHandler}>
                    Pricing
                </MenuLink>
                <MenuLink to="/how-it-works" onClick={onCloseHandler}>
                    How it Works
                </MenuLink>
                <MenuLink to="/account" onClick={onCloseHandler} hidden={!account}>
                    My Account
                </MenuLink>
                <BreakLine />
                <Footer>
                    <a href="https://facebook.com/eternalai" target="_blank" rel="noreferrer">
                        <Img
                            src="/footer/Facebook.svg"
                            alt="Facebook"
                            style={{ marginLeft: '0px' }}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/talktoheroes/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Img src="/footer/Instagram.svg" alt="Instagram" />
                    </a>
                    <a href="https://twitter.com/talktoheroes" target="_blank" rel="noreferrer">
                        <Img src="/footer/Twitter.svg" alt="Twitter" />
                    </a>
                    <a href="https://www.youtube.com/@eternalai " target="_blank" rel="noreferrer">
                        <Img src="/footer/Youtube.svg" alt="Youtube" />
                    </a>
                </Footer>
            </ModalContent>
        </div>,
        document.getElementById('root') as HTMLElement,
    );
};
