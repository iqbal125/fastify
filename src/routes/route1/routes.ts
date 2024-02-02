import { FastifyInstance } from 'fastify';

export default async function routes(fastify: FastifyInstance, opts) {
  fastify.get('/', async () => {
    return { hello: 'world' };
  });

  fastify.post('/', async (req) => {
    console.log(req.body);
    return { status: 'ok' };
  });
}