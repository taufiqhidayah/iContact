import ContactApi from '../index';

describe('ContactApi', () => {
    const api = new ContactApi();
    const mockFetch = (data) => jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(data),
    }));

    beforeEach(() => {
        global.fetch = mockFetch({});
    });

    afterEach(() => {
        global.fetch.mockClear();
    });

    it('homeScreenApi', async () => {
        const data = {};
        global.fetch = mockFetch(data);
        const result = await api.homeScreenApi();
        expect(result).toEqual(data);
        expect(global.fetch).toHaveBeenCalledWith('https://contact.herokuapp.com/contact', expect.any(Object));
    });

    it('addContactApi', async () => {
        const data = { firstName: 'John', lastName: 'Doe', age: 30 };
        const result = await api.addContactApi(data);
        expect(global.fetch).toHaveBeenCalledWith(
            'https://contact.herokuapp.com/contact',
            expect.objectContaining({
                method: 'POST',
                headers: expect.objectContaining({
                    'Content-Type': 'application/json',
                    'Accept': "application/json",
                }),
                body: JSON.stringify({
                    firstName: 'John',
                    lastName: 'Doe',
                    age: 30,
                }),
            }),
        );
    });

    it('getContactByIdApi', async () => {
        const param = 1;
        const data = {};
        global.fetch = mockFetch(data);
        const result = await api.getContactByIdApi(param);
        expect(result).toEqual(data);
        expect(global.fetch).toHaveBeenCalledWith(
            'https://contact.herokuapp.com/contact/1',
            expect.any(Object),
        );
    });

    it('updateContactApi', async () => {
        const param = 1;
        const data = { firstName: 'John', lastName: 'Doe', age: 30 };
        const result = await api.updateContactApi(param, data);
        expect(global.fetch).toHaveBeenCalledWith(
            'https://contact.herokuapp.com/contact/1',
            expect.objectContaining({
                method: 'PUT',
                headers: expect.objectContaining({
                    'Content-Type': 'application/json',
                    'Accept': "application/json",
                }),
                body: JSON.stringify({
                    firstName: 'John',
                    lastName: 'Doe',
                    age: 30,
                }),
            }),
        );
    });

    it('deleteContactApi', async () => {
        const param = 1;
        const result = await api.deleteContactApi(param);
        expect(global.fetch).toHaveBeenCalledWith(
            'https://contact.herokuapp.com/contact/1',
            expect.objectContaining({
                method: 'DELETE',
            }),
        );
    });
});

