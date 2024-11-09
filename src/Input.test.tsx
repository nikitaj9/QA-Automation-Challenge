import { describe, it } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import React from 'react'
import Input from "./Input";
import '@testing-library/jest-dom';

describe("Input component", function() {
    it("renders without crashing", function() {
        render(<Input />);
        const inputElement = screen.getByTestId('input-field'); // Assuming the input has a role of 'textbox'
        fireEvent.change(inputElement, { target: { value: '123' } });

        expect(inputElement.value).toBe('123');

    });
});
