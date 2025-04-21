import React from "react";
import { motion } from "framer-motion";
import { ImageIcon, VideoIcon } from "lucide-react";
import { FloatingPaper } from "./FloatingPaper";
import { RoboAnimation } from "./RoboAnimation";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative hero-height flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Generate Your Mind Creation with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                AI Power
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Write your prompts and let our AI transform them into engaging
            images and videos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/ImageAI">
              <Button
                className="bg-[#6c6cf5] hover:bg-[#5252e5] text-white px-8 flex items-center gap-2 py-3"
              >
                <ImageIcon className="h-5 w-5" />
                Image AI
              </Button>
            </Link>
            <Link to="/VideoAI">
              <Button
                variant="outline"
                className="text-white border-purple-500 hover:bg-purple-500/20 px-8 flex items-center gap-2 py-3"
              >
                <VideoIcon className="h-5 w-5" />
                Video AI
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
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
