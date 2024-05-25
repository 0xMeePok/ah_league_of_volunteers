import { getEvents } from '@/lib/db';
import { EventsTable } from './users-table';
import { Search } from './search';
import { auth } from '@/lib/auth';
import OpenWidgetClient from './useOpenWidget';

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
        <h2 className="font-semibold text-lg md:text-2xl">Platform to Search for & Match Volunteers with Opportunities</h2>
      </div>
      <h3 className="font-semibold">Utilise our ChatBot or Searchbar to get started!</h3>
      <div className="w-full mb-4">
        <Search value={searchParams.q} />
      </div>
      <EventsTable events={events} offset={newOffset}/>
       <OpenWidgetClient />
    </main>
  );
}
