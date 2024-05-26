const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: 'sk-proj-1x5UUhohszNQ7VkOLJWUT3BlbkFJEf081BOC0Bs9BWN6vndD', // This is the default and can be omitted
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
  console.log(chatCompletion.data.choices[0].text)
}

main();