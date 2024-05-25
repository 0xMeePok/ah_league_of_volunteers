import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { pgTable, serial, varchar, date } from 'drizzle-orm/pg-core';
import { eq, ilike } from 'drizzle-orm';

export const db = drizzle(
  neon(process.env.POSTGRES_URL!, {
    fetchOptions: {
      cache: 'no-store'
    }
  })
);

{/* updated pgtable */}
const events = pgTable('events', {
  eid: serial('eid').primaryKey(),
  email: varchar('email', { length: 255 }),
  event_name: varchar('event_name', { length: 255 }),
  organisation: varchar('organisation', { length: 255 }),
  address: varchar('address', { length: 255 }),
  region: varchar('region', { length: 255}),
  description: varchar('description', {length: 255}),
  start_date: date('start_date'),
  end_date: date('end_date'),
  duration: varchar('duration', {length: 255})
});

export type SelectEvent = typeof events.$inferSelect;

export async function getEvents(
  search: string,
  offset: number
): Promise<{
  events: SelectEvent[];
  newOffset: number | null;
}> {
  // Always search the full table, not per page
  if (search) {
    return {
      events: await db
        .select()
        .from(events)
        .where(ilike(events.event_name, `%${search}%`))
        .limit(1000),
      newOffset: null
    };
  }

  if (offset === null) {
    return { events: [], newOffset: null };
  }

  const moreEvents = await db.select().from(events).limit(20).offset(offset);
  const newOffset = moreEvents.length >= 20 ? offset + 20 : null;
  return { events: moreEvents, newOffset };
}

export async function getSpecificEventById(id: number) {
  const result =  await db.select().from(events).where(eq(events.eid, id));
  return result;
}

export async function deleteUserById(id: number) {
  await db.delete(events).where(eq(events.eid, id));
}
