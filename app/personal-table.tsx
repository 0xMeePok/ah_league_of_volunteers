'use client';
import {
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    TableBody,
    Table
} from '@/components/ui/table';
import { SelectEvent } from "@/lib/db";

interface personalEvent {
    details: SelectEvent;
}

export function PersonalTable({ details }: personalEvent) {
    return (
        <>
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
                    <TableRow>
                        <TableCell className="font-medium">{details.event_name}</TableCell>
                        <TableCell className="hidden md:table-cell">{details.organisation}</TableCell>
                        <TableCell className="hidden md:table-cell">{details.address}</TableCell>
                        <TableCell className="hidden md:table-cell">{details.region}</TableCell>
                        <TableCell className="hidden md:table-cell">{details.start_date}</TableCell>
                        <TableCell className="hidden md:table-cell">{details.end_date}</TableCell>
                        <TableCell className="hidden md:table-cell">{details.duration}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

