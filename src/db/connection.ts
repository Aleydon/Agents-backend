import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { env } from '@/env';

import { schemas } from './schema';

export const sql = postgres(env.DATABASE_URL);
export const db = drizzle(sql, {
	schema: {
		schemas
	},
	casing: 'snake_case'
});
