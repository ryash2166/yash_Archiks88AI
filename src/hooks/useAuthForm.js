import { useState, useEffect } from "react";
import { useNavigation } from "../Context/NavigationContext";

// Email validation regex
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Password validation regex (min 8 chars, 1 upper, 1 lower, 1 number, 1 special)
const validatePassword = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};

const useAuthForm = (onClose) => {
  const [formState, setFormState] = useState("login"); // login, signup, forgot, reset
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const { login, signup, requestPasswordReset, resetPassword } = useNavigation();

  // Reset form when modal is closed
  useEffect(() => {
    if (!onClose) resetForm();
  }, [onClose]);

  const resetForm = () => {
    setFormState("login");
    setEmail("");
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setErrors({});
    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format";
    }

    if (formState === "login" && !password) {
      newErrors.password = "Password is required";
    }

    if (formState === "signup") {
      if (!password) {
        newErrors.password = "Password is required";
      } else if (!validatePassword(password)) {
        newErrors.password =
          "Password must be at least 8 characters long, contain one uppercase, one lowercase, one number, and one special character";
      }
      if (password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    if (formState === "reset") {
      if (!newPassword) {
        newErrors.newPassword = "New password is required";
      } else if (!validatePassword(newPassword)) {
        newErrors.newPassword = "Invalid password format";
      }
      if (newPassword !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      let result;
      switch (formState) {
        case "login":
          result = await login(email, password);
          if (result.success) onClose();
          break;
        case "signup":
          result = await signup(email, password, confirmPassword);
          if (result.success) onClose();
          break;
        case "forgot":
          result = await requestPasswordReset(email);
          if (result.success) {
            setFormState("reset");
            setSuccessMessage("Email verified. Please set your new password.");
          }
          break;
        case "reset":
          result = await resetPassword(email, newPassword, confirmPassword);
          if (result.success) {
            setSuccessMessage("Password reset successful!");
            setTimeout(() => {
              setFormState("login");
              setSuccessMessage("");
              setPassword("");
              setNewPassword("");
              setConfirmPassword("");
            }, 2000);
          }
          break;
        default:
          break;
      }

      if (result && !result.success) {
        setErrors({ general: result.error });
      }
    } catch (error) {
      setErrors({
        general: error.message.includes("different from old")
          ? "New password must be different from your current password"
          : error.message || "An unexpected error occurred",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formState,
    setFormState,
    email,
    setEmail,
    password,
    setPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    errors,
    isLoading,
    successMessage,
    handleSubmit,
  };
};

export default useAuthForm;
