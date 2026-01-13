"use client";
import Image from "next/image";

import { useAuth } from "@/providers/AuthProvider";

const ProfileButton = ({ onClick }: { onClick: () => void }) => {
  const userContext = useAuth();

  return (
    <div className="flex flex-col">
      <button
        type="button"
        className="relative w-10 aspect-square z-20"
        onClick={onClick}
      >
        <Image
          src="/images/profile.png"
          alt="Profile icon"
          fill={true}
          className="object-contain"
        />
      </button>

      {userContext?.user && (
        <span className="text-center">{userContext.user.login}</span>
      )}
    </div>
  );
};

export default ProfileButton;
