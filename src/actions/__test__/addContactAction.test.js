import { render, fireEvent, waitFor } from "@testing-library/react-native";
import ContactApi from "../../api";
import { addContact, ADD_CONTACTS_REQUEST_START, ADD_CONTACTS_REQUEST_DONE, ADD_CONTACTS_REQUEST_ERROR } from "../addContactAction";

jest.mock("../../api", () => {
    return jest.fn().mockImplementation(() => {
        return {
            addContactApi: jest.fn().mockResolvedValue({ data: "Contact added" }),
        };
    });
});

describe("addContact action creator", () => {
    it("dispatches ADD_CONTACTS_REQUEST_START and ADD_CONTACTS_REQUEST_DONE actions", async () => {
        const mockDispatch = jest.fn();
        const params = { name: "John Doe", email: "johndoe@example.com" };
        const result = addContact(params)(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith({ type: ADD_CONTACTS_REQUEST_START });

        await waitFor(() => {
            expect(mockDispatch).toHaveBeenCalledWith({ type: ADD_CONTACTS_REQUEST_DONE, data: { data: "Contact added" } });
        });
    });

    it("dispatches ADD_CONTACTS_REQUEST_START and ADD_CONTACTS_REQUEST_ERROR actions", async () => {
        const error = new Error("Something went wrong");
        ContactApi.mockImplementationOnce(() => {
            return {
                addContactApi: jest.fn().mockRejectedValue(error),
            };
        });
        const mockDispatch = jest.fn();
        const params = { name: "John Doe", email: "johndoe@example.com" };
        const result = addContact(params)(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith({ type: ADD_CONTACTS_REQUEST_START });
    });
});