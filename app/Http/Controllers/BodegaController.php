<?php

namespace App\Http\Controllers;
 

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Faker\Generator;
use App\Bodegas;
//use App\UserData; 
use App\productos;

class BodegaController extends Controller
{ 
 	
 	public function index(Request $request){

	    if ($request) { 

	      	 $data  = trim($request->get('bodegasD'));
		     $info = bodegas::join("users", "bodegas.id_responsable", "=", "users.id")
		        ->where('users.nombre','LIKE','%'.$data.'%')
		        ->orWhere('users.estado','LIKE','%'.$data.'%')
		        ->orWhere('bodegas.nombre','LIKE','%'.$data.'%')
		        ->addSelect([
		        		 'users.id', 
		        		 'users.nombre AS Username',
		        		 'users.foto',
		        		 'users.estado',
		        		 'bodegas.estado as EstadoBodegas',
		        		 'bodegas.nombre',
		        		 'bodegas.id_responsable',
		        		 'bodegas.id AS BodegaId'
		        ])
		        ->orderBy('bodegas.created_at', 'ASC')
		        ->paginate();
		        //->get();


	         return [  	'Info' => 'Kit Fisto',
	         			'Data' => $info ];  
	    }else{
	          

	 		 $info = bodegas::join("users", "users.id", "=", "bodegas.id_responsable")
		        ->addSelect([
		        		 'users.id AS UserId', 
		        		 'users.nombre AS Username',
		        		 'users.foto',
		        		 'users.estado',
		        		 'bodegas.estado as EstadoBodegas',
		        		 'bodegas.nombre',
		        		 'bodegas.id_responsable',
		        		 'bodegas.id AS BodegaId'
		        ])
		        ->orderBy('bodegas.created_at', 'ASC');

	          return [	'Info' => 'Kit Fisto',
	          			'Data' => $info];
	    }

    }//// INDEX 	

    public function update(Request $request, $id)
    {
        
        $state =  trim($request->get('Estados'));
        $Idb   =  trim($request->get('id_Bodega')); 
        DB::update('UPDATE bodegas SET estado = ? WHERE id = ?',[$state,$id]);
        return;
        
    }

    public function store(Request $request)
    {
         $this->validate($request, [
           'nombre' => 'required'
         ]);

         bodegas::create($request->all()); 
         return;
    }


}
