<?php

use App\Http\Controllers\WorkOrderController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::get('/ordenes', [WorkOrderController::class, 'index'])->name('ordenes.index');
Route::get('/ordenes/nueva', [WorkOrderController::class, 'create'])->name('ordenes.create');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';


