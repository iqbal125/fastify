import { FastifyInstance } from 'fastify';

export default async function routes(fastify: FastifyInstance) {
  fastify.post(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          required: ['testRequired'],
          properties: {
            test: { type: 'string' },
            testRequired: {
              type: 'string'
            }
          }
        },
        response: {
          '2xx': {
            description: 'Successful response',
            type: 'object',
            properties: {
              status: { type: 'string' }
            }
          }
        }
      }
    },
    async (req) => {
      console.log(req.body);
      return { status: 'success' };
    }
  );
}
