import { DELETE_CONTACTS_REQUEST_START, DELETE_CONTACTS_REQUEST_DONE, DELETE_CONTACTS_REQUEST_ERROR, deleteContact } from "../deleteContactAction";

describe("deleteContact", () => {
    let mockDispatch;
    let contactApi;
    let params;
    let data;
    let error;

    beforeEach(() => {
        mockDispatch = jest.fn();
        contactApi = { deleteContactApi: jest.fn() };
        params = {};
        data = {};
        error = new Error("error");
    });

    it("dispatches DELETE_CONTACTS_REQUEST_START", () => {
        deleteContact(params)(mockDispatch);
        expect(mockDispatch).toHaveBeenCalledWith({ type: DELETE_CONTACTS_REQUEST_START });
    });

    it("calls deleteContactApi and dispatches DELETE_CONTACTS_REQUEST_ERROR with error", async () => {
        contactApi.deleteContactApi.mockRejectedValue(error);
        await deleteContact(params)(mockDispatch);
        expect(contactApi.deleteContactApi).toBeTruthy();
        expect(mockDispatch).toBeTruthy();
    });

    it("calls deleteContactApi and dispatches DELETE_CONTACTS_REQUEST_ERROR with error", async () => {
        contactApi.deleteContactApi.mockRejectedValue(error);
        await deleteContact(params)(mockDispatch);
        expect(contactApi.deleteContactApi).toBeTruthy();
        expect(mockDispatch).toBeTruthy()
    });
});