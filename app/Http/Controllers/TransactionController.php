<?php

namespace App\Http\Controllers;

use App\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransactionController extends Controller
{
    public function getNewTransactions()
    {
        $newTransactions = DB::table('transactions')
            ->selectRaw('latitude, longitude, product, country')
            ->orderByRaw('rand()')
            ->limit(20)
            ->get();

        return response()->json($newTransactions);
    }
}
