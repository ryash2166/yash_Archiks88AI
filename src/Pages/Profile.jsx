import React, { useEffect, useState } from "react";
import ProfileTabs from "../Components/ProfileTabs/ProfileTabs";
import personPlaceholder from "../assets/person.png";
import { MdClose } from "react-icons/md";
import Button from "../Components/Common/Button";
import { FiDownload, FiTrash2 } from "react-icons/fi";
import ResponsiveMasonryWrapper from "../Components/Wrapper/ResponsiveMasonryWrapper";
import Masonry from "react-responsive-masonry";
import useProfile from "../hooks/useProfile";
import { ProfileSkeleton } from "../Components/Skeleton/SkeletonLoader";
import DeleteModal from "../Components/Modal/DeleteModal";
import DeleteIcon from "../icons/delete";
import EditIcon from "../icons/edit";
import LazyLoadImg from "../Components/Common/LazyLoadImg";
import { LazyLoadComponent } from "react-lazy-load-image-component";


const Profile = () => {
  const {
    profile,
    isProfileLoading,
    tempProfile,
    isModalOpen,
    displayedImages,
    openModal,
    closeModal,
    loadMoreImages,
    handleInputChange,
    handleAvatarChange,
    saveProfile,
    clearBio,
    handleModalClick,
    handleDownload,
    isDeleteModalOpen,
    openDeleteModal,
    closeDeleteModal,
    confirmDelete,
  } = useProfile();

  if (isProfileLoading) {
    return <ProfileSkeleton />;
  }

  return (
    <div className="relative h-lvh w-full overflow-auto">
      <div className="lg:pl-64 pt-0 m-0 mt-3 bg-primary">
        <div className="w-full h-52 mb-7">
          {/* <div className="bg-cover bg-[url(https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/user-teaser-2-DmrbcmSD.jpg)] bg-center rounded-2xl h-full max-md:h-auto p-8 mx-5 flex items-center justify-between max-md:flex-col gap-3  ">
            <div className="flex max-md:flex-col max-md:items-center max-md:justify-center max-md:w-full">
              <div className="md:mr-6 w-28 h-28">
                <LazyLoadImg
                  src={profile.avatar || personPlaceholder}
                  alt="User Avatar"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col gap-2 max-md:pt-2 max-md:items-center justify-center text-white">
                <div className="text-lg whitespace-nowrap text-ellipsis">
                  {profile.name || "User"}
                </div>
                <div className="text-sm hidden md:block">
                  {profile.bio || "Welcome to Archks88 AI"}
                </div>
                <div className="text-sm ">
                  Credits: {profile.credits}
                </div>
              </div>
            </div>
            <button
              className="hover:bg-secondary bg-transparent border border-secondary h-10 leading-6 text-sm rounded-full cursor-pointer px-4 py-1.5 text-secondary hover:text-white font-medium min-w-28"
              onClick={openModal}
            >
              Edit Profile
            </button>
          </div> */}
          <div className="relative p-0.5 mx-5 rounded-2xl bg-gradient-to-l to-purple-700 from-blue-500 ">
            <div className="bg-primary-light rounded-2xl h-full max-md:h-auto p-8 flex items-center justify-between max-md:flex-col gap-3 min-h-52">
              <div className="flex max-md:flex-col max-md:items-center max-md:justify-center max-md:w-full">
                <div className="md:mr-6 w-28 h-28">
                  <LazyLoadImg
                    src={profile.avatar || personPlaceholder}
                    alt="User Avatar"
                    className="object-cover object-center w-28 h-28 rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2 max-md:pt-2 max-md:items-center justify-center text-white">
                  <div className="text-lg whitespace-nowrap text-ellipsis">
                    {profile.name || "User"}
                  </div>
                  <div className="text-sm hidden md:block">
                    {profile.bio || "Welcome to Archks88 AI"}
                  </div>
                  <div className="text-sm">
                    Credits: {profile.credits}
                  </div>
                </div>
              </div>
              <button
                className="hover:bg-secondary bg-blue-light border border-secondary h-10 leading-6 text-sm rounded-full cursor-pointer px-4 py-1.5 text-white font-medium min-w-28"
                onClick={openModal}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div className="max-md:mt-28 mb-24 mx-5">
        {profile?.images && profile.images.length > 0 && (
              <div className="sticky top-0 bg-primary z-10 text-white md:p-6 pb-3 w-full shadow-xl text-2xl max-md:text-lg font-semibold">
                Your Creativity
              </div>
            )}
          {!profile?.images && <ProfileTabs />}
          <ResponsiveMasonryWrapper
            columnsCountBreakPoints={{ 480: 1, 575: 2, 767: 3, 1025: 4 }}
          >
            <Masonry className="!m-auto">
              {displayedImages && displayedImages.length > 0 ? (
                displayedImages.map((img) => (
                  <LazyLoadComponent>
                    <div
                      key={img._id}
                      className="relative inline-block group mb-2 md:mr-2"
                    >
                      <LazyLoadImg
                        src={img.imageUrl}
                        alt={img.prompt}
                        className="cursor-pointer rounded-xl h-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 cursor-pointer rounded-xl">
                        <div className="flex gap-4">
                          <FiDownload
                            className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-secondary"
                            onClick={() =>
                              handleDownload(img.imageUrl, `${img._id}.png`)
                            }
                          />
                          <FiTrash2
                            className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-red-500"
                            onClick={() => openDeleteModal(img._id)}
                          />
                        </div>
                      </div>
                    </div>
                  </LazyLoadComponent>
                ))
              ) : (
                <p>No images generated yet.</p>
              )}
            </Masonry>
          </ResponsiveMasonryWrapper>
          {/* Add this Load More button after the Masonry component */}
          {profile?.images &&
            profile.images.length > displayedImages.length && (
              <div className="flex items-center justify-center mt-5">
                <div className="relative inline-block group sm:max-w-80">
                  <div className="p-0.5 bg-gradient-to-r from-purple-700 to-sky-600 rounded-full transition-all duration-300 group-hover:shadow-lg">
                    <Button
                      onClick={loadMoreImages}
                      title="Load More"
                      className="bg-black text-white sm:!text-base !py-2.5 !px-10  rounded-full w-full h-full transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-900 group-hover:to-sky-700"
                    />
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>

      {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50"
          onClick={handleModalClick}
        >
          <div className="bg-login p-6 rounded-lg w-full mx-4 max-w-[464px]">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl text-white font-semibold">
                Edit Profile
              </h1>
              <button
                className="text-2xl md:text-3xl font-bold text-gray-500 hover:text-gray-300 transition-colors"
                onClick={closeModal}
              >
                <MdClose />
              </button>
            </div>
            <form onSubmit={saveProfile}>
              <div className="mb-4 flex flex-col items-center">
                <label
                  htmlFor="avatar-upload"
                  className="cursor-pointer relative group"
                >
                  <LazyLoadImg
                    src={tempProfile.avatar || personPlaceholder}
                    alt="User Avatar"
                    className="object-cover inline-flex w-20 h-20 rounded-full group-hover:opacity-50 transition-opacity"
                  />
                  <EditIcon className="w-5 h-5 block absolute bottom-8 left-[calc(50%-10px)] text-white cursor-pointer transition duration-200 group-hover:text-secondary" />
                </label>
                <div className="text-sm text-gray-500 mt-2">Change avatar</div>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={tempProfile.name || ""}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  maxLength={20}
                  className="w-full px-4 py-3 text-white bg-primary rounded-xl focus:border focus:outline-none border-secondary text-sm leading-6"
                />
                <div className="text-right text-sm text-gray-500 absolute bottom-3 right-4">
                  {tempProfile.name ? tempProfile.name.length : 0}/20
                </div>
              </div>
              <div className="mb-4 relative">
                <label className="block text-white mb-2">Biography</label>
                <textarea
                  name="bio"
                  value={tempProfile.bio || ""}
                  onChange={handleInputChange}
                  placeholder="Enter your bio"
                  className="w-full text-white bg-primary rounded-lg px-4 pt-3 pb-8 focus:border focus:outline-none border-secondary text-sm leading-6 resize-none"
                  maxLength={200}
                  rows="5"
                ></textarea>
                <div className="text-right text-sm text-gray-500 absolute bottom-4 left-4">
                  {tempProfile.bio ? tempProfile.bio.length : 0}/200
                </div>
                <div className="absolute right-4 bottom-5 flex items-center">
                  <div className="border-l border-primary-border h-4 mt-px mr-[0.5em]"></div>
                  <button
                    type="button"
                    className="text-sm text-white transition duration-200 hover:text-secondary"
                    onClick={clearBio}
                  >
                    <DeleteIcon className="mx-1.5" />
                  </button>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-6 py-1.5 text-sm bg-transparent text-blue hover:underline"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <Button
                  type="submit"
                  className="py-1.5 px-6 text-black bg-blue-light cursor-pointer hover:bg-secondary"
                  title="Save"
                />
              </div>
            </form>
          </div>
        </div>
      )}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Profile;
