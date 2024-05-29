import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    let newContacts = [];
    for (let i = 0; i < number; i += 1) {
      newContacts.push(createFakeContact());
    }

    const newData = [...contacts, ...newContacts];

    fs.writeFile(PATH_DB, JSON.stringify(newData, null, 2), 'utf-8');

    console.log(`Successfully generated ${number} new contacts!`);
  } catch (error) {
    console.log('Error generating contacts:', error);
  }
};

await generateContacts(5);
