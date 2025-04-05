import { AppPagination } from '@/components/app-pagination';
import { GameListing } from '@/components/game-listing';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type Game, type Paginated } from '@/types';
import { Head } from '@inertiajs/react';

interface GamesProps {
    games: Paginated<Game>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Games',
        href: '/games',
    },
];

export default function Games({ games }: GamesProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Games" />
            <GameListing games={games.data} />
            <AppPagination links={games.links} />
        </AppLayout>
    );
}
