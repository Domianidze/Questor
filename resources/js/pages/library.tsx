import { AppPagination } from '@/components/app-pagination';
import { GameListing } from '@/components/game-listing';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type Game, type Paginated } from '@/types';
import { Head } from '@inertiajs/react';

interface LibraryProps {
    favorites: Game[];
    games: Paginated<Game>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Library',
        href: '/library',
    },
];

export default function Library({ favorites, games }: LibraryProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Library" />
            <GameListing heading="Favorites" games={favorites} />
            <GameListing heading="Games" games={games.data} />
            <AppPagination links={games.links} />
        </AppLayout>
    );
}
