import {
    render,
    screen,
    fireEvent,
    waitFor
} from "@testing-library/react";

import BuyWindow from "./BuyWindow";

import axios from "axios";

jest.mock("axios");

describe("BuyWindow Component", () => {

    const mockSetShowPopup = jest.fn();

    // Test 1

    test("renders heading correctly", () => {

        render(
            <BuyWindow
                setShowPopup={mockSetShowPopup}
                name="AAPL"
            />
        );

        expect(
            screen.getByText("Buy AAPL")
        ).toBeInTheDocument();
    });

    // Test 2

    test("renders qty input", () => {

        render(
            <BuyWindow
                setShowPopup={mockSetShowPopup}
                name="AAPL"
            />
        );

        const qtyInput =
            screen.getByPlaceholderText("Qty");

        expect(qtyInput)
            .toBeInTheDocument();
    });

    // Test 3

    test("renders price input", () => {

        render(
            <BuyWindow
                setShowPopup={mockSetShowPopup}
                name="AAPL"
            />
        );

        const priceInput =
            screen.getByPlaceholderText("Price");

        expect(priceInput)
            .toBeInTheDocument();
    });

    // Test 4

    test("updates qty input value", () => {

        render(
            <BuyWindow
                setShowPopup={mockSetShowPopup}
                name="AAPL"
            />
        );

        const qtyInput =
            screen.getByPlaceholderText("Qty");

        fireEvent.change(qtyInput, {
            target: {
                value: "10"
            }
        });

        expect(qtyInput.value)
            .toBe("10");
    });

    // Test 5

    test("updates price input value", () => {

        render(
            <BuyWindow
                setShowPopup={mockSetShowPopup}
                name="AAPL"
            />
        );

        const priceInput =
            screen.getByPlaceholderText("Price");

        fireEvent.change(priceInput, {
            target: {
                value: "220"
            }
        });

        expect(priceInput.value)
            .toBe("220");
    });

    // Test 6

    test("calls buy api on button click", async () => {

        axios.post.mockResolvedValue({
            data: {}
        });

        render(
            <BuyWindow
                setShowPopup={mockSetShowPopup}
                name="AAPL"
            />
        );

        const qtyInput =
            screen.getByPlaceholderText("Qty");

        const priceInput =
            screen.getByPlaceholderText("Price");

        fireEvent.change(qtyInput, {
            target: {
                value: "5"
            }
        });

        fireEvent.change(priceInput, {
            target: {
                value: "200"
            }
        });

        const buyButton =
            screen.getByText("Buy Stock");

        fireEvent.click(buyButton);

        await waitFor(() => {

            expect(axios.post)
                .toHaveBeenCalledWith(

                    "http://localhost:8080/addOrders",

                    {
                        qty: "5",
                        price: "200",
                        name: "AAPL",
                        mode: "BUY"
                    }
                );
        });
    });

    // Test 7

    test("closes popup after successful buy", async () => {

        axios.post.mockResolvedValue({
            data: {}
        });

        render(
            <BuyWindow
                setShowPopup={mockSetShowPopup}
                name="AAPL"
            />
        );

        const buyButton =
            screen.getByText("Buy Stock");

        fireEvent.click(buyButton);

        await waitFor(() => {

            expect(mockSetShowPopup)
                .toHaveBeenCalledWith(false);
        });
    });

    // Test 8

    test("closes popup on cancel button click", () => {

        render(
            <BuyWindow
                setShowPopup={mockSetShowPopup}
                name="AAPL"
            />
        );

        const cancelButton =
            screen.getByText("Cancel");

        fireEvent.click(cancelButton);

        expect(mockSetShowPopup)
            .toHaveBeenCalledWith(false);
    });

});