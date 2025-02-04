import React, { createContext, useState, useContext } from "react";
import Replicate from "replicate";
import { GoogleGenerativeAI } from "@google/generative-ai";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const [generatedImages, setGeneratedImages] = useState([]); // Store AI-generated images
  const [generatedVideos, setGeneratedVideos] = useState([]); // Store AI-generated videos

  // Initialize Replicate API (Replace with your API Key)
  const replicate = new Replicate({ auth: "your_replicate_api_key" });

  // Initialize Gemini AI (Replace with your API Key)
  const genAI = new GoogleGenerativeAI("your_gemini_api_key");

  /** GENERATE AI IMAGE FUNCTION */
  const generateAIImage = async (prompt) => {
    try {
      const output = await replicate.run("stability-ai/stable-diffusion", {
        input: { prompt },
      });
      setGeneratedImages([...generatedImages, output]);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  /** GENERATE AI VIDEO FUNCTION */
  const generateAIVideo = async (prompt) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      setGeneratedVideos([...generatedVideos, response]);
    } catch (error) {
      console.error("Error generating video:", error);
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        activeTab,
        setActiveTab,
        generateAIImage,
        generateAIVideo,
        generatedImages,
        generatedVideos,
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
