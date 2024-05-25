'use client';

import { SelectEvent } from "@/lib/db";

interface DetailsProps {
    details: SelectEvent;
}

export function Details({ details }: DetailsProps) {
    const textClass = 'text-center my-1';
    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center mb-8">
                    <h1 className="font-semibold text-lg md:text-2xl">
                        {details.event_name}
                    </h1>
                </div>
                <img src="https://www.savethechildren.org/content/dam/global/images/countries/burundi/burunid-girl-baby-m194852-hero.jpg/_jcr_content/renditions/original.img.jpg" />
                <text className={textClass}>
                    organisation: {details.organisation}
                </text>

                <text className={textClass}>
                    address: {details.address}
                </text>

                <text className={textClass}>
                    region: {details.region}
                </text>

                <text className={textClass}>
                    description: {details.description}
                </text>
                <text className={textClass}>
                    duration: {details.duration}
                </text>
                <div style={{
                    textAlign: 'center'
                }}>
                    <button style={{
                        color: "white",
                        width: 150,
                        backgroundColor: 'black',
                        borderRadius: 50,
                        height: 40,
                        textAlign: 'center',
                    }}>register for event</button>
                </div>
            </div>
        </>
    );
}