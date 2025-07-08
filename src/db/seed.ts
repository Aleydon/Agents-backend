import { reset, seed } from 'drizzle-seed';

import { db, sql } from './connection';
import { schemas } from './schema';

await reset(db, schemas);
await seed(db, schemas).refine((fake) => {
	return {
		rooms: {
			count: 20,
			columns: {
				id: fake.uuid(),
				name: fake.fullName(),
				description: fake.companyName(),
				createdAt: fake.datetime()
			}
		}
	};
});
await sql.end();

console.log('Database seeded successfully');
