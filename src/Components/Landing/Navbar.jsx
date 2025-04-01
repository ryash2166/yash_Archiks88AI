import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Menu } from 'lucide-react';

function LandingNavbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <a href="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">ResearchAI</span>
      </a>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/how-it-works">How it Works</NavLink>
        <NavLink href="/examples">Examples</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" className="text-white hover:text-purple-400">
          Sign In
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </a>
  );
}

function Button({ children, className, variant, size }) {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors";
  const variantClasses = {
    default: "",
    ghost: "bg-transparent hover:bg-white/10",
    outline: "bg-transparent border border-white/20 hover:bg-white/10"
  };
  const sizeClasses = {
    default: "",
    sm: "text-sm",
    lg: "px-6 py-3 text-lg",
    icon: "p-2 flex items-center justify-center"
  };

  const classes = `${baseClasses} ${variantClasses[variant || 'default']} ${sizeClasses[size || 'default']} ${className || ''}`;

  return (
    <button className={classes}>
      {children}
    </button>
  );
}

export default LandingNavbar;