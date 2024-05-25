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
  return (
    <>
      <p>Listing details</p>
      <Details details={result} />
    </>
  );
}
