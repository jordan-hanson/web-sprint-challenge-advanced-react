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

// Test fails, wanting to update values with a state
test("form shows success message on submit with form details", async () => {
    // const { getByText } = render(<CheckoutForm />)

    // const submit = getByText("Checkout Form")

    const { getByLabelText, getByRole } = render(<CheckoutForm />);

    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const address = getByLabelText(/address/i);
    const city = getByLabelText(/city/i);
    const state = getByLabelText(/state/i);
    const zip = getByLabelText(/zip/i);
    const button = getByRole("button", { name: /checkout/i });

    fireEvent.change(firstName, {
        target: { name: "firstName", value: values.firstName },
    });

    fireEvent.change(lastName, {
        target: { name: "lastName", value: values.lastName },
    });

    fireEvent.change(address, {
        target: { name: "address", value: values.address },
    });

    fireEvent.change(city, {
        target: { name: "city", value: values.city },
    });

    fireEvent.change(state, {
        target: { name: "state", value: values.state },
    });

    fireEvent.change(zip, {
        target: { name: "zip", value: values.zip },
    });

    fireEvent.click(button);

    const congrats = await screen.findByText(/woo-hoo/i);

});

test("form shows success message on submit with form details", async () => {

    const { getByLabelText, getByRole } = render(<CheckoutForm />);

    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const address = getByLabelText(/address/i);
    const city = getByLabelText(/city/i);
    const state = getByLabelText(/state/i);
    const zip = getByLabelText(/zip/i);
    const button = getByRole("button", { name: /checkout/i });

    fireEvent.change(firstName, {
        target: { name: "firstName", value: "Jordan" },
    });

    fireEvent.change(lastName, {
        target: { name: "lastName", value: "Hanson" },
    });

    fireEvent.change(address, {
        target: { name: "address", value: "296 N Rabbit Road" },
    });

    fireEvent.change(city, {
        target: { name: "city", value: "Arlington" },
    });

    fireEvent.change(state, {
        target: { name: "state", value: "Texas" },
    });

    fireEvent.change(zip, {
        target: { name: "zip", value: "92771" },
    });

    fireEvent.click(button);

    const congrats = await screen.findByText(/woo-hoo/i);
});
