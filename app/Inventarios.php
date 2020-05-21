<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inventarios extends Model
{
     protected $fillable = ['id','id_bodega','id_producto','cantidad','created_by','created_at', 'update_at'];
}
