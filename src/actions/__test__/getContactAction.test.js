import { fetchContact, fetchContactScreenApi, fetchContactScreenRequestsDone, fetchContactScreenRequestsError } from '../getContactAction';
import ContactApi from '../../api';

jest.mock('../../api', () => {
  return jest.fn().mockImplementation(() => {
    return {
      homeScreenApi: jest.fn().mockResolvedValue({})
    }
  });
});

describe('fetchContact action', () => {
  let dispatch;
  let contactApi;

  beforeEach(() => {
    contactApi = new ContactApi();
    dispatch = jest.fn();
  });

  it('dispatches the correct action on success', async () => {
    const params = {};
    await fetchContact(params)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(fetchContactScreenApi());
    expect(dispatch).toHaveBeenCalledWith(fetchContactScreenRequestsDone({}));
  });

});