<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Inertia\Inertia;

class GameController extends Controller
{
    public function index()
    {
        $popular = Game::orderBy('rating', 'desc')->limit(5)->get();
        $games = Game::paginate(15)->onEachSide(1);

        return Inertia::render('games', compact('popular', 'games'));
    }

    public function show(Game $game)
    {
        $userGame = auth()->user()->games()->withPivot('favorite')->find($game->id);
        $inLibrary = (bool) $userGame;
        $isFavorite = $userGame ? $userGame->pivot->favorite : false;

        return Inertia::render('game', compact('game', 'inLibrary', 'isFavorite'));
    }
}
