<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CompanyProfile;
use Illuminate\Http\Request;

class CompanyProfileController extends Controller
{
    // Menampilkan profil perusahaan
    public function index()
    {
        $company = CompanyProfile::first();
        return response()->json($company);
    }

    // Menyimpan / update profil perusahaan
    public function store(Request $request)
    {
        $data = $request->validate([
            'company_name' => 'required|string',
            'description'  => 'required|string',
            'vision'       => 'nullable|string',
            'mission'      => 'nullable|string',
            'address'      => 'nullable|string',
            'phone'        => 'nullable|string',
            'email'        => 'nullable|email',
        ]);

        $company = CompanyProfile::updateOrCreate(
            ['id' => 1],
            $data
        );

        return response()->json([
            'message' => 'Company profile saved successfully',
            'data' => $company
        ]);
    }
}
