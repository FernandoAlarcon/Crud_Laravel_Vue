<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class bodegas extends Model
{
    protected $fillable = ['nombre','id_responsable','estado','created_by','created_at'];
    // protected $table = "productos";
    // protected $connection = 'mysql';
}