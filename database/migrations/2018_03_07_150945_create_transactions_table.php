<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("create table transactions (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `date_server` datetime default null,
            `datetime` datetime default null,
            `local_datetime` datetime default null,
            `receipt_no` int (11) default 0,
            `trace_no` int(11) default 0,
            `comment` varchar(200),
            `terminalid` int(11) default 0,
            `serial` varchar(50),
            `value` int(11) default 0,
            `type` int(11) default 0,
            `result` int(11) default 0,
            `userref` varchar(50),
            `id_country` tinyint default 0,
            `country` varchar(100),
            `id_store` int(11) default 0,
            `store` varchar(100),
            `customer_store_id` varchar(20),
            `id_customer` int(11) default 0,
            `customer` varchar(100),
            `id_division` int(11) default 0,
            `division` varchar(100),
            `id_content_provider` int(11) default 0,
            `content_provider` varchar(100),
            `id_provider` int(11) default 0,
            `provider` varchar(100),
            `ean` varchar(100),
            `id_products` int(11) default 0,
            `product` varchar(100),
            `id_currency` tinyint default 0,
            `currency` varchar(10),
            `latitude` varchar(20) NOT NULL DEFAULT '',
            `longitude` varchar(20) NOT NULL DEFAULT '',
            PRIMARY KEY (id)
        )");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
