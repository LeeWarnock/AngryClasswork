<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Snippets extends Model
{
    //
    public function user(){
    	$this->belongsTo(User::class);
    }
}