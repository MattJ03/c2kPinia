<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StudentController;


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('api:sanctum')->group(function () {
    Route::get('/student', [StudentController::class, 'index']);
    Route::post('/student', [StudentController::class, 'store']);
    Route::get('/student/{$id}', [StudentController::class, 'show']);
    Route::patch('/student/{id}', [StudentController::class, 'upgrade']);
    Route::delete('/student/{$id}', [StudentController::class, 'delete']);
    Route::post('/logout', [AuthController::class, 'logout']);
});