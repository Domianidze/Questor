import { AppPagination } from '@/components/app-pagination';
import AppLayout from '@/layouts/app-layout';
import { Game, Paginated, type BreadcrumbItem } from '@/types';
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
            <div className="grid grid-cols-5 gap-4 p-4">
                {games.data.map((game) => (
                    <div key={game.id} className="w-full">
                        <img src={game.cover} alt={game.name} className="bg-sidebar h-100 w-full rounded object-cover object-center" />
                        <p className="pt-1 text-lg">{game.name}</p>
                    </div>
                ))}
            </div>
            <AppPagination links={games.links} />
        </AppLayout>
    );
}
