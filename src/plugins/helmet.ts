import { FastifyInstance } from 'fastify';
import helmet, { FastifyHelmetOptions } from '@fastify/helmet';
import fastifyPlugin, { PluginMetadata } from 'fastify-plugin';

const metadata: PluginMetadata = {
  name: 'helmet'
};

async function plugin(fastify: FastifyInstance) {
  const opts: FastifyHelmetOptions = { global: true };

  await fastify.register(helmet, opts);
}

export default fastifyPlugin(plugin, metadata);
