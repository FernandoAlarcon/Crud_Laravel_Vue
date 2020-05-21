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

class HistorialsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        if ($request) {
                
            $data  = trim($request->get('dataInfo'));
            $info  = historiales::join("bodegas", "historiales.id_bodega_origen", "=", "bodegas.id")
                ->join("bodegas AS bdgs", "historiales.id_bodega_destino", "=", "bdgs.id")
                ->join("inventarios", "inventarios.id", "=", "historiales.id_inventario")
                ->join("productos", "inventarios.id_producto", "=", "productos.id")

                ->where("productos.nombre","LIKE",'%'.$data.'%')
                ->orWhere("productos.descripcion","LIKE",'%'.$data.'%')
                ->orWhere("bodegas.nombre","LIKE",'%'.$data.'%') 
                //->orWhere("bdgs.nombre","LIKE",'%'.$data.'%') 
                ->orWhere("inventarios.cantidad","LIKE",'%'.$data.'%')
                ->addSelect([
                         "productos.nombre AS Producto", 
                         "bodegas.nombre AS Origen",
                         "bdgs.nombre AS Destino",
                         "historiales.cantidad",
                         "historiales.created_at AS FechaCreacion"

                ])
                ->orderBy("historiales.created_at", 'ASC')
                ->paginate();
        }else{

             $info  = historiales::join("bodegas", "historiales.id_bodega_origen", "=", "bodegas.id")
                ->join("bodegas AS bdgs", "historiales.id_bodega_destino", "=", "bdgs.id")
                ->join("inventarios", "inventarios.id", "=", "historiales.id_inventario")
                ->join("productos", "inventarios.id_producto", "=", "productos.id")
                ->addSelect([
                         "productos.nombre AS Producto", 
                         "bodegas.nombre AS Origen",
                         "bdgs.nombre AS Destino",
                         "historiales.cantidad",
                         "historiales.created_at AS FechaCreacion"

                ])
                ->orderBy("historiales.created_at", 'ASC')
                ->paginate();
        
        }//// FINAL IF

        return [    'Info'        => 'Luminara Unduli',
                    'inventarios' => $info ];

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
