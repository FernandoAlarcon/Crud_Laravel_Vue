<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use App\OAuthProvider;
use Illuminate\Http\Request;


Route::get('index', function () {
      return view('index');
})->where('path', '(.*)');
 
Route::get('/', function () {
      return view('index');
})->where('path', '(.*)');

Route::any('{all}', function () {
      return view('index');
  })->where(['all' => '.*']);


Route::get('inventario_data', 'InventarioController@DataInv');
Route::get('inventario_update', 'InventarioController@Movement');

   

///,['except'=>['edit', 'show']]