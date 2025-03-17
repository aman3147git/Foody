import React, { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuLoader2 } from "react-icons/lu";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form className="flex flex-col gap-5 md:p-8  max-w-md rounded-lg mx-4">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2">Reset Password</h1>
          <p className="text-sm text-gray-500">
            Enter your new password to reset 
          </p>
        </div>
        <div className="relative">
          <input
            type="password"
            
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new Password"
            className="p-2  pl-10 focus-visible:ring-1 "
          />
          <RiLockPasswordLine className="absolute inset-y-2 left-2 text-gray-500 text-2xl" />
        </div>
        {
            loading?<button disabled className='p-2 bg-slate-700 text-white w-full flex items-center justify-center'><LuLoader2 className='mr-2 h-4 w-4 animate-spin'/>wait..</button>:<button type='submit' className='p-2 bg-slate-700 text-white w-full'>Reset</button>
        }
      </form>
    </div>
  );
};

export default ResetPassword;
