import React, { createContext, useState, useContext } from "react";
// import Replicate from "replicate";
// import { GoogleGenerativeAI } from "@google/generative-ai";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Home");
  // const [generatedImages, setGeneratedImages] = useState([]); // Store AI-generated images
  // const [generatedVideos, setGeneratedVideos] = useState([]); // Store AI-generated videos

  // /** GENERATE AI IMAGE FUNCTION */
  // const generateAIImage = async (prompt) => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("/api/generate", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ prompt }),
  //     });

  //     if (!response.ok) throw new Error("Generation failed");
      
  //     const output = await response.json();
  //     setGeneratedImages(prev => [...prev, ...output]);
      
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // /** GENERATE AI VIDEO FUNCTION */
  // const generateAIVideo = async (prompt) => {
  //   try {
  //     const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  //     const result = await model.generateContent(prompt);
  //     const response = await result.response;
  //     setGeneratedVideos([...generatedVideos, response]);
  //   } catch (error) {
  //     console.error("Error generating video:", error);
  //   }
  // };

  return (
    <NavigationContext.Provider
      value={{
        activeTab,
        setActiveTab,
        // generateAIImage,
        // generateAIVideo,
        // generatedImages,
        // generatedVideos,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};



// import React, { createContext, useState, useContext } from "react";

// const NavigationContext = createContext();

// export const NavigationProvider = ({ children }) => {
//   const [activeTab, setActiveTab] = useState("Home");
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const apiUrl = "http://localhost:3000";

//   const login = async (email, password) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`${apiUrl}/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || "Login failed");
//       localStorage.setItem("token", data.token);
//       setUser(data.user);
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const signup = async (email, password, confirmPassword) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`${apiUrl}/auth/signup`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password, confirmPassword }),
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || "Signup failed");
//       localStorage.setItem("token", data.token);
//       setUser(data.user);
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   const resetPassword = async (email) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(`${apiUrl}/reset-password`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });
//       if (!response.ok) throw new Error("Failed to send reset email");
//       alert("Password reset link sent to your email");
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <NavigationContext.Provider
//       value={{
//         activeTab,
//         setActiveTab,
//         user,
//         isLoading,
//         login,
//         signup,
//         logout,
//         resetPassword,
//       }}
//     >
//       {children}
//     </NavigationContext.Provider>
//   );
// };

// export const useNavigation = () => {
//   const context = useContext(NavigationContext);
//   if (!context) {
//     throw new Error("useNavigation must be used within a NavigationProvider");
//   }
//   return context;
// };
