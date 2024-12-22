'use server'

import { promises as fs } from 'fs';

export const rate = async (email:string,rating: number) => {
    try {
        const file = await fs.readFile(process.cwd() + '/actions/data.json', 'utf-8');
        const files = JSON.parse(file);
         await fs.writeFile(process.cwd() + '/actions/data.json', JSON.stringify([...files,{emial:email,rating:rating}]),'utf8');

       

    } catch (err) {
        console.error('Error writing file:', err);
    }
}
