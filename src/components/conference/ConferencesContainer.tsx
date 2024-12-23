import { useLoaderData , Link} from "react-router-dom";
import { DataTable } from "../DataTable";
import { Conference, type ConferencesResponse } from "@/utils";
import { Separator } from "../ui/separator";
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button";


function ConferencesContainer() {
    const columns: ColumnDef<Conference>[] = [
      {
        accessorKey: "attributes.name",
        header: "Title",
      },
      {
        accessorKey: "attributes.acronym",
        header: "Acronym",
      },
      {
        accessorKey: "attributes.source",
        header: "Source",
      },
      {
        accessorKey: "attributes.rank",
        header: "Rank",
      },
      {
        accessorKey: "attributes.fieldOfResearch",
        header: "Field of Research",
      },
      {
        accessorKey: "attributes.startDate",
        header: "Start Date",
      },
      {
        accessorKey: "attributes.endDate",
        header: "End Date",
      },
      {
        accessorKey: "attributes.location",
        header: "Location",
      },
      {
        accessorKey : "id",
        header : "Details",
        cell : ({ row}) => {
          const id = row.original.id ; 
          return <Button ><Link to = {`/conferences/${id}`}>Details</Link></Button>
        }
      }

    ]

    const { meta, data } = useLoaderData() as ConferencesResponse;
    const totalConferences = meta.pagination.total;

    return (
        <>
            {/* HEADER */}
            <section>
                <div className="flex justify-between items-center mt-8 ">
                    <h4 className="font-medium text-md">
                        {totalConferences} conference{totalConferences > 1 && "s"}
                    </h4>
                </div>
                <Separator className="mt-4" />
            </section>

            {/* CONFERENCES */}
            <div>
                {totalConferences === 0 ? (
                    <h5 className="text-2xl mt-16">
                        Sorry, no conferences matched your search...
                    </h5>
                ) : (
                    <DataTable columns={columns} data={data} />
                )}
            </div>
        </>
    );
}
export default ConferencesContainer;
