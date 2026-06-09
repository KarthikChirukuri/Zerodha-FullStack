import {
    render,
    screen,
    fireEvent,
    waitFor
} from "@testing-library/react";

import LiveMarket from "./LiveMarket";

import axios from "axios";

jest.mock("axios");

describe("LiveMarket Component", () => {

    // Test 1

    test("renders heading", () => {

        render(<LiveMarket />);

        const heading =
            screen.getByText("Live Market");

        expect(heading)
            .toBeInTheDocument();
    });

    // Test 2

    test("renders input field", () => {

        render(<LiveMarket />);

        const input =
            screen.getByPlaceholderText(
                "Enter Stock Symbol (AAPL, TSLA, MSFT)"
            );

        expect(input)
            .toBeInTheDocument();
    });

    // Test 3

    test("renders search button", () => {

        render(<LiveMarket />);

        const button =
            screen.getByText("Search");

        expect(button)
            .toBeInTheDocument();
    });

    // Test 4

    test("updates input value", () => {

        render(<LiveMarket />);

        const input =
            screen.getByPlaceholderText(
                "Enter Stock Symbol (AAPL, TSLA, MSFT)"
            );

        fireEvent.change(input, {
            target: {
                value: "AAPL"
            }
        });

        expect(input.value)
            .toBe("AAPL");
    });

    // Test 5

    test("calls alert if input is empty", () => {

        window.alert = jest.fn();

        render(<LiveMarket />);

        const button =
            screen.getByText("Search");

        fireEvent.click(button);

        expect(window.alert)
            .toHaveBeenCalledWith(
                "Please Enter Stock Symbol"
            );
    });

    // Test 6

    test("calls stock api on search", async () => {

        axios.get.mockResolvedValue({

            data: {

                "Global Quote": {

                    "01. symbol": "AAPL",

                    "05. price": "220.50",

                    "09. change": "3.20",

                    "10. change percent": "1.40%"
                }
            }
        });

        render(<LiveMarket />);

        const input =
            screen.getByPlaceholderText(
                "Enter Stock Symbol (AAPL, TSLA, MSFT)"
            );

        const button =
            screen.getByText("Search");

        fireEvent.change(input, {
            target: {
                value: "AAPL"
            }
        });

        fireEvent.click(button);

        await waitFor(() => {

            expect(axios.get)
                .toHaveBeenCalled();
        });
    });

    // Test 7

    test("displays stock data after api success", async () => {

        axios.get.mockResolvedValue({

            data: {

                "Global Quote": {

                    "01. symbol": "AAPL",

                    "05. price": "220.50",

                    "09. change": "3.20",

                    "10. change percent": "1.40%"
                }
            }
        });

        render(<LiveMarket />);

        const input =
            screen.getByPlaceholderText(
                "Enter Stock Symbol (AAPL, TSLA, MSFT)"
            );

        const button =
            screen.getByText("Search");

        fireEvent.change(input, {
            target: {
                value: "AAPL"
            }
        });

        fireEvent.click(button);

        await waitFor(() => {

            expect(
                screen.getByText("AAPL")
            ).toBeInTheDocument();

            expect(
                screen.getByText("$220.50")
            ).toBeInTheDocument();
        });
    });

});