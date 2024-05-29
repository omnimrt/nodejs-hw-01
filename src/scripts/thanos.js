import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);
    const probability = Math.random() >= 0.5;
    contacts = contacts.map((contact) => {
      probability ? contact : null;
    });

    contacts = contacts.filter((contact) => contact !== null);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.log('Error thanos:', error);
  }
};

await thanos();
