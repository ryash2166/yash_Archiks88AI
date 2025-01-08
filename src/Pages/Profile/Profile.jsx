import React from "react";
import person from "../../assets/person.png";
import ProfileTabs from "../../Components/ProfileTabs/ProfileTabs";

const Profile = () => {
  return (
    <div className="relative h-lvh w-full overflow-auto">
      <div className="lg:pl-[260px] pt-0 m-0 bg-[#0d1116]">
        <div className="w-full h-[200px] mb-7">
          <div className="bg-cover bg-[url(https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/user-teaser-2-DmrbcmSD.jpg)] rounded-[18px] h-full max-md:h-auto p-8 mx-5 flex items-center justify-between max-md:flex-col gap-3">
            <div className="flex max-md:flex-col max-md:items-center max-md:justify-center max-md:w-full">
              <div className="md:mr-6 w-[80px] h-[80px]">
                <img
                  src={person}
                  alt="Person_Profile"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col max-md:pt-2 max-md:items-center justify-center text-white">
                <div className="leading-[26px] text-lg whitespace-nowrap text-ellipsis">
                  Person.Name
                </div>
                <div className="leading-5 text-xs my-1 mx-0">
                  ID:
                  <span> 9440878</span>
                </div>
                <div className="leading-6 text-sm hidden md:block">
                  Create my bio: eg.'Found me! How about giving my work a like?'
                </div>
              </div>
            </div>
            <button className="hover:bg-[#1c262b] border-[1px] border-[#999bac] h-10 leading-6 text-sm rounded-full cursor-pointer px-4 py-[6px] text-white w-[106px]">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="max-md:mt-12 max-md:flex max-md:items-center max-md:justify-center">
        <ProfileTabs/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
