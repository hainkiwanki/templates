import { testClient } from '../api/testClient.api.mjs';
import { Params, ParamsSchema, QuerySearch, QuerySearchSchema } from '../schemas/example.schema.mjs';
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import type { FastifyInstance } from 'fastify';

export async function exampleRoutes(fastify: FastifyInstance): Promise<void> {
    const api = fastify.withTypeProvider<TypeBoxTypeProvider>();

    api.get<{ Querystring: QuerySearch; Params: Params }>(
        '/api/test',
        { schema: { querystring: QuerySearchSchema, params: ParamsSchema } },
        async (req) => {
            console.log(req.query.query, req.params.type);
            return await testClient.get('/test');
        }
    );
}
