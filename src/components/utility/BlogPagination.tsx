import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function BlogPagination({
  href,
  currentPage,
}: {
  href: string;
  currentPage: number;
}) {
  return (
    <Pagination>
      <PaginationContent>
        {currentPage !== 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious href={`${href}/${currentPage - 1}`} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`${href}/${currentPage - 1}`}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink href={`${href}/${currentPage}`} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`${href}/${currentPage + 1}`}>
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`${href}/${currentPage + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
