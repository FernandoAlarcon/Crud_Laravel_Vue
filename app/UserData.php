<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class users extends Model
{
    protected $fillable = ['id','nombre','foto','estado','created_by','created_at'];
    // protected $table = "productos";
    // protected $connection = 'mysql';
}