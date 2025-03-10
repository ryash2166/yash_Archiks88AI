import React, { createContext, useState, useContext, useEffect } from "react";
import personPlaceholder from "../assets/person.png"; // Adjust path as needed

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Home");
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
    name: "Person.Name",
    bio: "Create my bio: eg.'Found me! How about giving my work a like?'",
    avatar: personPlaceholder,
    credits: 0,
    images: [],
  });
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  const url = "http://localhost:3000";

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
      const res = await fetch(`${url}/api/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setProfile(data);
        setIsAuthenticated(true);
        setAuthLoading(false);
        return true;
      } else {
        // Token is invalid or expired
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setAuthLoading(false);
        return false;
      }
    } catch (error) {
      console.error("Auth check error:", error);
      setIsAuthenticated(false);
      setAuthLoading(false);
      return false;
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      setAuthLoading(true);
      const response = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
        await fetchProfile();
        setIsAuthenticated(true);
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
      const response = await fetch(`${url}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
        await fetchProfile();
        setIsAuthenticated(true);
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
    return { success: true };
  };

  // Request password reset
  const requestPasswordReset = async (email) => {
    try {
      setAuthLoading(true);
      const response = await fetch(`${url}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Password reset request failed");
      }

      return { success: true, message: data.message || "Reset email sent" };
    } catch (error) {
      console.error("Password reset error:", error);
      return { success: false, error: error.message };
    } finally {
      setAuthLoading(false);
    }
  };

  // Fetch profile data
  useEffect(() => {
    fetchProfile();
  },[])
    const fetchProfile = async () => {
      try {
        setIsProfileLoading(true);
        const token = localStorage.getItem("token");

        if (!token) {
          setIsAuthenticated(false);
          setIsProfileLoading(false);
          return { success: false, error: "No token found" };
        }

        const res = await fetch(`${url}/api/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setProfile(data);
          setIsAuthenticated(true);
          return { success: true, data };
        } else {
          console.error("Failed to fetch profile");
          setError("Failed to fetch profile");
          setIsAuthenticated(false);
          return { success: false, error: "Failed to fetch profile" };
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(`Error fetching profile: ${error.message}`);
        setIsAuthenticated(false);
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
      const res = await fetch(`${url}/api/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: updatedProfile.name || "User",
          bio: updatedProfile.bio || "",
          avatar: updatedProfile.avatar || personPlaceholder,
        }),
      });
      if (res.ok) {
        const updatedData = await res.json();
        setProfile(updatedData);
        return { success: true, data: updatedData, };
      } else {
        const errorData = await res.json();
        setError(errorData.message || "Failed to update profile");
        return { success: false, error: errorData.message };
      }
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
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /** GENERATE AI IMAGE FUNCTION - Original method */
  const generateAIImage = async (prompt) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        return { success: false, error: "Authentication required" };
      }

      const response = await fetch(`${url}/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error("Generation failed");

      const output = await response.json();
      setGeneratedImages((prev) => [...prev, ...output]);

      // Refresh profile to get updated images
      await fetchProfile();

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
      const response = await fetch(`${url}/api/generate-image`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Image generation failed");
      }

      const data = await response.json();
      const urlsArray = Array.isArray(data.imageUrls) ? data.imageUrls : [];

      // Update generated images state
      setGeneratedImages((prev) => [
        ...prev,
        ...urlsArray.map((url) => ({ url, prompt })),
      ]);

      // Refresh profile to get updated images
      await fetchProfile();

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

        // Authentication
        isAuthenticated,
        authLoading,
        login,
        signup,
        logout,
        requestPasswordReset,
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

        // Profile related values and functions
        profile,
        setProfile,
        isProfileLoading,
        fetchProfile,
        updateProfile,
        downloadImage,

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
