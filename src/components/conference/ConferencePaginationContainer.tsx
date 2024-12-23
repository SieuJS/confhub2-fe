import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {
    constructUrl,
    constructPrevOrNextUrl
} from "@/utils";

import { ConferencesResponseWithParams } from "@/utils/conference";

import { useLoaderData, useLocation } from "react-router-dom";

function ConferencePaginationContainer() {
    const { meta } = useLoaderData() as ConferencesResponseWithParams;
  
    const { lastPage :pageCount, currentPage :page } = meta.pagination;


    const { search, pathname } = useLocation();

    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

    if (pageCount < 2) return null;

    const renderPagination = pages.map((pageNumber) => {
        const isActive = pageNumber === page;
        const url = constructUrl({ pageNumber, search, pathname });

        return (
            (pageNumber === 1 || pageNumber === pageCount || (pageNumber >= page - 2 && pageNumber <= page + 2)) ? (
                <PaginationItem key={pageNumber}>
                  <PaginationLink to={url} isActive={isActive}>
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              ) : (
                (pageNumber === page - 3 || pageNumber === page + 3) ? (
                  <PaginationItem key={pageNumber}>
                    <span>...</span>
                  </PaginationItem>
                ) : null
              )
        );
    });
    const { prevUrl, nextUrl } = constructPrevOrNextUrl({
        currentPage: page,
        pageCount,
        search,
        pathname
    });

    return (
        <Pagination className="mt-16">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious to={prevUrl} />
                </PaginationItem>
                {renderPagination}
                <PaginationItem>
                    <PaginationNext to={nextUrl} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
export default ConferencePaginationContainer;
