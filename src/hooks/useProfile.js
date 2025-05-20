// // import { useState, useEffect } from "react";
// // import { useNavigation } from "../Context/NavigationContext";

// // const useProfile = () => {
// //   const {
// //     profile,
// //     isProfileLoading,
// //     fetchProfile,
// //     updateProfile,
// //     downloadImage,
// //     deleteImage,
// //   } = useNavigation();
// //   const [tempProfile, setTempProfile] = useState(profile);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [displayedImages, setDisplayedImages] = useState([]);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const imagesPerPage = 12;

// //   useEffect(() => {
// //     if (profile?.images) {
// //       // Sort images by creation date (newest first)
// //       const sortedImages = [...profile.images].sort((a, b) => {
// //         // Assuming each image has a createdAt timestamp
// //         // If no timestamp, fallback to sorting by _id (which often contains timestamp)
// //         const dateA = new Date(a.createdAt || a._id);
// //         const dateB = new Date(b.createdAt || b._id);
// //         return dateB - dateA;
// //       });
// //       const startIndex = 0;
// //       const endIndex = currentPage * imagesPerPage;
// //       setDisplayedImages(sortedImages.slice(startIndex, endIndex));
// //     }
// //   }, [profile.images, currentPage]);

// //   const loadMoreImages = () => {
// //     setCurrentPage((prev) => prev + 1);
// //   };

// //   const openModal = () => {
// //     setTempProfile(profile);
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setTempProfile((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleAvatarChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file && file.size <= 500 * 1024) {
// //       const reader = new FileReader();
// //       reader.onload = () => {
// //         setTempProfile((prev) => ({ ...prev, avatar: reader.result }));
// //       };
// //       reader.readAsDataURL(file);
// //     } else {
// //       alert("Image is too large. Please choose an image under 500KB.");
// //     }
// //   };

// //   const saveProfile = async (e) => {
// //     e.preventDefault();
// //     closeModal();
// //     const result = await updateProfile(tempProfile);
// //     if (result.success) await fetchProfile();
// //     else console.error("Failed to update profile:", result.error);
// //   };

// //   const clearBio = () => {
// //     setTempProfile((prev) => ({ ...prev, bio: "" }));
// //   };

// //   const handleModalClick = (e) => {
// //     if (e.target.id === "modal-overlay") closeModal();
// //   };

// //   const handleDownload = (imageUrl, fileName) => {
// //     downloadImage(imageUrl, fileName);
// //   };

// //   const handleDelete = async (imageId) => {
// //     if (window.confirm("Are you sure you want to delete this image?")) {
// //       const result = await deleteImage(imageId);
// //       if (!result.success)
// //         console.error("Failed to delete image:", result.error);
// //     }
// //   };

// //   return {
// //     profile,
// //     isProfileLoading,
// //     tempProfile,
// //     isModalOpen,
// //     displayedImages,
// //     currentPage,
// //     openModal,
// //     closeModal,
// //     loadMoreImages,
// //     handleInputChange,
// //     handleAvatarChange,
// //     saveProfile,
// //     clearBio,
// //     handleModalClick,
// //     handleDownload,
// //     handleDelete,
// //   };
// // };

// // export default useProfile;

// import { useState, useEffect } from "react";
// import { useNavigation } from "../Context/NavigationContext";

// const useProfile = () => {
//   const {
//     profile,
//     isProfileLoading,
//     fetchProfile,
//     updateProfile,
//     downloadImage,
//     deleteImage,
//   } = useNavigation();
//   const [tempProfile, setTempProfile] = useState(profile);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [displayedImages, setDisplayedImages] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const imagesPerPage = 12;

//   // Add states for delete confirmation modal
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [imageToDelete, setImageToDelete] = useState(null);

//   useEffect(() => {
//     if (profile?.images) {
//       // Sort images by creation date (newest first)
//       const sortedImages = [...profile.images].sort((a, b) => {
//         // Assuming each image has a createdAt timestamp
//         // If no timestamp, fallback to sorting by _id (which often contains timestamp)
//         const dateA = new Date(a.createdAt || a._id);
//         const dateB = new Date(b.createdAt || b._id);
//         return dateB - dateA;
//       });
//       const startIndex = 0;
//       const endIndex = currentPage * imagesPerPage;
//       setDisplayedImages(sortedImages.slice(startIndex, endIndex));
//     }
//   }, [profile.images, currentPage]);

//   const loadMoreImages = () => {
//     setCurrentPage((prev) => prev + 1);
//   };

//   const openModal = () => {
//     setTempProfile(profile);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setTempProfile((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.size <= 2 * 1024 * 1024) { // 2MB
//       const reader = new FileReader();
//       reader.onload = () => {
//         setTempProfile((prev) => ({ ...prev, avatar: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     } else {
//       alert("Image is too large. Please choose an image under 2MB.");
//     }
//   };

//   const saveProfile = async (e) => {
//     e.preventDefault();
//     closeModal();
//     const result = await updateProfile(tempProfile);
//     if (result.success) await fetchProfile();
//     else console.error("Failed to update profile:", result.error);
//   };

//   const clearBio = () => {
//     setTempProfile((prev) => ({ ...prev, bio: "" }));
//   };

//   const handleModalClick = (e) => {
//     if (e.target.id === "modal-overlay") closeModal();
//   };

//   const handleDownload = (imageUrl, fileName) => {
//     downloadImage(imageUrl, fileName);
//   };

//   // Updated delete-related functions
//   const openDeleteModal = (imageId) => {
//     setImageToDelete(imageId);
//     setIsDeleteModalOpen(true);
//   };

//   const closeDeleteModal = () => {
//     setIsDeleteModalOpen(false);
//     setImageToDelete(null);
//   };

//   const confirmDelete = async () => {
//     if (imageToDelete) {
//       const result = await deleteImage(imageToDelete);
//       if (!result.success) {
//         console.error("Failed to delete image:", result.error);
//       }
//       closeDeleteModal();
//     }
//   };

//   return {
//     profile,
//     isProfileLoading,
//     tempProfile,
//     isModalOpen,
//     displayedImages,
//     currentPage,
//     isDeleteModalOpen,
//     imageToDelete,
//     openModal,
//     closeModal,
//     loadMoreImages,
//     handleInputChange,
//     handleAvatarChange,
//     saveProfile,
//     clearBio,
//     handleModalClick,
//     handleDownload,
//     openDeleteModal,
//     closeDeleteModal,
//     confirmDelete,
//   };
// };

// export default useProfile;

import { useState, useEffect } from "react";
import { useNavigation } from "../Context/NavigationContext";

const useProfile = () => {
  const {
    profile,
    isProfileLoading,
    updateProfile,
    downloadImage,
    deleteImage,
  } = useNavigation();
  const [tempProfile, setTempProfile] = useState(profile);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  // Add states for delete confirmation modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);

  useEffect(() => {
    if (profile?.images) {
      // Sort images by creation date (newest first)
      const sortedImages = [...profile.images].sort((a, b) => {
        // Assuming each image has a createdAt timestamp
        // If no timestamp, fallback to sorting by _id (which often contains timestamp)
        const dateA = new Date(a.createdAt || a._id);
        const dateB = new Date(b.createdAt || b._id);
        return dateB - dateA;
      });
      const startIndex = 0;
      const endIndex = currentPage * imagesPerPage;
      setDisplayedImages(sortedImages.slice(startIndex, endIndex));
    }
  }, [profile.images, currentPage]);

  const loadMoreImages = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const openModal = () => {
    setTempProfile(profile);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) { // 2MB
      const reader = new FileReader();
      reader.onload = () => {
        setTempProfile((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Image is too large. Please choose an image under 2MB.");
    }
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    closeModal();
    const result = await updateProfile(tempProfile);
    if (result.success) {
      // Don't fetch the entire profile, just update the local state
      // This avoids reloading all images unnecessarily
      console.log("Profile updated successfully");
    } else {
      console.error("Failed to update profile:", result.error);
    }
  };

  const clearBio = () => {
    setTempProfile((prev) => ({ ...prev, bio: "" }));
  };

  const handleModalClick = (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  };

  const handleDownload = (imageUrl, fileName) => {
    downloadImage(imageUrl, fileName);
  };

  // Updated delete-related functions
  const openDeleteModal = (imageId) => {
    setImageToDelete(imageId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setImageToDelete(null);
  };

  const confirmDelete = async () => {
    if (imageToDelete) {
      const result = await deleteImage(imageToDelete);
      if (!result.success) {
        console.error("Failed to delete image:", result.error);
      }
      closeDeleteModal();
    }
  };

  return {
    profile,
    isProfileLoading,
    tempProfile,
    isModalOpen,
    displayedImages,
    currentPage,
    isDeleteModalOpen,
    imageToDelete,
    openModal,
    closeModal,
    loadMoreImages,
    handleInputChange,
    handleAvatarChange,
    saveProfile,
    clearBio,
    handleModalClick,
    handleDownload,
    openDeleteModal,
    closeDeleteModal,
    confirmDelete,
  };
};

export default useProfile;
