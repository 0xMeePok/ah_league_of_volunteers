// app/ListingDetailsPage.tsx
import { getEventDetails } from "app/actions";

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
        <div className="flex flex-col">
                <h1 style={{
                    fontSize:40,
                    textAlign:'center',
                }}> {result.event_name} </h1>
                <img src="https://www.savethechildren.org/content/dam/global/images/countries/burundi/burunid-girl-baby-m194852-hero.jpg/_jcr_content/renditions/original.img.jpg"/>
                <text className={textClass}>
                    organisation: {result.organisation}
                </text>
                
                <text className={textClass}>
                    address: {result.address}
                </text>
                
                <text className={textClass}>
                    region: {result.region}
                </text>
                
                <text className={textClass}>
                    description: {result.description}
                </text>
                <text className={textClass}>
                    duration: {result.duration}
                </text>
                <div style={{
                    textAlign:'center'
                }}>
                    <button style={{
                        color:"white",
                        width:150,
                        backgroundColor:'black',
                        borderRadius: 50,
                        height:40,
                        textAlign:'center',
                    }}>register for event</button>
                </div>
            </div>
  );
}
