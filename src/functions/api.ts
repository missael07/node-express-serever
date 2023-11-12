// src/functions/api.ts
const handler = async (event, context) => {
  try {
    const data = { message: '¡Hola, mundo!' };
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal Server Error' }) };
  }
};

export { handler };