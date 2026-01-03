import type { FastifyReply, FastifyRequest } from 'fastify';

export class ErrorHandler {
    public static handle(error: any, request: FastifyRequest, reply: FastifyReply) {
        const statusCode = error.statusCode || 500;
        const isClientError = statusCode >= 400 && statusCode < 500;
        const message = error.message || 'Internal Server Error';

        console.error(`[${new Date().toISOString()}] ${request.method} ${request.url}`);
        console.error(`Status: ${statusCode} | Message: ${error.message}`);
        if (!isClientError) {
            console.error('Stack:', error.stack);
        }

        return reply.status(statusCode).send({
            success: false,
            error: isClientError ? error.message : message,
            errorCode: error.code || 'INTERNAL_ERROR',
            ...(process.env.NODE_ENV === 'development' && { detail: error.stack }),
        });
    }
}
