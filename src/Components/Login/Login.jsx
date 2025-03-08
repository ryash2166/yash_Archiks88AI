import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import login from "../../assets/login.png";
import { useNavigation } from "../../Context/NavigationContext";

const Login = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { 
    login: contextLogin, 
    signup: contextSignup, 
    requestPasswordReset, 
    // fetchProfile
  } = useNavigation();

  useEffect(() => {
    if (!isVisible) {
      setIsSignUp(false);
      setIsForgotPassword(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");
    }
  }, [isVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      let result;
      
      if (isForgotPassword) {
        result = await requestPasswordReset(email);
        if (result.success) {
          alert("Password reset link has been sent to your email.");
          onClose();
        } else {
          setError(result.error || "Failed to send reset email");
        }
      } else if (isSignUp) {
        result = await contextSignup(email, password, confirmPassword);
        if (result.success) {
          // await fetchProfile();
          // window.location.href = '/profile'; // Redirect to profile
          onClose();
        } else {
          setError(result.error || "Signup failed");
        }
      } else {
        result = await contextLogin(email, password);
        if (result.success) {
          // await fetchProfile();
          // window.location.href = '/profile'; // Redirect to profile
          onClose();
        } else {
          setError(result.error || "Login failed");
        }
      }
    } catch (error) {
      setError(error.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;
  
  const isFormValid = email && (!isForgotPassword ? password : true);
  
  return (
    <div
      id="popup-container"
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-30"
      onClick={(e) => e.target.id === "popup-container" && onClose()}
    >
      <div className="bg-login mx-4 w-full max-w-[720px] max-h-[456px] h-full rounded-lg shadow-lg relative flex overflow-hidden">
        <img
          src={login}
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
        <div className="w-full max-h-[456px] text-[#727485] text-sm h-full py-9 px-6 md:px-9 flex flex-col">
          <h1 className="text-lg md:text-[22px] text-white leading-8 font-semibold">
            {isForgotPassword
              ? "Password recovery"
              : isSignUp
              ? "Create an account"
              : "Welcome to Archiks88 AI"}
          </h1>
          <p className="mt-2">
            {isForgotPassword
              ? "Enter your email and we'll email you a password recovery code"
              : isSignUp
              ? "Already have an account? "
              : "Don't have an account? "}
            {!isForgotPassword && (
              <button
                onClick={() => setIsSignUp((prev) => !prev)}
                className="text-[#72e528]"
              >
                {isSignUp ? "Sign In" : "Sign up for free"}
              </button>
            )}
          </p>
          
          {error && (
            <div className="mt-2 text-red-500 text-sm">
              {error}
            </div>
          )}
          
          <div className="mt-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-white bg-[#0d1116] rounded-xl focus:border-[1px] focus:outline-none border-[#445b5c] text-sm leading-6"
              placeholder="Enter Email Address"
            />
          </div>
          {!isForgotPassword && (
            <>
              <div className="mt-4">
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-[52px] text-white bg-[#0d1116] rounded-xl focus:border-[1px] focus:outline-none border-[#445b5c] text-sm leading-6"
                    placeholder={
                      isSignUp ? "Password (at least 8 characters)" : "Password"
                    }
                    maxLength={64}
                  />
                  <div
                    onClick={() => setIsPasswordVisible((prev) => !prev)}
                    className="absolute top-[calc(50%-10px)] text-[#727485] ml-[calc(100%-36px)] cursor-pointer"
                  >
                    {isPasswordVisible ? (
                      <IoMdEye className="w-5 h-5" />
                    ) : (
                      <IoMdEyeOff className="w-5 h-5" />
                    )}
                  </div>
                </div>
                {isSignUp && (
                  <div className="mt-4">
                    <div className="relative">
                      <input
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-3 pr-[52px] text-white bg-[#0d1116] rounded-xl focus:border-[1px] border-[#445b5c] focus:outline-none border-0 text-sm leading-6"
                        placeholder="Confirm Password"
                        maxLength={64}
                      />
                      <div
                        onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
                        className="absolute top-[calc(50%-10px)] text-[#727485] ml-[calc(100%-36px)] cursor-pointer"
                      >
                        {isConfirmPasswordVisible ? (
                          <IoMdEye className="w-5 h-5" />
                        ) : (
                          <IoMdEyeOff className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
          <div className="mt-auto text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!isFormValid || isLoading}
              className={`w-[250px] h-auto m-0 py-[9px] leading-6 text-sm rounded-full px-4 transition ${
                isFormValid && !isLoading
                  ? "bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] text-black"
                  : "bg-[#333a45] text-[#727485] cursor-not-allowed"
              }`}
            >
              {isLoading ? "Loading..." : (
                isForgotPassword
                  ? "Reset Password"
                  : isSignUp
                  ? "Next"
                  : "Sign In"
              )}
            </button>
          </div>
          {!isSignUp && !isForgotPassword && (
            <div className="mt-5 text-[#999bac] text-center">
              <button
                className="mx-[6px] cursor-pointer text-inherit hover:text-[#72e528]"
                onClick={() => setIsForgotPassword(true)}
              >
                Forgot Password
              </button>
            </div>
          )}
          {isForgotPassword && (
            <div className="mt-5 text-[#999bac] text-center">
              <button
                className="mx-[6px] cursor-pointer text-inherit hover:text-[#72e528]"
                onClick={() => setIsForgotPassword(false)}
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;