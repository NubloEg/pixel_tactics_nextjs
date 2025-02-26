import MainPageLayout from "@/shared/ui/MainPageLayout/MainPageLayout";
import React from "react";

export default function Profile() {
  return (
    <MainPageLayout className="bgMascot" isVisibleSaidBar={true}>
      <div className="flex flex-col gap-[1.25vw] px-[1.667vw] py-[1.25vw]">
        <div className="bg-gray-300 w-[100%] h-[17.188vw] rounded-[0.625vw]">
          <div>Avart</div>
        </div>
        <div className="bg-gray-300 w-[100%] h-[3.125vw] rounded-[0.625vw]">
          <div>Avart</div>
        </div>
        <div className="flex justify-between">
          <div className="bg-gray-300 w-[18.646vw] h-[12.344vw] rounded-[0.625vw]">
            <div>Сыграно игр</div>
          </div>
          <div className="bg-gray-300 w-[18.646vw] h-[12.344vw] rounded-[0.625vw]">
            <div>Сыграно игр</div>
          </div>
          <div className="bg-gray-300 w-[18.646vw] h-[12.344vw] rounded-[0.625vw]">
            <div>Сыграно игр</div>
          </div>
          <div className="bg-gray-300 w-[18.646vw] h-[12.344vw] rounded-[0.625vw]">
            <div>Сыграно игр</div>
          </div>
        </div>
        <div className="bg-gray-300 w-[100%] py-[0.625vw] px-[0.938vw] flex flex-wrap gap-x-[2.188vw] gap-y-[1.354vw] rounded-[0.625vw]">
          {Array(18)
            .fill(1)
            .map((el, ind) => (
              <div
                key={ind}
                className="h-[7.292vw] w-[7.292vw] rounded-full bg-[#33A7D1]"
              ></div>
            ))}
        </div>
      </div>
    </MainPageLayout>
  );
}
