<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class historiales extends Model
{
     protected $fillable = ['id','cantidad','id_bodega_origen','id_bodega_destino','id_inventario','created_by','created_at', 'update_at'];
}
