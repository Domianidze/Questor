<?php

namespace App\Http\Controllers;

class FavoriteGameController extends Controller
{
    public function store(int $game_id)
    {
        auth()->user()->games()->updateExistingPivot($game_id, ['favorite' => true]);

        return redirect()->back();
    }

    public function destroy(int $game_id)
    {
        auth()->user()->games()->updateExistingPivot($game_id, ['favorite' => false]);

        return redirect()->back();
    }
}

