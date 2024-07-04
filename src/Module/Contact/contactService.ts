import { Contact, TContact } from "./conatctInterface";

const createContact = async (payload: TContact) => {
  const result = await Contact.create(payload);
  return result;
};

const getContact = async () => {
  const result = await Contact.find();
  return result;
};

export const contactService = {
  createContact,
  getContact,
};
