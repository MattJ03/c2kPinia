<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validatedData = $request->validate([
          'email' => 'required|email|unique:users|max:20',
          'password' => 'required|max:20|password',
        ]);

        $user = User::create([
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);
        return response()->json(['message' => 'user created']);
    }

    public function login(Request $request) {
        $validatedData = $request->validate([
           'email' => 'required|email|unique:users|max:20',
           'password' => 'required|max:20|password',        
        ]);

        if(!Auth::attempt($validatedData)) {
            return response()->json(['message' => 'invalid credentials'], 401);
        }

        $user = Auth::user();

        $token = $user->createToken('auth_token')->plainTextToken;
}

   public function logout(Request $request) {
    $deletedUser = $request->user()->currentAccessToken()->delete();
    return response()->json(['message' => 'user deleted']);
   }

}
