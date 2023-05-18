import React, { FormEvent, useState } from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';

import { images } from '~/utils/images';
import { css } from 'styled-components';

export const PaymentInputs = () => {
    const { wrapperProps, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps } =
        usePaymentInputs();

    const [value, setValue] = useState<string>('');
    console.log(value);

    return (
        <PaymentInputsWrapper
            {...wrapperProps}
            styles={{
                fieldWrapper: {
                    base: css`
                        /* margin-top: 1rem; */
                    `,
                    errored: css`
                        border-color: transparent;
                    `,
                },
                inputWrapper: {
                    base: css`
                        width: 529px;
                        height: 62px;
                        border-color: unset;
                        box-shadow: unset;
                        outline: 1px solid #ffffff;
                        /* outline: none; */
                        background: #060608;
                        border-radius: 16px;
                        margin: 0px;
                    `,
                    errored: css`
                        border-color: maroon;
                    `,
                    focused: css`
                        border-color: unset;
                        box-shadow: unset;
                        outline: 1px solid #f82d98;
                        outline-offset: 2px;

                        /* background: transparent;
                        background-image: transparent; */
                    `,
                },
                input: {
                    base: css`
                        color: #ffffff;
                    `,
                    errored: css`
                        color: maroon;
                    `,
                    cardNumber: css`
                        width: 25rem;
                        background: #060608;
                    `,
                    expiryDate: css`
                        width: 4rem;
                        background: #060608;
                    `,
                    cvc: css`
                        width: 3rem;
                        background: #060608;
                    `,
                },
                errorText: {
                    base: css`
                        color: maroon;
                    `,
                },
            }}
        >
            <svg {...getCardImageProps({ images })} />
            <input
                {...getCardNumberProps({
                    onChange: (e: FormEvent<HTMLInputElement>) => {
                        // if (onChange) onChange(e);
                        setValue(e.currentTarget.value);
                    },
                    // onBlur: () => setFocused(false),
                    // onFocus: () => setFocused(true),
                })}
                // onChange={(e) => {
                //     setValue(e.currentTarget.value);
                // }}
            />
            <input {...getExpiryDateProps()} />
            <input {...getCVCProps()} />
        </PaymentInputsWrapper>
    );
};
