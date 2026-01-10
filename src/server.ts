import Fastify from 'fastify';
import AutoLoad from '@fastify/autoload';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = Fastify({
  logger: true,
});

app.register(AutoLoad, {
  dir: join(__dirname, 'routes'),
  options: {
    prefix: '/',
  },
});

const start = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
