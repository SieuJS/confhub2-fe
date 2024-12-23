import { type Conference } from "@/utils";
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

const ConferencesList = () => {
    const { data: conferences } = useLoaderData() as { data: Conference[] };

    return (
        <div className="mt-12 grid gap-y-8">
            {conferences.map((conference) => {
                const { name, acronym, rank, source, start_date, end_date, fieldOfResearch } = conference.attributes;

                return (
                    <Link key={conference.id} to={`/conferences/${conference.id}`}>
                        <Card>
                            <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                                <div>
                                    <h2 className="text-xl font-semibold capitalize">{name}</h2>
                                    <h4>{acronym}</h4>
                                    <p>Rank: {rank}</p>
                                    <p>Source: {source}</p>
                                    <p>Dates: {start_date} - {end_date}</p>
                                    <p>Field of Research: {fieldOfResearch}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
};

export default ConferencesList;
