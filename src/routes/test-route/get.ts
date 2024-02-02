import { FastifyInstance } from 'fastify';

export default async function routes(fastify: FastifyInstance) {
  fastify.get(
    '/',
    {
      schema: {
        response: {
          '2xx': {
            description: 'Successful response',
            type: 'object',
            properties: {
              hello: { type: 'string' }
            }
          }
        }
      }
    },
    async () => {
      return { hello: 'world' };
    }
  );
}
