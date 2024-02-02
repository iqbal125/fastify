import { JSONSchemaType } from 'env-schema';
import { FastifyEnvOptions } from '@fastify/env';
import dotenv from 'dotenv';
dotenv.config();

interface Env {
  PORT: number;
}

const schema: JSONSchemaType<Env> = {
  type: 'object',
  required: ['PORT'],
  properties: {
    ORIGIN: {
      type: 'string',
      default: '127.0.0.1'
    },
    PORT: {
      type: 'number',
      default: 4000
    }
  }
};

export const options: FastifyEnvOptions = {
  dotenv: true,
  schema
};
