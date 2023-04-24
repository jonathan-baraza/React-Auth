import React from "react";

const Register = () => {
  return (
    <div className="w-full bg-[#1f8dff] h-screen flex items-center p-4">
      <div className="w-5/6 md:w-1/3 mx-auto bg-[#115499] shadow-2xl flex flex-col space-y-4 p-8 rounded-2xl text-white">
        <div className="text-3xl">Register</div>
        <div className="flex flex-col">
          <label>Username</label>
          <input type="text" className="bg-white rounded-2xl mt-1 mb-3 p-2" />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input type="text" className="bg-white rounded-2xl mt-1 mb-3 p-2" />
        </div>
        <div className="flex flex-col">
          <label>Confirm Password</label>
          <input type="text" className="bg-white rounded-2xl mt-1 mb-3 p-2" />
        </div>
        <button className="rounded p-3">Sign Up</button>
        <div className="text-center">
          Already registered?{" "}
          <span className="underline  hover:text-[#1f8dff] hover:cursor-pointer">
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
