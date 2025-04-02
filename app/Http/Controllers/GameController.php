<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Inertia\Inertia;

class GameController extends Controller
{
    public function index()
    {
        $games = Game::paginate(15)->onEachSide(1);

        return Inertia::render('games', compact('games'));
    }

    public function show(Game $game)
    {
        $inLibrary = (bool) auth()->user()->games()->find($game->id);

        return Inertia::render('game', compact('game', 'inLibrary'));
    }
}
