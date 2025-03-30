import { GameCover } from '@/components/game-card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type Game } from '@/types';
import { Head } from '@inertiajs/react';
import { StarIcon } from 'lucide-react';
import moment from 'moment';

interface GamesProps {
    game: Game;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Games',
        href: '/games',
    },
    {
        title: 'Game',
        href: '/game',
    },
];

export default function Game({ game }: GamesProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Games" />
            <div className="flex gap-4 p-4">
                <div className="w-80">
                    <GameCover game={game} />
                </div>
                <div className="space-y-1">
                    <h1 className="text-xl font-bold">{game.name}</h1>
                    <div className="flex items-center gap-1">
                        <StarIcon className="size-4 text-yellow-500" />
                        <p>{game.rating}</p>
                    </div>
                    <div className="text-muted-foreground space-y-1 pt-3 text-sm">
                        <p className="max-w-md">{game.summary}</p>
                        <p>{moment(game.release_date).format('LL')}</p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
