'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { SelectEvent } from '@/lib/db';
import { deleteUser } from './actions';
import { useRouter } from 'next/navigation';

export function EventsTable({
  events,
  offset
}: {
  events: SelectEvent[];
  offset: number | null;
}) {
  const router = useRouter();

  function onClick() {
    router.replace(`/?offset=${offset}`);
  }

  return (
    <>
      <form className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="max-w-[150px]">Event</TableHead>
              <TableHead className="hidden md:table-cell">Organisation</TableHead>
              <TableHead className="hidden md:table-cell">Address</TableHead>
              <TableHead className="hidden md:table-cell">Region</TableHead>
              <TableHead className="hidden md:table-cell">Start Date</TableHead>
              <TableHead className="hidden md:table-cell">End Date</TableHead>
              <TableHead className="hidden md:table-cell">Day of Week</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <EventRow key={event.eid} event={event} />
            ))}
          </TableBody>
        </Table>
      </form>
      {offset !== null && (
        <Button
          className="mt-4 w-40"
          variant="secondary"
          onClick={() => onClick()}
        >
          Next Page
        </Button>
      )}
    </>
  );
}

function EventRow({ event }: { event: SelectEvent }) {
  const eventId = event.eid;
  const deleteUserWithId = deleteUser.bind(null, eventId);

  return (
    <TableRow>
      {/* 6 columns */}
      <TableCell className="font-medium">{event.event_name}</TableCell>
      <TableCell className="hidden md:table-cell">{event.organisation}</TableCell>
      <TableCell className="hidden md:table-cell">{event.address}</TableCell>
      <TableCell className="hidden md:table-cell">{event.region}</TableCell>
      <TableCell className="hidden md:table-cell">{event.start_date}</TableCell>
      <TableCell className="hidden md:table-cell">{event.end_date}</TableCell>
      <TableCell className="hidden md:table-cell">{event.duration}</TableCell>
      <TableCell>
        <Button
          className="w-full"
          size="sm"
          variant="outline"
          formAction={deleteUserWithId}
          disabled
        >
          More Info
        </Button>
      </TableCell>
    </TableRow>
  );
}
