import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import useForm from '../hooks/useForm';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const formHeader = screen.getByText('Checkout Form')

    expect(formHeader).toHaveTextContent('Checkout Form')
});

test("form shows success message on submit with form details", () => {
    const { getByText } = render(<CheckoutForm />)

    const submit = getByText("Checkout Form")

    fireEvent.change(submit, { target: { value: useForm.values } })
    fireEvent.click(getByText("Submit"))

});
