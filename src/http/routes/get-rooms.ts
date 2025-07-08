import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';

import { db } from '@/db/connection';
import { schemas } from '@/db/schema';

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
	app.get('/rooms', async () => {
		const results = await db
			.select({
				id: schemas.rooms.id,
				name: schemas.rooms.name
			})
			.from(schemas.rooms)
			.orderBy(schemas.rooms.createdAt);
		return results;
	});
};
