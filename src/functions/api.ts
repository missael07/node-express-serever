import { Handler } from '@netlify/functions';
import app from '../app';

const handler: Handler = async (event: any, context: any) => {
  return app(event, context);
};

export { handler };