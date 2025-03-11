import { IAchievement } from "@/app/dafaultStore";
import UIAvatar from "@/shared/ui/UIAvatar/UIAvatar";
import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function Achievement({
  achievement,
  size,
}: {
  size?: string;
  achievement?: IAchievement;
}) {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <UIAvatar
        className="cursor-pointer"
        onClick={() => setIsShow(true)}
        image={achievement?.icon}
        size={size}
      />
      {isShow &&
        ReactDOM.createPortal(
          <div
            onClick={() => setIsShow(false)}
            className="flex absolute index-9999999 bg-black/80  w-[100%] h-[100%] top-[0] left-[0] items-center justify-center"
          >
            <div
              className="bg-gradient-to-t to-[#B3DFFE] via-[#307CAB] from-[#270E97] p-[12px] rounded-[12px] flex flex-col items-center max-w-[450px] text-white "
              onClick={(e) => e.stopPropagation()}
            >
              <UIAvatar
                className="bg-transparent rounded-none"
                image={achievement?.icon}
                size={"20rem"}
              />
              <h1 className="text-[2vw]">
                {achievement?.name || "Name achive"}
              </h1>
              <p className="text-gray-400 text-center">
                {achievement?.description ||
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit rem dolore eligendi saepe, fugit tempora in ea quis
                deserunt enim error nihil asperiores perferendis recusandae quo,
                explicabo, iste dolorum facilis.`}
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
