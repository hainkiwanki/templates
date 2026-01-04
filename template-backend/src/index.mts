import cors from '@fastify/cors';
import Fastify from 'fastify';
import { ErrorHandler } from './errors/errorHandler.mjs';
import { getHtml } from './home.mjs';
import { ApiStatsSerializer } from './requestCount.mjs';
import { exampleRoutes } from './routes/exampleRoutes.route.mjs';
import { APP_VERSION } from './version.mjs';

const app = Fastify({ logger: true });
app.setErrorHandler(ErrorHandler.handle);

const apiStats = new ApiStatsSerializer();

app.addHook('onRequest', async () => {
    apiStats.incrementRequests();
});

await app.register(exampleRoutes);

const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST ?? '0.0.0.0';

await app.register(cors, {
    origin: [
        'http://localhost:5173', // Vite
        'http://127.0.0.1:5173',
    ],
});

app.get('/health', async () => ({
    status: 'ok',
    version: APP_VERSION,
}));

app.get('/', (_, reply) => {
    reply.type('text/html');
    return getHtml(port, apiStats.getRequests());
});

app.listen({ port, host }).catch((err) => {
    app.log.error(err);
    process.exit(1);
});
