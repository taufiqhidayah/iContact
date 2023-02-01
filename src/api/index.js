export default class ContactApi {
  homeScreenApi = async () => {
    const BASE_API = 'https://contact.herokuapp.com/';
    try {
      const getData = await fetch(`${BASE_API}contact`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': "application/json",
        }
        // body: JSON.stringify(data),
      });
      const response = await getData.json();
      return response
    } catch (error) {
      throw new Error(error);
    }
  }
  addContactApi = async (data) => {
    const BASE_API = 'https://contact.herokuapp.com/';
    try {
      const bodyPost = {
        firstName: data.firstName,
        lastName: data.lastName,
        age: parseInt(data.age),
        ...(data.photo && { photo: data.photo })
      };
      const response = await fetch(`${BASE_API}contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': "application/json",
        },
        body: JSON.stringify(bodyPost),
      });
      return response
    } catch (error) {
      throw new Error(error);
    }
  }
}