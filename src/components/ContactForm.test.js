import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders contact form without crashing', () => {
	render(<ContactForm />);
});

test('all inputs render on form', () => {
	// arrange
	const { getByLabelText } = render(<ContactForm />);

	//act and assert
	getByLabelText(/first name/i);
	getByLabelText(/last name/i);
	getByLabelText(/email/i);
	getByLabelText(/message/i);
});

test('form submit takes info from inputs', () => {
	// arrange
	const { getByLabelText, getByText } = render(<ContactForm />);

	// getting the inputs to store into vars
	const fnInput = getByLabelText(/first name/i);
	const lnInput = getByLabelText(/last name/i);
	const emailInput = getByLabelText(/email/i);
	const messageInput = getByLabelText(/message/i);

	// on change, add a value to an input
	fireEvent.change(fnInput, { target: { value: 'Test First Name' } });
	fireEvent.change(lnInput, { target: { value: 'Test Last Name' } });
	fireEvent.change(emailInput, { target: { value: 'Test@Test.com' } });
	fireEvent.change(messageInput, { target: { value: 'Test Message' } });

	// expect the inputs to change their values
	expect(fnInput.value).toBe('Test First Name');
	expect(lnInput.value).toBe('Test Last Name');
	expect(emailInput.value).toBe('Test@Test.com');
	expect(messageInput.value).toBe('Test Message');

	// click on the submit

	fireEvent.click(getByText(/submit/i));
});

// test('name max length should be 18 chars long', () => {
// 	// arrange
// 	const { getByLabelText, getByText } = render(<ContactForm />);
// 	const fnInput = getByLabelText(/first name/i);
// 	const errorText = getByText(/Looks like there was an error: required/i);

// 	// act
// 	// fireEvent.focus(fnInput);
// 	// fireEvent.blur(fnInput);
// 	fnInput.focus();
// 	fnInput.blur();

// 	//assert
// 	expect(errorText).toBeInTheDocument();
// });

// test('placeholder text renders', () => {
//     const { getByPlaceholderText } = render(<ContactForm />);
//     const

// })
