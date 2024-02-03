import { FastifyInstance } from 'fastify';
import { Prisma, Todo } from '@prisma/client';

export default async function routes(fastify: FastifyInstance) {
  fastify.post<{ Body: Todo }>(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          required: ['title', 'description'],
          properties: {
            title: { type: 'string' },
            description: {
              type: 'string'
            }
          }
        }
      }
    },
    async (req) => {
      const { title, description } = req.body;

      const data: Prisma.TodoCreateInput = {
        title,
        description
      };

      try {
        await fastify.prisma.todo.create({ data });
      } catch (err) {
        throw err;
      }
    }
  );
}
