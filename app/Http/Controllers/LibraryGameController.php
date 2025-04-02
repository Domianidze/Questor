<?php

namespace App\Http\Controllers;

use App\Models\Game;

class LibraryGameController extends Controller
{
    public function store(Game $game)
    {
        auth()->user()->games()->attach($game);

        return redirect()->back();
    }

    public function destroy(Game $game)
    {
        auth()->user()->games()->detach($game);

        return redirect()->back();
    }
}

