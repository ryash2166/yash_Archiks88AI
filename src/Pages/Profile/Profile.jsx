import React, { useState } from "react";
import ProfileTabs from "../../Components/ProfileTabs/ProfileTabs";
import personPlaceholder from "../../assets/person.png"; // Placeholder image for avatar
import { MdClose } from "react-icons/md";
import Button from "../../Components/Common/Button";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Person.Name",
    bio: "Create my bio: eg.'Found me! How about giving my work a like?'",
    avatar: personPlaceholder,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempProfile, setTempProfile] = useState(profile);

  // Handlers
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
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setTempProfile((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const saveProfile = (e) => {
    e.preventDefault();
    setProfile(tempProfile);
    closeModal();
  };

  const clearBio = () => {
    setTempProfile((prev) => ({ ...prev, bio: "" }));
  };

  const handleModalClick = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div className="relative h-lvh w-full overflow-auto">
      <div className="lg:pl-[260px] pt-0 m-0 bg-[#0d1116]">
        <div className="w-full h-[200px] mb-7">
          <div className="bg-cover bg-[url(https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/user-teaser-2-DmrbcmSD.jpg)] bg-center rounded-[18px] h-full max-md:h-auto p-8 mx-5 flex items-center justify-between max-md:flex-col gap-3 ">
            <div className="flex max-md:flex-col max-md:items-center max-md:justify-center max-md:w-full">
              <div className="md:mr-6 w-[80px] h-[80px]">
                <img
                  src={profile.avatar}
                  alt="Person_Profile"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col max-md:pt-2 max-md:items-center justify-center text-white">
                <div className="leading-[26px] text-lg whitespace-nowrap text-ellipsis">
                  {profile.name}
                </div>
                <div className="leading-6 text-sm hidden md:block">
                  {profile.bio}
                </div>
              </div>
            </div>
            <button
              className="hover:bg-[#1c262b] border-[1px] border-[#999bac] h-10 leading-6 text-sm rounded-full cursor-pointer px-4 py-[6px] text-white w-[106px]"
              onClick={openModal}
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className="max-md:mt-14">
          <ProfileTabs />
        </div>
      </div>

      {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 backdrop-blur-[6px] flex justify-center items-center z-50"
          onClick={handleModalClick}
        >
          <div className="bg-login p-6 rounded-lg w-full mx-3 max-w-[464px] relative">
            {/* Close Button */}
            <button
              className="absolute top-6 right-3 text-2xl md:text-[30px] font-bold text-gray-300"
              onClick={closeModal}
            >
              <MdClose />
            </button>
            <h1 className="text-[22px] leading-8 mb-6 text-white font-semibold">
              Edit Profile
            </h1>
            <form onSubmit={saveProfile}>
              <div className="mb-4 flex flex-col items-center">
                <label
                  htmlFor="avatar-upload"
                  className="cursor-pointer relative group"
                >
                  <img
                    src={tempProfile.avatar}
                    alt="Person_Profile"
                    className="object-cover inline-flex w-[80px] h-[80px] rounded-full group-hover:opacity-50 transition-opacity"
                  />
                  <svg
                    data-v-e8d12bc5=""
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 block absolute bottom-[30px] left-[calc(50%-10px)] text-white"
                  >
                    <path
                      d="M15.9998 13.8333V13.6667C15.9998 13.2985 15.7013 13 15.3331 13H8.95306C8.79839 13 8.64854 13.0538 8.52916 13.1521L7.60996 13.9094C7.36861 14.1082 7.50921 14.5 7.82191 14.5H15.3331C15.7013 14.5 15.9998 14.2015 15.9998 13.8333Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.619 3.10526L13.0818 3.55803C13.7587 4.22022 13.7587 5.29385 13.0818 5.95604L6.03219 12.8524C5.90337 12.9784 5.73723 13.0615 5.55737 13.0899L3.54418 13.4075C3.07164 13.4821 2.62678 13.1678 2.55057 12.7055C2.53582 12.6161 2.53582 12.525 2.55057 12.4355L2.87527 10.4661C2.90428 10.2902 2.98923 10.1276 3.11806 10.0016L10.1677 3.10526C10.8446 2.44306 11.9421 2.44306 12.619 3.10526Z"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
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
                  value={tempProfile.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  maxLength={20}
                  className="w-full px-4 py-3 text-white bg-[#0d1116] rounded-xl focus:border-[1px] focus:outline-none border-[#445b5c] text-sm leading-6"
                />
                <div className="text-right text-sm text-gray-500 absolute bottom-3 right-4">
                  {tempProfile.name.length}/20
                </div>
              </div>
              <div className="mb-4 relative">
                <label className="block text-white mb-2">Biography</label>
                <textarea
                  name="bio"
                  value={tempProfile.bio}
                  onChange={handleInputChange}
                  placeholder="Enter your bio"
                  className="w-full text-white bg-[#0d1116] rounded-lg px-[16px] pt-3 pb-8 focus:border-[1px] focus:outline-none border-[#445b5c] text-sm leading-6 resize-none"
                  maxLength={200}
                  tabIndex={0}
                  autoComplete="off"
                  rows="5"
                ></textarea>
                <div className="text-right text-sm text-gray-500 absolute bottom-4 left-4">
                  {tempProfile.bio.length}/200
                </div>
                <div className="absolute right-4 bottom-5 flex items-center">
                  <div className="border-l-[1px] border-[#4e5062] h-4 mt-[1px] mr-[0.5em]"></div>
                  <button
                    type="button"
                    className="text-sm text-white transition duration-200 hover:text-[#9ffd38]"
                    onClick={clearBio}
                  >
                    <svg
                      className="mx-[6px] "
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.55005 6.10856V14.4419C5.55005 15.209 6.17188 15.8308 6.93894 15.8308H13.05C13.8171 15.8308 14.4389 15.209 14.4389 14.4419V6.10856H16.1056V14.4419C16.1056 16.1294 14.7376 17.4974 13.05 17.4974H6.93894C5.2514 17.4974 3.88338 16.1294 3.88338 14.4419V6.10856H5.55005Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.49512 6.46038C2.49512 6.00015 2.86821 5.62705 3.32845 5.62705H16.6618C17.122 5.62705 17.4951 6.00015 17.4951 6.46038C17.4951 6.92062 17.122 7.29372 16.6618 7.29372H3.32845C2.86821 7.29372 2.49512 6.92062 2.49512 6.46038Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.38401 4.44689C6.38401 3.373 7.25456 2.50244 8.32845 2.50244H11.6618C12.7357 2.50244 13.6062 3.373 13.6062 4.44689V5.79133C13.6062 6.25157 13.2331 6.62466 12.7729 6.62466C12.3127 6.62466 11.9396 6.25157 11.9396 5.79133V4.44689C11.9396 4.29347 11.8152 4.16911 11.6618 4.16911H8.32845C8.17504 4.16911 8.05067 4.29347 8.05067 4.44689V5.79133C8.05067 6.25157 7.67758 6.62466 7.21734 6.62466C6.7571 6.62466 6.38401 6.25157 6.38401 5.79133V4.44689Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.71734 13.3331C7.71734 12.8421 8.11531 12.4442 8.60623 12.4442H11.384C11.8749 12.4442 12.2729 12.8421 12.2729 13.3331C12.2729 13.824 11.8749 14.222 11.384 14.222H8.60623C8.11531 14.222 7.71734 13.824 7.71734 13.3331Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="px-6 py-[6px] text-sm bg-transparent text-white rounded-full border-[1px] border-[#999bac] hover:bg-[#1c262b]"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <Button
                  type="submit"
                  className="py-[6px] px-6 text-black bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] hover:!bg-[linear-gradient(89.86deg,#81d100,#56d69a,#1aaad6)]"
                  title="Save"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
