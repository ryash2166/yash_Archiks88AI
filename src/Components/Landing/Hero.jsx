import React from "react";
import { motion } from "framer-motion";
import { ImageIcon, VideoIcon } from "lucide-react";
import { FloatingPaper } from "./FloatingPaper";
import { RoboAnimation } from "./RoboAnimation";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-50px)] md:h-[calc(100vh-50px)] flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          > 
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
              Create
              <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-sky-600">
                {" "}
                Viral AI Power Videos
              </span>
              {" "} In Seconds With Just A Text Prompt Or Image.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          >
            Write your prompts and let our AI transform them into engaging
            images and videos.

            {/* AI Image Generator, Text-to-Video, Image-to-Video and endless creative possibilities. */}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <Link to="/ImageAI">
              <Button className="bg-gradient-to-r from-purple-700 to-sky-600 hover:bg-gradient-to-l hover:from-purple-900 hover:to-sky-700 text-white md:px-8 flex items-center gap-2 py-3">
                <ImageIcon className="h-5 w-5" />
                Image AI
              </Button>
            </Link>
            <Link to="/VideoAI">
              <Button
                variant="outline"
                className="text-white border-purple-500 hover:bg-purple-500/20 md:px-8 flex items-center gap-2 py-3"
              >
                <VideoIcon className="h-5 w-5" />
                Video AI
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="absolute bottom-0 right-0 w-96 h-96 hidden sm:block">
        <RoboAnimation />
      </div>
    </div>
  );
};

function Button({ children, className, variant, size }) {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors";
  const variantClasses = {
    default: "",
    ghost: "bg-transparent hover:bg-white/10",
    outline: "bg-transparent border border-white/20 hover:bg-white/10",
  };
  const sizeClasses = {
    default: "",
    sm: "text-sm",
    lg: "px-6 py-3 text-lg",
    icon: "p-2 flex items-center justify-center",
  };

  const classes = `${baseClasses} ${variantClasses[variant || "default"]} ${
    sizeClasses[size || "default"]
  } ${className || ""}`;

  return <button className={classes}>{children}</button>;
}

export default Hero;
