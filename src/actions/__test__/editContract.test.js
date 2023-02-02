import { updateContact, updateContactScreenApi, updateContactScreenRequestsDone, updateContactScreenRequestsError, UPDATE_CONTACTS_REQUEST_DONE, UPDATE_CONTACTS_REQUEST_ERROR, UPDATE_CONTACTS_REQUEST_START } from '../editContactAction';
import ContactApi from '../../api';

const contactApi = new ContactApi();
jest.mock('../../api', () => {
    return jest.fn().mockImplementation(() => {
        return {
            updateContactApi: jest.fn().mockResolvedValue({})
        }
    });
});


describe("updateContact action creator", () => {
    it("dispatches UPDATE_CONTACTS_REQUEST_START", () => {
        const dispatch = jest.fn();
        const params = {};
        const body = {};
        updateContact(params, body)(dispatch);
        expect(dispatch).toHaveBeenCalledWith({ type: UPDATE_CONTACTS_REQUEST_START });
    });

    it("dispatches UPDATE_CONTACTS_REQUEST_DONE on success", async () => {
        const dispatch = jest.fn();
        const params = {};
        const body = {};
        const responseData = {};
        const updateContactApi = jest.fn().mockResolvedValue(responseData);
        ContactApi.prototype.updateContactApi = updateContactApi;
        await updateContact(params, body)(dispatch);
        expect(dispatch).toHaveBeenCalledWith({ type: UPDATE_CONTACTS_REQUEST_DONE, data: responseData });
    });
});