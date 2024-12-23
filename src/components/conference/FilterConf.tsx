import { Form , useLoaderData , Link } from "react-router-dom"
import type { ConferencesResponseWithParams } from "@/utils/conference/types"
import { Button } from "../ui/button";
import FormInput from "../FormInput";

import { Combobox } from "../ComboBox";

function FilterConf() {

    const {meta,  params} = useLoaderData() as ConferencesResponseWithParams;
    const {name , fieldOfResearch, acronym ,rank, source, location, startDate , endate} = params;

    const ForOptions = meta.fieldOfResearches?.map(f => ({label : f , value : f}));
    const ForDefaultValue = {label : fieldOfResearch as string , value : fieldOfResearch as string};

    const RankOptions = meta.ranks?.map(r => ({label : r , value : r}));
    const RankDefaultValue = {label : rank as string , value : rank as string};

    const SourceOptions = meta.sources?.map(s => ({label : s , value : s}));
    const SourceDefaultValue = {label : source as string , value : source as string};



  return (
    <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        {/* SEARCH NAME*/}
        <FormInput
            type="name"
            label="Search name"
            name="name"
            defaultValue={name}
        ></FormInput>

        {/* SEARCH ACRONYM */}

        <FormInput
            type="search"
            label="Search acronym"
            name="acronym"
            defaultValue={acronym}
        ></FormInput>

        {/* CATEGORIES */}

        <Combobox label="Field of research" options={ForOptions} defaultValue = {ForDefaultValue } name = "fieldOfResearch"/>

        {/* Ranks */}

        <Combobox label="Rank" options = {RankOptions} defaultValue = {RankDefaultValue} name = "rank"/>

        {/* Sources */}

        <Combobox label="Source" options = {SourceOptions} defaultValue = {SourceDefaultValue} name = "source"/>

        {/* Locations */}
        <FormInput
            type="search"
            label="Search location"
            name="location"
            defaultValue={location}
        ></FormInput>

        <FormInput
            type="date"
            label="Start Date"
            name="startDate"
            defaultValue={startDate}
        >
        </FormInput>

        <FormInput
            type="date"
            label="End Date"
            name="endDate"
            defaultValue={endate}
        ></FormInput>

        <Button type="submit" size="sm" className="self-end mb-2">
            search
        </Button>
        <Button
            type="button"
            asChild
            size="sm"
            variant="outline"
            className="self-end mb-2"
        >
            <Link to="/conferences">reset</Link>
        </Button>
    </Form>
  )
}

export default FilterConf