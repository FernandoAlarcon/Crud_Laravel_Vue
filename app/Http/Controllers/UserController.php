<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Faker\Generator;
use App\Bodegas;
use App\UserData;
use App\productos;

class UserController extends Controller
{
    	
    public function index(Request $request){

       //WHERE estado = 1
       $Users = DB::select(DB::raw("SELECT * FROM users "));
    	return [ 
    			'pagination' => 'confirmacion',
	            'DataUsers' => $Users
	             ];

    }

    public function store(Request $request)
    {
          
    }

    public function update(Request $request, $id)
    {
        
        $state =  trim($request->get('Estados'));
        $Idb   =  trim($request->get('id_Bodega')); 
        DB::update('UPDATE users SET estado = ? WHERE id = ?',[$state,$id]);
        return;
        
    }

}