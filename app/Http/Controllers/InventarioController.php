<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Faker\Generator;


use App\Bodegas;
use App\UserData;
use App\productos;
use App\Inventarios;
use App\Historiales;

date_default_timezone_set('America/Bogota');
 

class InventarioController extends Controller
{
     
    public function index(Request $request){

        if ($request) { 

             $data  = trim($request->get('dataInfo'));
             $info  = inventarios::join("bodegas", "inventarios.id_bodega", "=", "bodegas.id")
                ->join("productos", "inventarios.id_producto", "=", "productos.id")
                ->join("users", "users.id", "=", "bodegas.id_responsable")
                ->where("productos.nombre","LIKE",'%'.$data.'%')
                ->orWhere("productos.descripcion","LIKE",'%'.$data.'%')
                ->orWhere("bodegas.nombre","LIKE",'%'.$data.'%') 
                ->orWhere("users.nombre","LIKE",'%'.$data.'%')
                ->addSelect([
                         "inventarios.id AS inventariosItem", 
                         "inventarios.cantidad",
                         "bodegas.nombre AS nombreBodega",
                         "productos.nombre AS NombreProducto",
                         "inventarios.created_at AS FechaCreacion"

                ])
                ->orderBy("bodegas.nombre", 'ASC')
                ->paginate();
                //->get();

 
        }else{
              

             $info = inventarios::join("bodegas", "inventarios.id_bodega", "=", "bodegas.id")
                ->join("productos", "inventarios.id_producto", "=", "productos.id")
                ->join("users", "users.id", "=", "bodegas.id_responsable")
                ->addSelect([
                         "inventarios.id AS inventariosItem", 
                         "inventarios.cantidad",
                         "bodegas.nombre AS nombreBodega",
                         "productos.nombre AS NombreProducto",
                         "inventarios.created_at AS FechaCreacion"
                ])
                ->orderBy("bodegas.nombre", 'ASC')
                ->paginate();

        }

        return [  'Info'        => 'Ayla Secura',
                  'inventarios' => $info];

    }//// INDEX 
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
 
    public function store(Request $request)
    {   
        $id_bodega   = trim($request->input('id_bodega'));
        $id_producto = trim($request->input('id_producto'));
        $cantidadGo  = trim($request->input('cantidad'));

         ///$select = DB::select('SELECT * FROM inventarios WHERE id_bodega = ? AND id_producto = ?',[$id_bodega,$id_producto])->first();

         $result = DB::table('inventarios')->select()
                ->where([
                            ['id_bodega',  '=', $id_bodega],
                            ['id_producto','=', $id_producto]
                        ])->get();
         
         @$cantidad = $result[0]->cantidad;
         @$id_invet = $result[0]->id;
          $time     = date("Y-m-d  h:i:s");

         if (!$id_invet) {
            ///CREATE DATA
            $canva = 'undefined';
            $query = DB::insert('INSERT INTO inventarios (id_bodega,id_producto,cantidad,created_at) values (?, ?, ?, ?)', [$id_bodega, $id_producto, $cantidadGo, $time]);


         }else{
            ///UPDATE DATA
            $canva = 'defined';
            $total = $cantidad + $cantidadGo;

            $query = DB::update('UPDATE inventarios SET cantidad = ?, updated_at = ? WHERE id = ? AND id_bodega = ? AND id_producto = ? ',[$total,$time,$id_invet,$id_bodega,$id_producto]);
            
         }

         if (!$query) {
             $final = 'error-data';
         }else{
             $final = 'complete';
             
         }


        return  [ 'Config' =>  $final ];


    }


    public function DataInv(Request $request)
    {   

        if ($request){

            $Id_Bodega = trim($request->get('idBodega'));
            $dataInv   = inventarios::join("bodegas", "inventarios.id_bodega", "=", "bodegas.id")
                         ->join("productos", "inventarios.id_producto", "=", "productos.id")
                         ->where("inventarios.id_bodega","=",$Id_Bodega)
                         ->addSelect([
                         "inventarios.id AS inventariosItem", 
                         "inventarios.cantidad",
                         "bodegas.estado AS EstadoBodegas",
                         "bodegas.nombre AS nombreBodega",
                         "productos.nombre AS NombreProducto",
                         "productos.id AS IdProducto"
                         ])
                         ->orderBy("bodegas.nombre", 'ASC')
                         ->paginate();

            return [  'Info'       => 'QuinlanBoss',
                      'inventarios' => $dataInv];

        }/// END $REQUEST
        
    }
    
 

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function Movement(Request $request)
    {
        $origen      = trim($request->get('id_bodega_origen'));
        $destino     = trim($request->get('id_bodega_destino'));
        $inventario  = trim($request->get('id_inventario'));
        $cantidad    = trim($request->get('cantidad'));
        $sobrante    = trim($request->get('sobrante'));
        $id_producto = trim($request->get('id_producto'));


        $result = DB::table('inventarios')->select()
                ->where([
                            ['id_bodega',  '=', $destino],
                            ['id_producto','=', $id_producto]
                        ])->get();

        @$cantidadUp = $result[0]->cantidad;
        @$id_invet   = $result[0]->id;
         $time       = date("Y-m-d  h:i:s");
         $id_dinamic = date("Ymdhis");

        if (!$id_invet) {
            ///CREATE DATA
            $canva  = 'undefined';
            ////////////////////////////////////////////////
            $query1 = DB::insert('INSERT INTO inventarios (id_bodega,id_producto,cantidad,created_at)
                 VALUES (?, ?, ?, ?)',  [    
                                            $destino,
                                            $id_producto,
                                            $cantidad,
                                            $time
                                        ]);
            ////////////////////////////////////////////////
            $result2 = DB::table('inventarios')->select()
                        ->where([
                            ['id_bodega',  '=', $destino],
                            ['id_producto','=', $id_producto]
                        ])->get();
            $id_invet   = $result2[0]->id;
            ////////////////////////////////////////////////
            $query2 = DB::insert('INSERT INTO historiales 
                (cantidad,id_bodega_origen,id_bodega_destino,id_inventario,created_at)
                VALUES (?, ?, ?, ?,?)', [ 
                                            $cantidad, 
                                            $origen,
                                            $destino, 
                                            $id_invet,
                                            $time
                                        ]);
            ////////////////////////////////////////////////
            $query3 = DB::update('UPDATE inventarios SET cantidad = ?, updated_at = ? WHERE id_bodega = ? AND id_producto = ? ',[$sobrante,$time,$origen,$id_producto]);


            if (!$query1 && !$query2 && !$query3) {
                
                 $final = 'error-data';
            }else{
                 $final = 'complete';
                 
            }

        }else{
            ///UPDATE DATA
            $canva      = 'defined';
            $NuevoTotal = $cantidadUp + $cantidad;

            ////////////////////////////////////////////////
            $query1 = DB::update('UPDATE inventarios SET cantidad = ?, updated_at = ? WHERE id_bodega = ? AND id_producto = ? ',[$sobrante,$time,$origen,$id_producto]);
            ////////////////////////////////////////////////
            $query2 = DB::update('UPDATE inventarios SET cantidad = ?, updated_at = ? WHERE id_bodega = ? AND id_producto = ? ',[$NuevoTotal,$time,$destino,$id_producto]);
            ////////////////////////////////////////////////
            $query3 = DB::insert('INSERT INTO historiales 
                (cantidad,id_bodega_origen,id_bodega_destino,id_inventario,created_at)
                VALUES (?, ?, ?, ?, ?)', [ 
                                            $cantidad, 
                                            $origen,
                                            $destino, 
                                            $id_invet,
                                            $time
                                        ]);
            ////////////////////////////////////////////////

            if (!$query1 && !$query2 && !$query3) {
                
                 $final = 'error-data';
            }else{
                 $final = 'complete';
                 
            }// END ELSE

        }


        return [  'Info'       => 'Qui-Gon Jin',
                  'inventarios' => $final ];

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
