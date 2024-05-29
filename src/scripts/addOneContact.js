// import { fstat } from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const newContact = createFakeContact();
    const newData = [...contacts, newContact];
    fs.writeFile(PATH_DB, JSON.stringify(newData, null, 2), 'utf-8');
    console.log('Successfully added new contact!');
  } catch (error) {
    console.log('Error adding contact:', error);
  }
};

await addOneContact();
