<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CompanyProfileController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\BannerController;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('api')->group(function () {

    // Company Profile
    Route::get('/company-profile', [CompanyProfileController::class, 'index']);
    Route::post('/company-profile', [CompanyProfileController::class, 'store']);

    // Products
    Route::get('/products', [ProductController::class, 'index']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/products/{id}', [ProductController::class, 'show']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);

    // Banners
    Route::get('/banners', [BannerController::class, 'index']);
    Route::post('/banners', [BannerController::class, 'store']);
    Route::delete('/banners/{id}', [BannerController::class, 'destroy']);

});
