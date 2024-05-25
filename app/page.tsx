import { getEvents } from '@/lib/db';
import { EventsTable } from './users-table';
import { Search } from './search';
import OpenWidgetClient from './useOpenWidget';
{/* hi */}
export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const { events, newOffset } = await getEvents(search, Number(offset));

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Events</h1>
      </div>
      <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div>
      <EventsTable events={events} offset={newOffset} />
       {/* Include the Client Component */}
       <OpenWidgetClient />
    </main>
  );
}
