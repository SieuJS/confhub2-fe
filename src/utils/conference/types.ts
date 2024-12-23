export type ConferencesResponse = {
  data: Conference[];
  meta: ConferencesMeta;
};

export type Conference = {
  id : string , 
  attributes : ConferenceAttributes
};

export type ConferenceAttributes = {
  name : string , 
  acronym : string , 
  rank : string , 
  source : string , 
  start_date : string , 
  end_date : string , 
  fieldOfResearch : string
}


export type ConferencesMeta = {
  fieldOfResearches: string[];
  ranks : string[] ,
  sources : string[] ,
  pagination : ConferencePagination
};

export type ConferencePagination ={
  total : number , 
  perPage : number , 
  currentPage : number , 
  lastPage : number , 
  prev : number, 
  next : number
}

export type ConferenceParams = {
    name? : string , 
    acronym? : string ,
    rank? : string ,
    source? : string ,
    startDate? : string ,
    endate? : string ,
    page? : number,
    fieldOfResearch? : string,
    location? : string
}

export type ConferencesResponseWithParams = ConferencesResponse & { params: ConferenceParams };