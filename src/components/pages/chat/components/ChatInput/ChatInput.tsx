import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Input, InputForm, SubmitButton } from './ChatInput.styles';

import { IoSocket } from '~/services/socketConnect';

import { authSelector } from '~/store/selectors/authSelector';
import { Selector } from '~/store/hooks/redux-hooks';
import { useGlobalContext } from '~/services/Context';

type Message = {
    type: string;
    message: string;
};

type Props = {
    hero: string;
    setQuestion: Dispatch<SetStateAction<Message[]>>;
    messages: Message[];
    setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const ChatInput: FC<Props> = (props) => {
    const { hero, setQuestion, messages, setIsLoading } = props;
    const isAuth = Selector(authSelector);

    const { setIsLoginShow } = useGlobalContext();

    const [message, setMessage] = useState<string>('');

    const onMessageSend = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setIsLoading(true);
        setQuestion([...messages, { type: 'question', message: message }]);
        if (message.trim()) {
            console.log('message sent!');
            IoSocket.emit('hero', {
                hero: hero,
                question: message,
            });
        }
    };

    return (
        <div>
            <InputForm
                id="SubmitForm"
                onClick={(event) => {
                    event.preventDefault();
                }}
            >
                <Input
                    type="text"
                    required
                    min={1}
                    value={message}
                    placeholder="Enter the message..."
                    onChange={(event) => {
                        setMessage(event.target.value);
                    }}
                />
                <SubmitButton
                    onClick={(event) => {
                        if (isAuth) {
                            onMessageSend(event);
                            setMessage('');
                        } else {
                            setIsLoginShow(true);
                        }
                    }}
                >
                    Submit
                </SubmitButton>
            </InputForm>
        </div>
    );
};
