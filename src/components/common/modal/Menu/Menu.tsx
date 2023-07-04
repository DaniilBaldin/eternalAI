import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import {
    Modal,
    ModalContent,
    MenuLink,
    BreakLine,
    Footer,
    Img,
    MenuText,
    LogoutButton,
} from './Menu.styles';

import { useGlobalContext } from '~/services/Context';
import { appDispatch, Selector } from '~/store/hooks/redux-hooks';
import { logOut } from '~/store/reducers/authReducer';
import { authSelector } from '~/store/selectors/authSelector';
import { useNavigate } from 'react-router-dom';
import { IoSocket } from '~/services/socketConnect';

type Props = {
    isShow: boolean;
    onClose: () => void;
};

export const MenuModal: FC<Props> = (props) => {
    const dispatch = appDispatch();
    const navigate = useNavigate();

    const { isShow, onClose } = props;

    const { setIsPricing } = useGlobalContext();
    const isAuth = Selector(authSelector);

    const account = 'account';

    const onCloseHandler = () => {
        onClose();
    };

    return createPortal(
        <div>
            <Modal onClick={onCloseHandler} $show={isShow} />
            <ModalContent $show={isShow} onClick={(e) => e.stopPropagation()}>
                <MenuText style={{ marginTop: '20px' }}>About Us</MenuText>
                <MenuText
                    onClick={() => {
                        setIsPricing(true);
                        // onClose();
                    }}
                    tabIndex={1}
                >
                    Pricing
                </MenuText>
                <MenuText aria-disabled={true}>How it Works</MenuText>
                {isAuth && (
                    <MenuLink to="/account" onClick={onCloseHandler} hidden={!account} tabIndex={1}>
                        My Account
                    </MenuLink>
                )}
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
                {isAuth && (
                    <LogoutButton
                        onClick={() => {
                            IoSocket.disconnect();
                            dispatch(logOut());
                            navigate('/');
                        }}
                    >
                        Sign out
                    </LogoutButton>
                )}
            </ModalContent>
        </div>,
        document.getElementById('root') as HTMLElement,
    );
};
