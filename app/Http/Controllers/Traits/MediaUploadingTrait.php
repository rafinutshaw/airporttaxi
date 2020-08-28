<?php

namespace App\Http\Controllers\Traits;

use Illuminate\Http\Request;

trait MediaUploadingTrait
{
    public function storeMedia(Request $request, string $storagePath = "app/uploads", string $fileName = 'file')
    {
        // $allowedFileExtension = ['pdf', 'jpeg', 'png', 'jpg', 'gif', 'svg', 'docx', 'doc', 'xls', 'xlsx', 'csv', 'ppt'];
        // Validates file size
        if (request()->has('size')) {
            $this->validate(request(), [
                'file' => 'max:' . request()->input('size') * 1024,
            ]);
        }

        // If width or height is preset - we are validating it as an image
        if (request()->has('width') || request()->has('height')) {
            $this->validate(request(), [
                'file' => sprintf(
                    'image|mimes:jpeg,png,jpg,gif,svg|max:1024|dimensions:max_width=%s,max_height=%s',
                    request()->input('width', 100000),
                    request()->input('height', 100000)
                ),
            ]);
        }

        $path = storage_path($storagePath);

        try {
            if (!file_exists($path)) {
                mkdir($path, 0755, true);
            }
        } catch (\Exception $e) {
            return $e;
        }

        // $file = $request->file('file');
        // $name = uniqid() . '_' . trim($file->getClientOriginalName());
        $file = $request->file($fileName);
        $name = uniqid() . '.' . $file->extension();

        $file->move($path, $name);

        return response()->json([
            'name'          => $name,
            // 'original_name' => $file->getClientOriginalName(),
        ]);
    }
}
