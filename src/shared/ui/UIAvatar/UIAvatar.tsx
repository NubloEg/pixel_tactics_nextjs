import React, { useState } from "react";
import Image from "next/image";
import user from "../../../entites/assets/hero/Knight.png";

export default function UIAvatar({
  size = "5.208vw",
  image,
  isChange,
  ...props
}: {
  size?: string;
  image?: string;
  isChange?: boolean;
} & React.ButtonHTMLAttributes<HTMLDivElement>) {
  const [isError, setIsError] = useState(false);

  return (
    <div
      style={{ height: `${size}`, width: `${size}` }}
      {...props}
      className={`relative aspect-square rounded-full overflow-hidden bg-blue-400 ${props.className}`}
    >
      {image && !isError ? (
        <Image
          fill
          src={image}
          onError={() => setIsError(true)}
          unoptimized
          className="object-cover"
          alt="user"
        />
      ) : (
        <Image src={user} className="object-center" alt="user" />
      )}
      {isChange && (
        <div className="absolute flex items-center justify-center top-0 h-[100%] w-[100%] transition-all duration-[0.3s] opacity-0 rounded-full text-white hover:bg-black hover:bg-opacity-80 hover:opacity-100">
          <span>Выбрать картинку</span>
          <input
            type="file"
            title=""
            className="absolute opacity-0 h-[100%] w-[100%] cursor-pointer rounded-full"
            value=""
          />
        </div>
      )}
    </div>
  );
}
