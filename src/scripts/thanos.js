import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);

    contacts = contacts.filter(() => Math.random() >= 0.5);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('Thanos removed half of the contacts!');
  } catch (error) {
    console.log('Thanos is confused', error);
  }
};

await thanos();
