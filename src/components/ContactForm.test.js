import React from "react";
import ContactForm from "./ContactForm";
import { render, fireEvent } from "@testing-library/react";

// test("firstName, lastName, email, message inputs are rendered", () => {
//     const { getByLabelText } = render(<ContactForm />);
// 	getByLabelText(/first name/i);
// 	getByLabelText(/last name/i);
// 	getByLabelText(/email/i);
// 	getByLabelText(/message/i);
// });

test("all input fields are rendered and functional", () => {
	const {
		getByLabelText,
		getByText,
		getByTestId,
		getByPlaceholderText
	} = render(<ContactForm />);
	const firstNameInput = getByLabelText(/first name/i);
	const lastNameInput = getByLabelText(/last name/i);
	const emailInput = getByLabelText(/email/i);
	const messageInput = getByLabelText(/message/i);

	fireEvent.change(firstNameInput, { target: { value: "Test First Name" } });
	fireEvent.change(lastNameInput, { target: { value: "Test Last Name" } });
	fireEvent.change(emailInput, { target: { value: "Test Email" } });
	fireEvent.change(messageInput, { target: { value: "Test Message" } });

	expect(firstNameInput.value).toBe("Test First Name");
	expect(lastNameInput.value).toBe("Test Last Name");
	expect(emailInput.value).toBe("Test Email");
    expect(messageInput.value).toBe("Test Message");
    
   
    // const emailInput = getByPlaceholderText("bluebill1049@hotmail.com");
    // expect(getByTestId("login-form")).toHaveFormValues({
	// 		placeholder: "bluebill1049@hotmail.com"
    // 	});
    expect(emailInput).toHaveAttribute("placeholder");
    expect(firstNameInput).not.toHaveAttribute("maxLength");
}); 

 // fireEvent.click(getByText(/submit!/i));

// name max length


