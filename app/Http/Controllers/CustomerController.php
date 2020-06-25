<?php

namespace App\Http\Controllers;

use App\Booking;
use App\Customer;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    public function settings()
    {
        return view('pages.customer.settings');
    }

    public function index()
    {
        return view('pages.customer.dashboard');
    }

    public function profile()
    {
        return view('pages.customer.profile');
    }

    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if ($request->hasFile('image')) {

            // ? Making new file name for the image
            $fileName = time() . '.' . $request->image->extension();

            // ? Storing the image and getting the file path
            // $path = $request->image->storeAs('images/customer-profile-image', $fileName, 'public');
            $path = $request->image->storeAs('customer-profile-image', $fileName, 'images');

            $this->deleteOldImage();

            Customer::find(auth()->user()->id)->update(['image' => $path]);
        }
        return redirect()->back()->with('success', 'You have successfully upload image.');
    }

    /**
     * ? Checking if the current image of the customer is default or not
     * ? If it's not default then delete the previous one
     */
    public function deleteOldImage()
    {
        if (auth()->user()->image != "images/customer-profile-image/default.png") {
            // Storage::delete('public/' . auth()->user()->image);
            Storage::disk('images')->delete(auth()->user()->image);
        }
    }

    public function updateProfile(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:customers,email,' . Auth::id(),
        ]);

        if ($request->id == Auth::id()) {
            $customer = Customer::find(Auth::id());
            // $customer->name = $request->name;
            $customer->email = $request->email;
            $customer->gender = $request->gender;
            $customer->mobile = $request->mobile;
            $customer->save();
        };

        return redirect()->back()->with('successfully-profile-updated', 'You have successfully updated your profile.');
    }

    // public function changePassword(Request $request)
    // {
    //     // dd($request['id']);
    //     $request->validate([
    //         'current-password' => ['required', new MatchOldPassword],
    //         'new-password' => ['required','min:8', 'string'],
    //         'confirm-password' => ['same:new-password']
    //     ]);

    //     // Validator::make($request->all(), [
    //     //     'current-password' => ['required', new MatchOldPassword],
    //     //     'new-password' => 'required|min:8|string',
    //     //     'Confirm Password' => 'same:new-password'
    //     // ])->validateWithBag('changePasswordError');

    //     if ($request->id == Auth::id()) {
    //         Customer::find(Auth::id())->update(['password' => Hash::make($request['new-password'])]);
    //     };

    //     return redirect()->back()->with('successfully-password-updated', 'You have successfully updated your profile.');
    // }

    public function changePassword()
    {
        return view('pages.customer.change-password');
    }

    public function updatePassword(Request $request)
    {
        if (empty($request->get('current-password'))) {
            return redirect()->back()->with("error", "Current Password is required. Please try again.");
        }

        // The passwords matches
        if (!(Hash::check($request->get('current-password'), Auth::user()->password))) {
            return redirect()->back()->with("error", "Your Current Password does not matches with the password you provided. Please try again.");
        }

        //current-password and new-password are same
        if (strcmp($request->get('current-password'), $request->get('new-password')) == 0) {
            return redirect()->back()->with("error", "New Password cannot be same as your current password. Please choose a different password.");
        }

        $request->validate([
            'current-password' => 'required|string',
            'new-password' => 'required|string|min:8',
            'confirm-password' => ['same:new-password']
        ]);

        //Change Password
        $user = Auth::user();
        $user->password = bcrypt($request->get('new-password'));
        $user->save();

        return redirect()->back()->with("successfully-password-updated", "Password changed successfully !");
    }

    public function bookingHistory()
    {
        // $bookingHistory = Booking::where(
        //     [
        //         ['customer_id', Auth::id()],
        //         ['journey_date', '<', Carbon::now()]
        //     ]
        // )->paginate(10);

        $bookingHistory = Booking::where(
            [
                ['journey_date', '<', Carbon::now()]
            ]
        )->paginate(10);

        return view('pages.customer.booking.booking-history', compact('bookingHistory'));
    }

    public function upcomingBooking()
    {
        // $upcomingBookings = Booking::where(
        //     [
        //         ['customer_id', Auth::id()],
        //         ['journey_date', '>', Carbon::now()],
        //         ['booking_status_id', '!=', '4'],
        //     ]
        // )->paginate(10);

        $upcomingBookings = Booking::where(
            [
                ['journey_date', '>', Carbon::now()],
                ['booking_status_id', '!=', '4'],
            ]
        )->paginate(10);

        return view('pages.customer.booking.upcoming-booking', compact('upcomingBookings'));
    }

    public function viewBooking(Request $request)
    {
        $booking = Booking::findOrFail($request->id);

        // return view('pages.customer.booking.view-booking', compact('booking'));
        return view('pages.customer.booking.view-booking-details', compact('booking'));
    }

    public function viewUpcomingBookingDetails(Request $request)
    {
        $booking = Booking::findOrFail($request->id);

        // return view('pages.customer.booking.view-booking', compact('booking'));
        return view('pages.customer.booking.view-upcoming-booking-details', compact('booking'));
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
    }

    public function show(Customer $customer)
    {
    }

    public function edit(Customer $customer)
    {
    }

    public function destroy(Customer $customer)
    {
    }
}
