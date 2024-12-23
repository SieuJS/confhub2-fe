import ConferencePaginationContainer from "@/components/conference/ConferencePaginationContainer";
import ConferencesContainer from "@/components/conference/ConferencesContainer";
import FilterConf from "@/components/conference/FilterConf"
import { 
  confhubFetch,
  ConferencesResponse, 
  ConferencesResponseWithParams
 } from "@/utils"
import { type LoaderFunction } from "react-router-dom"

const url = '/conference-lint';

export const loader : LoaderFunction = async ({request}) : Promise<ConferencesResponseWithParams> => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  const response = await confhubFetch<ConferencesResponse>(url , {params});
  return {...response.data , params};
}

function ConferenceHome() {

  return (
    <>
    <FilterConf/>
    <ConferencesContainer/>
    <ConferencePaginationContainer/>
    </>
  )
}

export default ConferenceHome