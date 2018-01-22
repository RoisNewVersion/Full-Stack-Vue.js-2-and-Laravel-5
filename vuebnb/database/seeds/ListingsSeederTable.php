<?php

use Illuminate\Database\Seeder;
// use File;
// use DB;

class ListingsSeederTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = base_path() . '/database/data.json';
		$file = File::get($path);
		$data = json_decode($file, true);
		DB::table('listings')->insert($data);
    }
}
