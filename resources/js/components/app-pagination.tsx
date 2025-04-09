import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import { type Paginated } from '@/types';

interface AppNavigationProps {
    links: Paginated['links'];
}

export function AppPagination({ links }: AppNavigationProps) {
    if (links.length < 4) {
        return;
    }

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
                            <PaginationItem key={label} className="hidden lg:block">
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
                        <PaginationItem
                            key={label}
                            className={cn({
                                'hidden lg:block': !active,
                            })}
                        >
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
