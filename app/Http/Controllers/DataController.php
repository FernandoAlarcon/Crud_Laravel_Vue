<?php

namespace App\Http\Controllers;
 
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Faker\Generator;
use App\productos;
 
class DataController extends Controller
{
    //  

    public function index (Request $request){
 
    	if ($request) {
           
    		
    	     $query = trim($request->get('message'));
           $tasks = productos::where('nombre','LIKE','%'.$query.'%')
            ->orWhere('descripcion','LIKE','%'.$query.'%')
            ->orderBy('id', 'DESC')->paginate();

         return [
              'pagination' => [
                  'total'         => $tasks->total(),
                  'current_page'  => $tasks->currentPage(),
                  'per_page'      => $tasks->perPage(),
                  'last_page'     => $tasks->lastPage(),
                  'from'          => $tasks->firstItem(),
                  'to'            => $tasks->lastItem(),
              ],
              'tasks' => $tasks
             ];  
    	}else{
    		 $tasks = productos::orderBy('id', 'DESC')->paginate();

          return [
              'pagination' => [
                  'total'         => $tasks->total(),
                  'current_page'  => $tasks->currentPage(),
                  'per_page'      => $tasks->perPage(),
                  'last_page'     => $tasks->lastPage(),
                  'from'          => $tasks->firstItem(),
                  'to'            => $tasks->lastItem(),
              ],
              'tasks' => $tasks
          ];
    	}

    } 

     public function update(Request $request, $id)
    {
        
        $state =  trim($request->get('Estados'));
        $Idb   =  trim($request->get('id_productos')); 
        DB::update('UPDATE productos SET estado = ? WHERE id = ?',[$state,$Idb]);
        return;
        
    }


}
