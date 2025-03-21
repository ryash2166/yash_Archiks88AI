import React from "react";
import { MdClose } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import loginImg from "../../assets/login.png";
import useAuthForm from "../../hooks/useAuthForm";

const Login = ({ isVisible, onClose }) => {
  const {
    formState,
    setFormState,
    email,
    setEmail,
    password,
    setPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    errors,
    isLoading,
    successMessage,
    handleSubmit,
  } = useAuthForm(onClose);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-30"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-login mx-4 w-full max-w-[720px] rounded-lg shadow-lg relative flex overflow-hidden">
        <img
          src={loginImg}
          alt=""
          width={279}
          height={456}
          className="hidden md:block object-cover"
        />
        <button
          className="absolute top-10 md:top-9 right-3 text-2xl md:text-[30px] font-bold text-gray-300"
          onClick={onClose}
        >
          <MdClose />
        </button>
        <div className="w-full max-h-[456px] h-full py-9 px-6 md:px-9 flex flex-col">
          <h1 className="text-lg md:text-[22px] text-white leading-8 font-semibold">
            {formState === "forgot"
              ? "Password Recovery"
              : formState === "reset"
              ? "Reset Password"
              : formState === "signup"
              ? "Create Account"
              : "Welcome"}
          </h1>

          {errors.general && (
            <div className="mt-2 text-red-500 text-sm">{errors.general}</div>
          )}
          
          {successMessage && (
            <div className="mt-2 text-green-500 text-sm">{successMessage}</div>
          )}

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 text-white bg-[#0d1116] rounded-xl border ${
                  errors.email ? "border-red-500" : "border-[#445b5c]"
                }`}
                placeholder="Enter your email"
                disabled={formState === "reset"}
              />
              {errors.email && (
                <span className="text-red-500 text-xs">{errors.email}</span>
              )}
            </div>

            {!["forgot", "reset"].includes(formState) && (
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-4 py-3 pr-12 text-white bg-[#0d1116] rounded-xl border ${
                      errors.password ? "border-red-500" : "border-[#445b5c]"
                    }`}
                    placeholder={
                      formState === "signup"
                        ? "Password (min 8 chars with mix)"
                        : "Password"
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727485]"
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    {errors.password}
                  </span>
                )}
              </div>
            )}

            {formState === "reset" && (
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={`w-full px-4 py-3 pr-12 text-white bg-[#0d1116] rounded-xl border ${
                      errors.newPassword ? "border-red-500" : "border-[#445b5c]"
                    }`}
                    placeholder="New Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727485]"
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </button>
                </div>
                {errors.newPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.newPassword}
                  </span>
                )}
              </div>
            )}

            {["signup", "reset"].includes(formState) && (
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full px-4 py-3 pr-12 text-white bg-[#0d1116] rounded-xl border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-[#445b5c]"
                    }`}
                    placeholder="Confirm Password"
                  />
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2 rounded-full transition ${
                  isLoading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-400 to-blue-500"
                }`}
              >
                {isLoading
                  ? "Processing..."
                  : {
                      login: "Sign In",
                      signup: "Create Account",
                      forgot: "Continue",
                      reset: "Reset Password",
                    }[formState]}
              </button>

              <div className="text-center text-sm text-gray-400">
                {formState === "login" && (
                  <>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setFormState("signup")}
                      className="text-green-400 hover:underline"
                    >
                      Sign Up
                    </button>{" "}
                    •{" "}
                    <button
                      type="button"
                      onClick={() => setFormState("forgot")}
                      className="text-green-400 hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </>
                )}

                {formState === "signup" && (
                  <button
                    type="button"
                    onClick={() => setFormState("login")}
                    className="text-green-400 hover:underline"
                  >
                    Back to Login
                  </button>
                )}

                {formState === "forgot" && (
                  <button
                    type="button"
                    onClick={() => setFormState("login")}
                    className="text-green-400 hover:underline"
                  >
                    Back to Login
                  </button>
                )}
                
                {formState === "reset" && (
                  <button
                    type="button"
                    onClick={() => setFormState("login")}
                    className="text-green-400 hover:underline"
                  >
                    Back to Login
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;