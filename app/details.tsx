'use client';

import { SelectEvent } from "@/lib/db";

interface DetailsProps {
    details: SelectEvent;
}

export function Details({details}: DetailsProps) {
    return (
        <>
        <h1>{details.event_name}</h1>
        <p>{details.address}</p>
        <p>{details.description}</p>
        <p>{details.organisation}</p>
        </>
    );
}