import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';

export default function Input() {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        const onlyNumbersRegex = /^[0-9]+$/;

        if (onlyNumbersRegex.test(input) && input.length <= 10) {
            setInputValue(input);
        } else {
            setInputValue(''); // Clear the input if it doesn't match the regex or exceeds the length
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                maxLength={10}
                data-testid="input-field"
            />
        </div>
    );
}