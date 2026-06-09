import {
    render,
    screen,
    fireEvent,
    waitFor
} from "@testing-library/react";

import Signup from "./Signup";

import axios from "axios";

jest.mock("axios");

describe("Signup Component", () => {

    test("renders heading", () => {

        render(<Signup />);

        const heading =
            screen.getByText("Welcome Back");

        expect(heading).toBeInTheDocument();
    });

    test("renders username input", () => {

        render(<Signup />);

        const usernameInput =
            screen.getByPlaceholderText(
                "Enter Username"
            );

        expect(usernameInput)
            .toBeInTheDocument();
    });

    test("renders password input", () => {

        render(<Signup />);

        const passwordInput =
            screen.getByPlaceholderText(
                "Enter Password"
            );

        expect(passwordInput)
            .toBeInTheDocument();
    });

    test("renders login button", () => {

        render(<Signup />);

        const button =
            screen.getByText("Login");

        expect(button)
            .toBeInTheDocument();
    });

    test("updates username input value", () => {

        render(<Signup />);

        const usernameInput =
            screen.getByPlaceholderText(
                "Enter Username"
            );

        fireEvent.change(usernameInput, {
            target: {
                value: "john"
            }
        });

        expect(usernameInput.value)
            .toBe("john");
    });

    test("updates password input value", () => {

        render(<Signup />);

        const passwordInput =
            screen.getByPlaceholderText(
                "Enter Password"
            );

        fireEvent.change(passwordInput, {
            target: {
                value: "12345"
            }
        });

        expect(passwordInput.value)
            .toBe("12345");
    });

    test("calls login api on button click", async () => {

        axios.post.mockResolvedValue({
            data: {}
        });

        render(<Signup />);

        const usernameInput =
            screen.getByPlaceholderText(
                "Enter Username"
            );

        const passwordInput =
            screen.getByPlaceholderText(
                "Enter Password"
            );

        const button =
            screen.getByText("Login");

        fireEvent.change(usernameInput, {
            target: {
                value: "john"
            }
        });

        fireEvent.change(passwordInput, {
            target: {
                value: "12345"
            }
        });

        fireEvent.click(button);

        await waitFor(() => {

            expect(axios.post)
                .toHaveBeenCalled();
        });
    });

});