import { FastifyInstance } from 'fastify';
import rateLimit, { RateLimitPluginOptions } from '@fastify/rate-limit';
import fastifyPlugin, { PluginMetadata } from 'fastify-plugin';

const metadata: PluginMetadata = {
  name: 'rate limit'
};

async function plugin(fastify: FastifyInstance) {
  const opts: RateLimitPluginOptions = { max: 100, timeWindow: '1 minute' };

  await fastify.register(rateLimit, opts);
}

export default fastifyPlugin(plugin, metadata);
