import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { type Paginated } from '@/types';

interface AppNavigationProps {
    links: Paginated['links'];
}

export function AppPagination({ links }: AppNavigationProps) {
    return (
        <Pagination className="justify-end border-t p-4">
            <PaginationContent>
                {links.map(({ url, active, label }, index) => {
                    if (!index) {
                        return (
                            <PaginationItem key={label}>
                                <PaginationPrevious href={url ?? ''} />
                            </PaginationItem>
                        );
                    }

                    if (label === '...') {
                        return (
                            <PaginationItem key={label}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        );
                    }

                    if (index === links.length - 1) {
                        return (
                            <PaginationItem key={label}>
                                <PaginationNext href={url ?? ''} />
                            </PaginationItem>
                        );
                    }

                    return (
                        <PaginationItem key={label}>
                            <PaginationLink href={url ?? ''} isActive={active}>
                                {label}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
            </PaginationContent>
        </Pagination>
    );
}
