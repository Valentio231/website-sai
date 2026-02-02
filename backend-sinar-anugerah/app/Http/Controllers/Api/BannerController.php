<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    // Menampilkan semua banner
    public function index()
    {
        return response()->json(Banner::all());
    }

    // Menyimpan banner baru
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'image' => 'nullable|string',
        ]);

        $banner = Banner::create($data);

        return response()->json([
            'message' => 'Banner created successfully',
            'data' => $banner
        ]);
    }

    // Hapus banner
    public function destroy($id)
    {
        Banner::destroy($id);

        return response()->json([
            'message' => 'Banner deleted successfully'
        ]);
    }
}
