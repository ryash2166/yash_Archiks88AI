// import React, { useState, useEffect } from "react";
// import { MdClose } from "react-icons/md";
// import login from "../../assets/login.png";
// import { IoMdEye, IoMdEyeOff } from "react-icons/io";

// const Login = ({ isVisible, onClose }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
//     useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [isForgotPassword, setIsForgotPassword] = useState(false);

//   // Reset to Login view when the popup is reopened
//   useEffect(() => {
//     if (!isVisible) {
//       setIsSignUp(false);
//       setIsForgotPassword(false);
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//     }
//   }, [isVisible]);

//   if (!isVisible) return null;

//   const PasswordVisibility = () => {
//     setIsPasswordVisible((prev) => !prev);
//   };

//   const ConfirmPasswordVisibility = () => {
//     setIsConfirmPasswordVisible((prev) => !prev);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isForgotPassword) {
//       console.log("Reset password link sent to:", email);
//     } else if (isSignUp) {
//       console.log("Sign up with:", email, password);
//     } else {
//       console.log("Sign in with:", email, password);
//     }
//   };

//   const isFormValid = email && (!isForgotPassword ? password : true);

//   return (
//     <div
//       id="popup-container"
//       className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-30"
//       onClick={(e) => e.target.id === "popup-container" && onClose()}
//     >
//       <div className="bg-login mx-4 w-full max-w-[720px] max-h-[456px] h-full rounded-lg shadow-lg relative flex overflow-hidden">
//         <img
//           src={login}
//           alt=""
//           width={279}
//           height={456}
//           className="hidden md:block object-cover"
//         />
//         <button
//           className="absolute top-10 md:top-9 right-3 text-2xl md:text-[30px] font-bold text-gray-300"
//           onClick={onClose}
//         >
//           <MdClose />
//         </button>
//         <div className="w-full max-h-[456px] text-[#727485] text-sm h-full py-9 px-6 md:px-9 flex flex-col">
//           <h1 className="text-lg md:text-[22px] text-white leading-8 font-semibold">
//             {isForgotPassword
//               ? "Password recovery"
//               : isSignUp
//               ? "Create an account"
//               : "Welcome to Archiks88 AI"}
//           </h1>
//           <p className="mt-2">
//             {isForgotPassword
//               ? "Enter your email and we'll email you a password recovery code"
//               : isSignUp
//               ? "Already have an account? "
//               : "Don't have an account? "}
//             {!isForgotPassword && (
//               <button
//                 onClick={() => setIsSignUp((prev) => !prev)}
//                 className="text-[#72e528]"
//               >
//                 {isSignUp ? "Sign In" : "Sign up for free"}
//               </button>
//             )}
//           </p>
//           <div className="mt-8">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 text-white bg-[#0d1116] rounded-xl focus:border-[1px] focus:outline-none border-[#445b5c] text-sm leading-6"
//               placeholder="Enter Email Address"
//             />
//           </div>
//           {!isForgotPassword && (
//             <>
//               <div className="mt-4">
//                 <div className="relative">
//                   <input
//                     type={isPasswordVisible ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full px-4 py-3 pr-[52px] text-white bg-[#0d1116] rounded-xl focus:border-[1px] focus:outline-none border-[#445b5c] text-sm leading-6"
//                     placeholder={
//                       isSignUp ? "Password (at least 8 characters)" : "Password"
//                     }
//                     maxLength={64}
//                   />
//                   <div
//                     onClick={PasswordVisibility}
//                     className="absolute top-[calc(50%-10px)] text-[#727485] ml-[calc(100%-36px)] cursor-pointer"
//                   >
//                     {isPasswordVisible ? (
//                       <IoMdEye className="w-5 h-5" />
//                     ) : (
//                       <IoMdEyeOff className="w-5 h-5" />
//                     )}
//                   </div>
//                 </div>
//                 {isSignUp && (
//                   <div className="mt-4">
//                     <div className="relative">
//                       <input
//                         type={isConfirmPasswordVisible ? "text" : "password"}
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         className="w-full px-4 py-3 pr-[52px] text-white bg-[#0d1116] rounded-xl focus:border-[1px] border-[#445b5c] focus:outline-none border-0 text-sm leading-6"
//                         placeholder="Confirm Password"
//                         maxLength={64}
//                       />
//                       <div
//                         onClick={ConfirmPasswordVisibility}
//                         className="absolute top-[calc(50%-10px)] text-[#727485] ml-[calc(100%-36px)] cursor-pointer"
//                       >
//                         {isConfirmPasswordVisible ? (
//                           <IoMdEye className="w-5 h-5" />
//                         ) : (
//                           <IoMdEyeOff className="w-5 h-5" />
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//           <div className="mt-auto text-center">
//             <button
//               type="submit"
//               onClick={handleSubmit}
//               disabled={!isFormValid}
//               className={`w-[250px] h-auto m-0 py-[9px] leading-6 text-sm rounded-full px-4 transition ${
//                 isFormValid
//                   ? "bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] text-black"
//                   : "bg-[#333a45] text-[#727485] cursor-not-allowed"
//               }`}
//             >
//               {isForgotPassword
//                 ? "Reset Password"
//                 : isSignUp
//                 ? "Next"
//                 : "Sign In"}
//             </button>
//           </div>
//           {!isSignUp && !isForgotPassword && (
//             <div className="mt-5 text-[#999bac] text-center">
//               <button
//                 className="mx-[6px] cursor-pointer text-inherit hover:text-[#72e528]"
//                 onClick={() => setIsForgotPassword(true)}
//               >
//                 Forgot Password
//               </button>
//             </div>
//           )}
//           {isForgotPassword && (
//             <div className="mt-5 text-[#999bac] text-center">
//               <button
//                 className="mx-[6px] cursor-pointer text-inherit hover:text-[#72e528]"
//                 onClick={() => setIsForgotPassword(false)}
//               >
//                 Back to Login
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import login from "../../assets/login.png";

const Login = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!isVisible) {
      setIsSignUp(false);
      setIsForgotPassword(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  }, [isVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);

    const url = "http://localhost:3000";
    try {
      let response;
      if (isForgotPassword) {
        console.log("Reset password link sent to:", email);
        return;
      } else if (isSignUp) {
        response = await fetch(`${url}/auth/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, confirmPassword }),
        });
      } else {
        response = await fetch(`${url}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = '/profile'; // Redirect to profile
      }

      onClose();
    } catch (error) {
      alert(error.message);
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
