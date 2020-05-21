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

Route::resource('products', 'DataController',['except'=>['edit', 'show' ]]);
Route::resource('bodegas', 'BodegaController',['except'=>['edit', 'show']]);
Route::resource('Users', 'UserController',['except'=>['edit', 'show']]);
Route::resource('inventario', 'InventarioController',['except'=>['edit']]);
Route::get('inventario_data', 'InventarioController@DataInv');
Route::get('inventario_update', 'InventarioController@Movement');

Route::resource('historials', 'HistorialsController',['except'=>['edit']]);
   

///,['except'=>['edit', 'show']]