import React from "react";
import { MdClose } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import useAuthForm from "../../hooks/useAuthForm";
import loginImg from "../../assets/login.png";
import LazyLoadImg from "../Common/LazyLoadImg";

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
      <div className="bg-login mx-4 w-full max-w-[520px] rounded-lg shadow-lg relative flex overflow-hidden">
        {/* <LazyLoadImg
          src={loginImg}
          alt=""
          width={279}
          height={456}
          className="hidden md:block object-cover"
        /> */}
        <div className="w-full max-h-[456px] h-full py-9 px-6 md:px-9 flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-lg md:text-2xl text-white font-semibold">
              {formState === "forgot"
                ? "Password Recovery"
                : formState === "reset"
                ? "Reset Password"
                : formState === "signup"
                ? "Create Account"
                : "Welcome to ArchikS88AI"}
            </h1>
            <button
              className="text-3xl font-bold text-gray-500 hover:text-gray-300"
              onClick={onClose}
            >
              <MdClose />
            </button>
          </div>

          {errors.general && (
            <div className="mt-2 text-red-500 text-sm">{errors.general}</div>
          )}

          {successMessage && (
            <div className="mt-2 text-green-500 text-sm">{successMessage}</div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 text-white bg-primary hover:border-secondary rounded-xl border ${
                  errors.email
                    ? "border-red-500"
                    : "border-blue-light focus:outline-none focus:ring-0.5 focus:ring-secondary"
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
                    className={`w-full px-4 py-3 pr-12 text-white bg-primary hover:border-secondary rounded-xl border ${
                      errors.password
                        ? "border-red-500"
                        : "border-blue-light focus:outline-none focus:ring-0.5 focus:ring-secondary"
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
                    className="absolute right-3 text-xl top-1/2 -translate-y-1/2 text-gray-150 "
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    {errors.password}
                  </span>
                )}

                {/* Forgot Password for Login State */}
                {formState === "login" && (
                  <div className="mt-2 text-right">
                    <button
                      type="button"
                      onClick={() => setFormState("forgot")}
                      className="text-blue-light hover:underline text-sm"
                    >
                      Forgot Password?
                    </button>
                  </div>
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
                    className={`w-full px-4 py-3 pr-12 text-white bg-primary hover:border-secondary rounded-xl border ${
                      errors.newPassword
                        ? "border-red-500"
                        : "border-blue-light focus:outline-none focus:ring-0.5 focus:ring-secondary"
                    }`}
                    placeholder="New Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-150 "
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
                    className={`w-full px-4 py-3 pr-12 text-white bg-primary hover:border-secondary rounded-xl border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-blue-light focus:outline-none focus:ring-0.5 focus:ring-secondary"
                    }`}
                    placeholder="Confirm Password"
                  />
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-500 text-xs">
                    {errors.confirmPassword}
                  </span>
                )}

                {/* Forgot Password for Signup State */}
                {formState === "signup" && (
                  <div className="mt-2 text-right">
                    <button
                      type="button"
                      onClick={() => setFormState("forgot")}
                      className="text-blue-light hover:underline text-sm"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2 rounded-full transition ${
                  isLoading
                    ? "bg-gray-600 cursor-not-allowed text-white"
                    : "bg-blue-light text-white font-semibold hover:bg-secondary"
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

              <div className="text-center text-sm text-gray-400 mt-2">
                {formState === "login" && (
                  <>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setFormState("signup")}
                      className="text-blue-light hover:underline"
                    >
                      Sign Up
                    </button>
                  </>
                )}

                {formState === "signup" && (
                  <button
                    type="button"
                    onClick={() => setFormState("login")}
                    className="text-blue-light hover:underline"
                  >
                    Back to Login
                  </button>
                )}

                {formState === "forgot" && (
                  <button
                    type="button"
                    onClick={() => setFormState("login")}
                    className="text-blue-light hover:underline"
                  >
                    Back to Login
                  </button>
                )}

                {formState === "reset" && (
                  <button
                    type="button"
                    onClick={() => setFormState("login")}
                    className="text-blue-light hover:underline"
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
