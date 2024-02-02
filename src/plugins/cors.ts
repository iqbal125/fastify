import { FastifyInstance } from 'fastify';
import cors, { FastifyCorsOptions } from '@fastify/cors';
import fastifyPlugin, { PluginMetadata } from 'fastify-plugin';

const metadata: PluginMetadata = {
  name: 'cors'
};

async function plugin(fastify: FastifyInstance) {
  const origin = [process.env.ORIGIN || 'http://127.0.0.1:4000'];

  const opts: FastifyCorsOptions = {
    origin,
    allowedHeaders: [
      'Access-Control-Allow-Origin',
      'Origin',
      'X-Requested-With',
      'Accept',
      'Content-Type',
      'Authorization'
    ],
    exposedHeaders: 'Authorization',
    credentials: true,
    methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE']
  };

  await fastify.register(cors, opts);
}

export default fastifyPlugin(plugin, metadata);
