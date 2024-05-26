import { getEventDetails } from './actions';
import { PersonalTable } from './personal-table';

export async function MyEvents(){
    const result = await getEventDetails(6);
    return (
        <>
        <p>My Events</p>
        <PersonalTable details={result} />
        </>
    );
}