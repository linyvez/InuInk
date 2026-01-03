"use client";
import Image from "next/image";

const ProfileButton = () => {
  return (
    <div>
      <button type="button" className="relative w-10 aspect-square">
        <Image
          src="/images/profile.png"
          alt="Profile icon"
          fill={true}
          className="object-contain"
        />
      </button>
    </div>
  );
};

export default ProfileButton;
