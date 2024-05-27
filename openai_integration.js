import fs from 'fs/promises';
import OpenAI from "openai";
import {} from 'dotenv/config';
//const fs = require('fs');
const openai = new OpenAI({
    apiKey: process.env.API_KEY
});
async function main() {
  try {
    const systemMsgContent = await fs.readFile('system_context.txt', 'utf-8');
    const userMsgContent = await fs.readFile('user_input.txt', 'utf-8');
    const completion = await openai.chat.completions.create({
        messages: [{ 
            role: "system", 
            content: systemMsgContent
        },
        {
            role: "user", 
            content: userMsgContent
        }],
        model: "gpt-4o",
      });
      //console.log(completion.choices[0].message.content);
      const responseContent = completion.choices[0].message.content;
      await fs.writeFile('training_program.txt', responseContent, 'utf-8');

  } catch (error) {
    console.error('Error al leer el archivo o hacer la llamada a la API', error);
  }  
  
}
main();