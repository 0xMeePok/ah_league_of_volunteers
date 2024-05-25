'use client';

import { SelectEvent } from "@/lib/db";

interface DetailsProps {
    details: SelectEvent;
}

export function Details({ details }: DetailsProps) {
    const textClass = 'my-2';
    return (
        <>
            <div className="flex flex-col">
                    <h1 className="text-center font-semibold text-lg md:text-2xl">
                        {details.event_name}
                    </h1>
                    <br></br>
                <img src="https://www.savethechildren.org/content/dam/global/images/countries/burundi/burunid-girl-baby-m194852-hero.jpg/_jcr_content/renditions/original.img.jpg" />
                <text className={textClass}>
                    <strong>Organisation:</strong> {details.organisation}
                </text>

                <text className={textClass}>
                    <strong>Address:</strong> {details.address}
                </text>

                <text className={textClass}>
                    <strong>Region:</strong> {details.region}
                </text>

                <text className={textClass}>
                    <strong>Description:</strong> {details.description}
                </text>
                <text className={textClass}>
                    <strong>Duration:</strong> {details.duration}
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
                    }}>Register</button>
                </div>
            </div>
        </>
    );
}