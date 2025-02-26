import React from "react";
import Image from "next/image";
import user from "../../../entites/assets/hero/Knight.png";

// type VariantsButton = "red" | "green" | "blue";

// interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: VariantsButton;
// }
export default function UIAvatar({
  size = "5.208vw",
  image,
}: {
  size?: string;
  image?: string;
}) {
  return (
    <div
      style={{ height: `${size}` }}
      className={`aspect-square rounded-full overflow-hidden bg-blue-400`}
    >
      {image ? (
        <Image fill src={image} className="object-cover" alt="user" />
      ) : (
        <Image src={user} className="object-center" alt="user" />
      )}
    </div>
  );
}
