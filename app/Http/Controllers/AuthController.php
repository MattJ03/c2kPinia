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
    $request->validate([
      'email' => 'required|email',
      'password' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();
    
    if(!Hash::check($user->password, $request->password)) {
       return response()->json(['message' => 'invalid credentials'], 401);
    };


    $token = $user->createToken('auth_token')->plainTextToken;
    Log::info(['message' => 'Token created successfully']);

    return response()->json([
       'token_type' => 'Bearer',
       'token' => $token,
       'user' => $user,
    ]);
 
}

   public function logout(Request $request) {
    $deletedUser = $request->user()->currentAccessToken()->delete();
    return response()->json(['message' => 'user deleted']);
   }

}
