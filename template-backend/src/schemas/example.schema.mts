import { Static, Type } from '@sinclair/typebox';

// api/test
export const QuerySearchSchema = Type.Object({
    query: Type.String({ minLength: 1 }),
});

export type QuerySearch = Static<typeof QuerySearchSchema>;

// api/test
export const ParamsSchema = Type.Object({
    type: Type.String(),
});

export type Params = Static<typeof ParamsSchema>;
