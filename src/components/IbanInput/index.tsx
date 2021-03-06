import React from 'react';
import { IBAN } from '../../types/iban';
import { addSpaces, removeSpaces } from '../../utils/format';

interface IIbanInputProps {
    initialIban?: IBAN;
    inputStyle?: React.CSSProperties;
    placeholder?: string;
}

const IbanInput = ({ initialIban = '', inputStyle = {}, placeholder }: IIbanInputProps): React.ReactElement => {
    const [iban, setIban] = React.useState<IBAN>(initialIban);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const i = removeSpaces(event.target.value);
        console.log('iban:', i);
        setIban(i);
    };

    return <input size={27} value={addSpaces(iban)} onChange={handleInputChange} style={inputStyle} placeholder={placeholder} />;
};

export default IbanInput;
