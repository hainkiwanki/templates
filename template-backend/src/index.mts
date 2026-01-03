import cors from '@fastify/cors';
import Fastify from 'fastify';
import { ErrorHandler } from './errors/errorHandler.mjs';
import { exampleRoutes } from './routes/exampleRoutes.route.mjs';

const app = Fastify({ logger: true });
app.setErrorHandler(ErrorHandler.handle);

await app.register(exampleRoutes);

const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST ?? '0.0.0.0';

await app.register(cors, {
    origin: [
        'http://localhost:5173', // Vite
        'http://127.0.0.1:5173',
    ],
});

app.listen({ port, host }).catch((err) => {
    app.log.error(err);
    process.exit(1);
});
