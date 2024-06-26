import { BiSolidUserCircle } from "react-icons/bi";

const Login = ({email , setEmail,password , setPassword , handleSubmit}) => {



  return (
    <div className="flex justify-center min-h-[510px] bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-2xl shadow-md">
        <div className="flex justify-center border-solid border-2 border-neutral-200 rounded-full mx-24 p-3 shadow-sm">
          <BiSolidUserCircle className="text-zinc-600 text-8xl " />
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="ایمیل خود را وارد کنید..."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="رمز خود را وارد کنید..."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <label className="flex items-center text-gray-700 my-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="mr-2">ذخیره اطلاعات برای ورود بعدی</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline my-2">
              رمز عبور را فراموش کرده‌اید؟
            </a>
          </div>
          <div>
            <button
              className="w-full px-4 py-2 font-semibold text-white bg-green-500 rounded-lg shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              ورود به سایت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
