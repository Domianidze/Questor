import { AppPagination } from '@/components/app-pagination';
import { GameCard } from '@/components/game-card';
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
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-4 p-4">
                {games.data.map((game) => (
                    <GameCard game={game} key={game.id} />
                ))}
            </div>
            <AppPagination links={games.links} />
        </AppLayout>
    );
}
