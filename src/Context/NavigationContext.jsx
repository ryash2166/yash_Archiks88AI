// import React, { createContext, useState, useContext, useEffect } from "react";
// import personPlaceholder from "../assets/person.png"; // Adjust path as needed
// import { apiList } from "../api/apiList";

// const NavigationContext = createContext();

// export const NavigationProvider = ({ children }) => {
//   const [activeTab, setActiveTab] = useState("Home");
//   const [mediaItems, setMediaItems] = useState([]); // Store media items
//   const [generatedImages, setGeneratedImages] = useState([]); // Store AI-generated images
//   const [generatedVideos, setGeneratedVideos] = useState([]); // Store AI-generated videos
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [selectedRatio, setSelectedRatio] = useState("1:1");

//   // Auth state
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [authLoading, setAuthLoading] = useState(true);

//   // Profile state
//   const [profile, setProfile] = useState({
//     name: "User",
//     bio: "Welcome to our platform! How about giving my work a like?",
//     avatar: personPlaceholder,
//     credits: 0,
//     images: [],
//   });
//   const [isProfileLoading, setIsProfileLoading] = useState(true);

//   const token = localStorage.getItem("token");

//   // Check authentication status on initial load
//   useEffect(() => {
//     checkAuthStatus();
//   }, []);

//   // Check if user is authenticated
//   const checkAuthStatus = async () => {
//     setAuthLoading(true);
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setIsAuthenticated(false);
//       setAuthLoading(false);
//       return false;
//     }

//     try {
//       const res = await fetch(apiList.checkAuthStatus, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (res.ok) {
//         const data = await res.json();
//         setProfile(data);
//         setIsAuthenticated(true);
//         setAuthLoading(false);
//         return true;
//       } else {
//         // Token is invalid or expired
//         localStorage.removeItem("token");
//         setIsAuthenticated(false);
//         setAuthLoading(false);
//         return false;
//       }
//     } catch (error) {
//       console.error("Auth check error:", error);
//       setIsAuthenticated(false);
//       setAuthLoading(false);
//       return false;
//     }
//   };

//   // Login function
//   const login = async (email, password) => {
//     try {
//       setAuthLoading(true);
//       const response = await fetch(apiList.login, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Login failed");
//       }

//       if (data.token) {
//         localStorage.setItem("token", data.token);
//         setIsAuthenticated(true);
//         setAuthLoading(false);
//         window.location.replace("/dashboard");
//         await fetchProfile();
//         return { success: true };
//       }

//       return { success: false, error: "No token received" };
//     } catch (error) {
//       console.error("Login error:", error);
//       return { success: false, error: error.message };
//     } finally {
//       setAuthLoading(false);
//     }
//   };

//   // Signup function
//   const signup = async (email, password, confirmPassword) => {
//     try {
//       setAuthLoading(true);
//       const response = await fetch(apiList.signup, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password, confirmPassword }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Signup failed");
//       }

//       if (data.token) {
//         localStorage.setItem("token", data.token);
//         setIsAuthenticated(true);
//         setAuthLoading(false);
//         window.location.replace("/dashboard");
//         await fetchProfile();
//         return { success: true };
//       }

//       return { success: false, error: "No token received" };
//     } catch (error) {
//       console.error("Signup error:", error);
//       return { success: false, error: error.message };
//     } finally {
//       setAuthLoading(false);
//     }
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//     setProfile({
//       name: "Person.Name",
//       bio: "Create my bio: eg.'Found me! How about giving my work a like?'",
//       avatar: personPlaceholder,
//       credits: 0,
//       images: [],
//     });
//     window.location.replace("/");
//     return { success: true };
//   };

//   // Request password reset
//   const requestPasswordReset = async (email) => {
//     try {
//       setAuthLoading(true);
//       const response = await fetch(apiList.requestPasswordReset, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Email not found");
//       }

//       // If email exists, show the reset password form
//       return { success: true, message: "Email exists" };
//     } catch (error) {
//       console.error("Password reset error:", error);
//       return { success: false, error: error.message };
//     } finally {
//       setAuthLoading(false);
//     }
//   };

//   // Reset password
//   const resetPassword = async (email, newPassword, confirmPassword) => {
//     try {
//       setAuthLoading(true);
//       const response = await fetch(apiList.resetPassword, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password: newPassword, confirmPassword }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Password reset failed");
//       }

//       return { success: true };
//     } catch (error) {
//       console.error("Password reset error:", error);
//       // Handle specific error message
//       if (error.message.includes("different from old")) {
//         return {
//           success: false,
//           error: "New password must be different from your old password",
//         };
//       }
//       return { success: false, error: error.message };
//     } finally {
//       setAuthLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMedia();
//   }, []);

//   const fetchMedia = async () => {
//     try {
//       // const token = localStorage.getItem("token");
//       // if (!token) throw new Error("Authentication required");

//       setLoading(true);
//       setError(null);

//       const response = await fetch(apiList.media, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           // Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) throw new Error("Failed to fetch media");

//       const data = await response.json();
//       setMediaItems(data);
//       setLoading(false);
//     } catch (err) {
//       console.error("Media fetch error:", err);
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   // Fetch profile data
//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     try {
//       setIsProfileLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setIsAuthenticated(false);
//         setIsProfileLoading(false);
//         return { success: false, error: "No token found" };
//       }

//       const res = await fetch(apiList.fetchProfile, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (res.ok) {
//         const data = await res.json();
//         setProfile(data);
//         setIsAuthenticated(true);
//         return { success: true, data };
//       } else {
//         console.error("Failed to fetch profile");
//         setError("Failed to fetch profile");
//         setIsAuthenticated(false);
//         return { success: false, error: "Failed to fetch profile" };
//       }
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       setError(`Error fetching profile: ${error.message}`);
//       setIsAuthenticated(false);
//       return { success: false, error: error.message };
//     } finally {
//       setIsProfileLoading(false);
//     }
//   };

//   // Update profile
//   const updateProfile = async (updatedProfile) => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       const res = await fetch(apiList.updateProfile, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           name: updatedProfile.name || "User",
//           bio: updatedProfile.bio || "",
//           avatar: updatedProfile.avatar || personPlaceholder,
//         }),
//       });
//       if (res.ok) {
//         const updatedData = await res.json();
//         setProfile(updatedData);
//         return { success: true, data: updatedData };
//       } else {
//         const errorData = await res.json();
//         setError(errorData.message || "Failed to update profile");
//         return { success: false, error: errorData.message };
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       setError(`Error updating profile: ${error.message}`);
//       return { success: false, error: error.message };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle image download
//   const downloadImage = (imageUrl, fileName) => {
//     const link = document.createElement("a");
//     link.href = imageUrl;
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const deleteImage = async (imageId) => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         return { success: false, error: "Authentication required" };
//       }

//       const response = await fetch(`${apiList.deleteImage}${imageId}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Failed to delete image");
//       }

//       // Refresh profile to get updated images
//       await fetchProfile();

//       return { success: true };
//     } catch (error) {
//       console.error("Error deleting image:", error);
//       setError(`Error deleting image: ${error.message}`);
//       return { success: false, error: error.message };
//     } finally {
//       setLoading(false);
//     }
//   };

//   /** GENERATE AI IMAGE FUNCTION - Original method */
//   const generateAIImage = async (prompt) => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         return { success: false, error: "Authentication required" };
//       }

//       const response = await fetch(apiList.generateAIImage, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ prompt }),
//       });

//       if (!response.ok) throw new Error("Generation failed");

//       const output = await response.json();
//       setGeneratedImages((prev) => [...prev, ...output]);

//       // Refresh profile to get updated images
//       await fetchProfile();

//       return { success: true, data: output };
//     } catch (error) {
//       setError(error.message);
//       return { success: false, error: error.message };
//     } finally {
//       setLoading(false);
//     }
//   };

//   /** SEND IMAGE REQUEST - From ImageAI component */
//   const sendImageRequest = async (prompt, options) => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       return { success: false, error: "Authentication required" };
//     }

//     try {
//       setLoading(true);
//       const response = await fetch(apiList.sendImageRequest, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           prompt,
//           options: {
//             ...options,
//             count: options.count || 1,
//           },
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Image generation failed");
//       }

//       const data = await response.json();
//       const urlsArray = Array.isArray(data.imageUrls) ? data.imageUrls : [];

//       // Update generated images state
//       setGeneratedImages((prev) => [
//         ...prev,
//         ...urlsArray.map((url) => ({ url, prompt })),
//       ]);

//       // Refresh profile to get updated images
//       await fetchProfile();

//       return { success: true, data: urlsArray };
//     } catch (error) {
//       console.error("API Error:", error);
//       setError(error.message);
//       return { success: false, error: error.message };
//     } finally {
//       setLoading(false);
//     }
//   };

//   /** GENERATE AI VIDEO FUNCTION */
//   const generateAIVideo = async (prompt) => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");

//       if (!token) {
//         return { success: false, error: "Authentication required" };
//       }

//       // Placeholder implementation until you uncomment the above
//       console.log("Video generation requested with prompt:", prompt);
//       setError("Video generation implementation is commented out");
//       return { success: false, error: "Video generation not implemented" };
//     } catch (error) {
//       setError(`Error generating video: ${error.message}`);
//       console.error("Error generating video:", error);
//       return { success: false, error: error.message };
//     } finally {
//       setLoading(false);
//     }
//   };

//   const clearError = () => setError(null);

//   const clearGeneratedContent = () => {
//     setGeneratedImages([]);
//     setGeneratedVideos([]);
//   };

//   return (
//     <NavigationContext.Provider
//       value={{
//         // Navigation
//         activeTab,
//         setActiveTab,
//         token,

//         // Authentication
//         isAuthenticated,
//         authLoading,
//         login,
//         signup,
//         logout,
//         requestPasswordReset,
//         resetPassword,
//         checkAuthStatus,

//         // Content generation
//         generatedImages,
//         setGeneratedImages,
//         generatedVideos,
//         loading,
//         error,
//         generateAIImage,
//         generateAIVideo,
//         clearError,
//         clearGeneratedContent,

//         // Media related values and functions
//         mediaItems,
//         fetchMedia,
//         setMediaItems,
//         setError,
//         setLoading,

//         // Profile related values and functions
//         profile,
//         setProfile,
//         isProfileLoading,
//         fetchProfile,
//         updateProfile,
//         downloadImage,
//         deleteImage,

//         // Added from ImageAI
//         sendImageRequest,
//         selectedRatio,
//         setSelectedRatio,
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

import React, { createContext, useState, useContext, useEffect } from "react";
import personPlaceholder from "../assets/person.png"; // Adjust path as needed
import { apiList } from "../api/apiList";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const [mediaItems, setMediaItems] = useState([]); // Store media items
  const [generatedImages, setGeneratedImages] = useState([]); // Store AI-generated images
  const [generatedVideos, setGeneratedVideos] = useState([]); // Store AI-generated videos
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRatio, setSelectedRatio] = useState("1:1");

  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  // Profile state
  const [profile, setProfile] = useState({
    name: "User",
    bio: "Welcome to our platform! How about giving my work a like?",
    avatar: personPlaceholder,
    credits: 0,
    images: [],
  });
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  const token = localStorage.getItem("token");

  // Enhanced fetch function with error handling
  const safeFetch = async (url, options = {}) => {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      });

      // Handle different response statuses
      if (!response.ok) {
        const errorData = await response.text();
        let errorMessage;

        try {
          const parsed = JSON.parse(errorData);
          errorMessage =
            parsed.error || parsed.message || `HTTP ${response.status}`;
        } catch {
          errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        }

        throw new Error(errorMessage);
      }

      return response;
    } catch (error) {
      // Handle network errors (including service worker fetch failures)
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        console.warn(
          "Network request failed, possibly due to connectivity issues:",
          error
        );
        throw new Error(
          "Network connection failed. Please check your internet connection."
        );
      }
      throw error;
    }
  };

  // Check authentication status on initial load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Check if user is authenticated
  const checkAuthStatus = async () => {
    setAuthLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      setIsAuthenticated(false);
      setAuthLoading(false);
      return false;
    }

    try {
      const res = await safeFetch(apiList.checkAuthStatus, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setProfile(data);
      setIsAuthenticated(true);
      setAuthLoading(false);
      return true;
    } catch (error) {
      console.error("Auth check error:", error);
      // Don't remove token immediately on network errors
      if (!error.message.includes("Network connection failed")) {
        localStorage.removeItem("token");
      }
      setIsAuthenticated(false);
      setAuthLoading(false);
      return false;
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      setAuthLoading(true);
      const response = await safeFetch(apiList.login, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        setAuthLoading(false);
        window.location.replace("/dashboard");
        await fetchProfile();
        return { success: true };
      }

      return { success: false, error: "No token received" };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: error.message };
    } finally {
      setAuthLoading(false);
    }
  };

  // Signup function
  const signup = async (email, password, confirmPassword) => {
    try {
      setAuthLoading(true);
      const response = await safeFetch(apiList.signup, {
        method: "POST",
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        setAuthLoading(false);
        window.location.replace("/dashboard");
        await fetchProfile();
        return { success: true };
      }

      return { success: false, error: "No token received" };
    } catch (error) {
      console.error("Signup error:", error);
      return { success: false, error: error.message };
    } finally {
      setAuthLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setProfile({
      name: "Person.Name",
      bio: "Create my bio: eg.'Found me! How about giving my work a like?'",
      avatar: personPlaceholder,
      credits: 0,
      images: [],
    });
    window.location.replace("/");
    return { success: true };
  };

  // Request password reset
  const requestPasswordReset = async (email) => {
    try {
      setAuthLoading(true);
      const response = await safeFetch(apiList.requestPasswordReset, {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      return { success: true, message: "Email exists" };
    } catch (error) {
      console.error("Password reset error:", error);
      return { success: false, error: error.message };
    } finally {
      setAuthLoading(false);
    }
  };

  // Reset password
  const resetPassword = async (email, newPassword, confirmPassword) => {
    try {
      setAuthLoading(true);
      const response = await safeFetch(apiList.resetPassword, {
        method: "PUT",
        body: JSON.stringify({ email, password: newPassword, confirmPassword }),
      });

      const data = await response.json();
      return { success: true };
    } catch (error) {
      console.error("Password reset error:", error);
      // Handle specific error message
      if (error.message.includes("different from old")) {
        return {
          success: false,
          error: "New password must be different from your old password",
        };
      }
      return { success: false, error: error.message };
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await safeFetch(apiList.media, {
        method: "GET",
      });

      const data = await response.json();
      setMediaItems(data);
      setLoading(false);
    } catch (err) {
      console.error("Media fetch error:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  // Fetch profile data
  useEffect(() => {
    if (isAuthenticated) {
      fetchProfile();
    }
  }, [isAuthenticated]);

  const fetchProfile = async () => {
    try {
      setIsProfileLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAuthenticated(false);
        setIsProfileLoading(false);
        return { success: false, error: "No token found" };
      }

      const res = await safeFetch(apiList.fetchProfile, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setProfile(data);
      setIsAuthenticated(true);
      return { success: true, data };
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError(`Error fetching profile: ${error.message}`);
      // Don't set authenticated to false on network errors
      if (!error.message.includes("Network connection failed")) {
        setIsAuthenticated(false);
      }
      return { success: false, error: error.message };
    } finally {
      setIsProfileLoading(false);
    }
  };

  // Update profile
  const updateProfile = async (updatedProfile) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await safeFetch(apiList.updateProfile, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: updatedProfile.name || "User",
          bio: updatedProfile.bio || "",
          avatar: updatedProfile.avatar || personPlaceholder,
        }),
      });

      const updatedData = await res.json();
      // Update only profile fields without overwriting images
      setProfile((prev) => ({
        ...prev,
        name: updatedData.name,
        bio: updatedData.bio,
        avatar: updatedData.avatar,
        credits: updatedData.credits || prev.credits,
      }));
      return { success: true, data: updatedData };
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(`Error updating profile: ${error.message}`);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Handle image download
  const downloadImage = (imageUrl, fileName) => {
    try {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      setError("Failed to download image");
    }
  };

  const deleteImage = async (imageId) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        return { success: false, error: "Authentication required" };
      }

      const response = await safeFetch(`${apiList.deleteImage}${imageId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update images locally instead of refetching the entire profile
      setProfile((prev) => ({
        ...prev,
        images: prev.images.filter((img) => img._id !== imageId),
      }));

      return { success: true };
    } catch (error) {
      console.error("Error deleting image:", error);
      setError(`Error deleting image: ${error.message}`);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  /** GENERATE AI IMAGE FUNCTION - Original method */
  const generateAIImage = async (prompt) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        return { success: false, error: "Authentication required" };
      }

      const response = await safeFetch(apiList.generateAIImage, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt }),
      });

      const output = await response.json();
      setGeneratedImages((prev) => [...prev, ...output]);

      // After generating images, fetch only the new images
      if (output && output.length > 0) {
        try {
          const imageResponse = await safeFetch(apiList.fetchUserImages, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const imageData = await imageResponse.json();
          // Update only the images part of the profile
          setProfile((prev) => ({
            ...prev,
            images: imageData,
          }));
        } catch (imageError) {
          console.error("Error fetching new images:", imageError);
        }
      }

      return { success: true, data: output };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  /** SEND IMAGE REQUEST - From ImageAI component */
  const sendImageRequest = async (prompt, options) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return { success: false, error: "Authentication required" };
    }

    try {
      setLoading(true);
      const response = await safeFetch(apiList.sendImageRequest, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          prompt,
          options: {
            ...options,
            count: options.count || 1,
          },
        }),
      });

      const data = await response.json();
      const urlsArray = Array.isArray(data.imageUrls) ? data.imageUrls : [];

      // Update generated images state
      setGeneratedImages((prev) => [
        ...prev,
        ...urlsArray.map((url) => ({ url, prompt })),
      ]);

      // Fetch only new images instead of the entire profile
      if (urlsArray.length > 0) {
        try {
          const imageResponse = await safeFetch(apiList.fetchUserImages, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const imageData = await imageResponse.json();
          // Update only the images part of the profile
          setProfile((prev) => ({
            ...prev,
            images: imageData,
          }));
        } catch (imageError) {
          console.error("Error fetching new images:", imageError);
        }
      }

      return { success: true, data: urlsArray };
    } catch (error) {
      console.error("API Error:", error);
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  /** GENERATE AI VIDEO FUNCTION */
  const generateAIVideo = async (prompt) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        return { success: false, error: "Authentication required" };
      }

      // Placeholder implementation until you uncomment the above
      console.log("Video generation requested with prompt:", prompt);
      setError("Video generation implementation is commented out");
      return { success: false, error: "Video generation not implemented" };
    } catch (error) {
      setError(`Error generating video: ${error.message}`);
      console.error("Error generating video:", error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  const clearGeneratedContent = () => {
    setGeneratedImages([]);
    setGeneratedVideos([]);
  };

  return (
    <NavigationContext.Provider
      value={{
        // Navigation
        activeTab,
        setActiveTab,
        token,

        // Authentication
        isAuthenticated,
        authLoading,
        login,
        signup,
        logout,
        requestPasswordReset,
        resetPassword,
        checkAuthStatus,

        // Content generation
        generatedImages,
        setGeneratedImages,
        generatedVideos,
        loading,
        error,
        generateAIImage,
        generateAIVideo,
        clearError,
        clearGeneratedContent,

        // Media related values and functions
        mediaItems,
        fetchMedia,
        setMediaItems,
        setError,
        setLoading,

        // Profile related values and functions
        profile,
        setProfile,
        isProfileLoading,
        fetchProfile,
        updateProfile,
        downloadImage,
        deleteImage,

        // Added from ImageAI
        sendImageRequest,
        selectedRatio,
        setSelectedRatio,
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
