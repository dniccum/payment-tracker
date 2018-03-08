<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string $table
     */
    protected $table = 'transactions';

    protected $dates = [
        "date_server",
        "datetime",
        "local_datetime"
    ];
}
