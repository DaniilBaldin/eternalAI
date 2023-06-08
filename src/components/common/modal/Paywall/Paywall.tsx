import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import {
    Modal,
    ModalContent,
    Title,
    Subtitle,
    WindowsWrapper,
    ShareWindow,
    SubscribeWindow,
    FreeBadge,
    WindowTitle,
    WindowSubtitle,
    WindowSubtitlePink,
    ShareButton,
    ProBadge,
    TextWrap,
    Text,
    SubscribeButton,
} from './Paywall.styles';
import { useGlobalContext } from '~/utils/Context';
import { Selector } from '~/store/hooks/redux-hooks';
import { subscribeSelector } from '~/store/selectors/subscribeSelector';

type Props = {
    show: boolean;
    onClose: () => void;
};

export const PaywallModal: FC<Props> = (props) => {
    const { show } = props;

    const isSubscribed = Selector(subscribeSelector);

    const { setIsSubscribe, setIsPricing } = useGlobalContext();

    return createPortal(
        <div>
            <Modal $show={show} />
            <ModalContent $show={show}>
                <Title>Unlock full features</Title>
                <Subtitle>Share or subscribe to continue asking unlimited questions</Subtitle>
                <WindowsWrapper>
                    <ShareWindow>
                        <FreeBadge>Free</FreeBadge>
                        <WindowTitle>Share with a friend</WindowTitle>
                        <WindowSubtitle>
                            Get&nbsp;
                            <WindowSubtitlePink>3 free</WindowSubtitlePink> questions when you share
                            on social media
                        </WindowSubtitle>
                        <ShareButton
                            onClick={() => {
                                navigator.clipboard.writeText('https://eternal-ai.vercel.app/');
                                alert('Link copied to clipbard');
                            }}
                        >
                            share
                        </ShareButton>
                    </ShareWindow>
                    <SubscribeWindow>
                        <ProBadge>PRO</ProBadge>
                        <WindowTitle>$10 / month</WindowTitle>
                        <div style={{ margin: '0', marginTop: '20px' }}>
                            <TextWrap>
                                <img src="/Check.svg" alt="Check" />
                                <Text>Unlimited questions</Text>
                            </TextWrap>
                            <TextWrap>
                                <img src="/Check.svg" alt="Check" />
                                <Text>SMS texting</Text>
                            </TextWrap>
                            <TextWrap>
                                <img src="/Check.svg" alt="Check" />
                                <Text>Access to all characters</Text>
                            </TextWrap>
                        </div>
                        <SubscribeButton
                            onClick={() => {
                                setIsSubscribe(true);
                                setIsPricing(false);
                            }}
                            disabled={isSubscribed}
                        >
                            SUBSCRIBE
                        </SubscribeButton>
                    </SubscribeWindow>
                </WindowsWrapper>
            </ModalContent>
        </div>,
        document.getElementById('root') as HTMLElement,
    );
};
