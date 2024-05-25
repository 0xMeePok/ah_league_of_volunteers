// app/ListingDetailsPage.tsx
import { getEventDetails } from "app/actions";
import { Details } from "app/details";

interface ListingDetailsPageProps {
  params: {
    event_id: string;
  };
}

export default async function ListingDetailsPage({ params }: ListingDetailsPageProps) {
  const { event_id } = params;
  const result = await getEventDetails(parseInt(event_id));
  const textClass = 'text-center my-1';
  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
        <Details details={result} />
    </main>
  );
}
