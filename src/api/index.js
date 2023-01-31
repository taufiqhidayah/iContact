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
}