<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Router::post('/login', [AuthController::class, 'login']);
Route::middleware('api:sanctum')->group(function () {
    Route::get('/student/index', [StudentController::class, 'index']);
    Route::post('/student/', [StudentController::class, 'store']);
    Route::get('/student/{$id}', [StudentController::class, 'show']);
    Route::patch('/student/{id}', [StudentController::class, 'upgrade']);
});