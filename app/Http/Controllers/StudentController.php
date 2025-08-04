<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use function PHPUnit\Framework\isEmpty;

class StudentController extends Controller
{
    public function index(Request $request)
    {

        $search = $request->input('search');
        $query = Student::query();
        if ($search) {
            $query->where('first_name', 'LIKE', "%{$search}%")
                ->orWhere('last_name', 'LIKE', "%{$search}%");
      $studentSearch= $query->paginate(15);
      return response()->json($studentSearch, 200);
        }

        $students = Student::all();
        if($students.isEmpty()){
            return response()->json(['message' => 'No Students Found'], 404);
        }
        return response()->json($students, 200);

    }

    public function store(Request $request) {
        $validateData = $request->validate([
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'email' => 'required|email|max:50|unique:students',
            'phone' => 'required'
        ]);
    }

}
