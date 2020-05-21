<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class productos extends Model
{
    protected $fillable = ['nombre','descripcion','estado','created_by'];
    // protected $table = "productos";
    // protected $connection = 'mysql';
}


