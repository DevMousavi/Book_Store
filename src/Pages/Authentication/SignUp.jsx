import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

function SignUp({userName,setUserName,email,setEmail,password,setPassword,handleSubmit}) {
  return (
    <div className="flex justify-center min-h-[566px] bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-2xl shadow-md">
        <div className="flex justify-center border-solid border-2 border-neutral-200 rounded-full mx-24 p-3 shadow-sm">
          <BiSolidUserCircle className="text-zinc-600 text-8xl " />
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <div className="mb-4">
              <input
                type="name"
                placeholder="نام کاربری خود را وارد کنید..."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید..."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="رمز خود را وارد کنید..."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="mr-2">قوانین سایت را می پذیرم.</span>
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-green-500 rounded-lg shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              عضویت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
