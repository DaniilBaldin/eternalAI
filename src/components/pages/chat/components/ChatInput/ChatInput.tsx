import React from 'react';
import { Input, InputForm, SubmitButton } from './ChatInput.styles';

export const ChatInput = () => {
    return (
        <div>
            <InputForm
                id="SubmitForm"
                onClick={(event) => {
                    event.preventDefault();
                }}
            >
                <Input type="text" required min={1} placeholder="Enter the message..." />
                <SubmitButton>Submit</SubmitButton>
            </InputForm>
        </div>
    );
};
