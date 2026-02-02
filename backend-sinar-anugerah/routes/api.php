<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CompanyProfileController;

Route::get('/company-profile', [CompanyProfileController::class, 'index']);
Route::post('/company-profile', [CompanyProfileController::class, 'store']);
