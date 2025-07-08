import { fastifyCors } from '@fastify/cors';
import fastify from 'fastify';
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider
} from 'fastify-type-provider-zod';

import { env } from './env';
import { getRoomsRoute } from './http/routes/get-rooms';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333;
const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
	origin: '*'
});
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
	return 'OK';
});

app.register(getRoomsRoute);

app
	.listen({ port: env.PORT })
	.then(() => {
		console.log(`Server is running on http://localhost:${PORT}`);
	})
	.catch((err) => {
		console.error('Error starting server:', err);
		process.exit(1);
	});
