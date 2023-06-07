import React, { Dispatch, FC, useState } from 'react';
import { PaymentInputs } from '~/components/common/PaymentInput/PaymentInput';
import { appDispatch, Selector } from '~/store/hooks/redux-hooks';
import { updateSubscription } from '~/store/actions/subscribeActions';
import { tokenSelector } from '~/store/selectors/tokenSelector';
import { PaymentForm, PaymentSaveButton } from './paymentForm.styles';
import { ErrorMessage } from '~/components/common/modal/Consent/Consent.styles';

type Props = {
    setIsCardUpdate: Dispatch<React.SetStateAction<boolean>>;
};

export const PaymentFormWindow: FC<Props> = (props) => {
    const dispatch = appDispatch();

    const { setIsCardUpdate } = props;

    const token = Selector(tokenSelector);

    const [cardNumber, setCardNumber] = useState<string>('');
    const [expiryDate, setExpiryDate] = useState<string>('');
    const [CVCNumber, setCVCNumber] = useState<string>('');
    const [error, setError] = useState<string>('');

    const onSubmit = async () => {
        const cardInfo = {
            cardNumber: cardNumber.replaceAll(/\s/g, ''),
            expMonth: parseInt(expiryDate.split('/')[0].replaceAll(/\s/g, '')),
            expYear: parseInt(`20${expiryDate.split('/')[1].replaceAll(/\s/g, '')}`),
            cvc: CVCNumber,
        };

        const response = await dispatch(
            updateSubscription({ Token: token as string, data: cardInfo }),
        );
        if (response.meta.requestStatus === 'fulfilled') {
            setError('Successfully updated!');
            setTimeout(() => {
                setIsCardUpdate(false);
            }, 1000);
        }
        if (response.meta.requestStatus === 'rejected') {
            setError('Sorry. Error occured in updating payment info!');
        }
    };

    return (
        <div>
            <PaymentForm>
                <PaymentInputs
                    setCardNumber={setCardNumber}
                    setExpiryDate={setExpiryDate}
                    setCVCNumber={setCVCNumber}
                    setError={setError}
                />
                <PaymentSaveButton
                    onClick={(e) => {
                        e.preventDefault();
                        onSubmit();
                    }}
                    disabled={
                        error.length > 0 ||
                        !cardNumber ||
                        !expiryDate ||
                        !CVCNumber ||
                        cardNumber.replaceAll(' ', '').length < 16 ||
                        expiryDate.length < 7 ||
                        CVCNumber.length < 3
                    }
                >
                    SAVE
                </PaymentSaveButton>
            </PaymentForm>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
    );
};
