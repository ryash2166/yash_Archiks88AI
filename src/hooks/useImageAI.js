import { useState } from "react";
import { useNavigation } from "../Context/NavigationContext";

const useImageAI = () => {
  const [mainTab, setMainTab] = useState("Text to Image");
  const [opacity, setOpacity] = useState(1);
  const [formState, setFormState] = useState({
    prompt: "",
    count: 1,
  });

  const {
    sendImageRequest,
    generatedImages,
    loading,
    error,
    selectedRatio,
    setSelectedRatio,
  } = useNavigation();

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const maxScroll = 75;
    setOpacity(Math.max(1 - scrollTop / maxScroll, 0));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendImageRequest(formState.prompt, {
        aspect_ratio: selectedRatio,
        count: formState.count,
      });
      setFormState((prev) => ({ ...prev, prompt: "" }));
    } catch (error) {
      console.error("Generation failed:", error);
    }
  };

  const results = generatedImages.map((img) => ({
    url: typeof img === "string" ? img : img.url,
    prompt: typeof img === "string" ? formState.prompt : img.prompt,
  }));

  return {
    mainTab,
    setMainTab,
    opacity,
    handleScroll,
    formState,
    setFormState,
    handleSubmit,
    results,
    error,
    selectedRatio,
    setSelectedRatio,
  };
};

export default useImageAI;
