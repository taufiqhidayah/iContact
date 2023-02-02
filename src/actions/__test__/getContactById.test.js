import { fetchContactIdById, FETCH_CONTACTS_ID_REQUEST_START, FETCH_CONTACTS_ID_REQUEST_DONE, FETCH_CONTACTS_ID_REQUEST_ERROR, fetchContactIdScreenApi, fetchContactIdScreenRequestsDone } from '../getContactByIdAction';
import ContactApi from '../../api';

jest.mock('../../api', () => {
    return jest.fn().mockImplementation(() => {
        return {
            homeScreenApi: jest.fn().mockResolvedValue({})
        }
    });
});

describe('fetchContactById action', () => {
    let dispatch;
    const contactApi = new ContactApi();

    beforeEach(() => {

        dispatch = jest.fn();
    });

    it('dispatches the correct action on success', async () => {
        const params = '1';
        await fetchContactIdById(params)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(fetchContactIdById());
        expect(dispatch).toHaveBeenCalledWith(fetchContactIdScreenRequestsDone({}));
    });

});