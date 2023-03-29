import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function fetchAllContacts() {
  const res = await axios.get(`contacts`);
  return res.data;
}

export async function addContact({ name, number }) {
  const res = await axios.post(`/contacts`, { name, number });
  return res.data;
}

export async function deleteContact(contactId) {
  const res = await axios.delete(`/contacts/${contactId}`);
  return res.data;
}
