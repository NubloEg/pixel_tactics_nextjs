import { AllAchievements } from "@/app/dafaultStore";
import Achievement from "@/entites/ui/Achievement/Achievement";
import MainPageLayout from "@/shared/ui/MainPageLayout/MainPageLayout";
import UIAvatar from "@/shared/ui/UIAvatar/UIAvatar";
import React from "react";

export default function Profile() {
  return (
    <MainPageLayout className="bgMascot" isVisibleSaidBar={true}>
      <div className="flex flex-col gap-[1.25vw] px-[1.667vw] py-[1.25vw]">
        <div className="bg-gray-300 w-[100%] h-[17.188vw] py-[1.042vw] rounded-[0.625vw] flex justify-center">
          <div className="flex flex-col items-center">
            <UIAvatar isChange size="10.938vw" />
            <span className="text-[1.875vw]">Елизавета</span>
          </div>
        </div>
        <div className="bg-gray-300 w-[100%] h-[3.125vw] rounded-[0.625vw] flex items-center px-[12px]">
          <div className="flex-[0.1]">Уровень 1</div>
          <div className="border-solid border-gray-500 border-[1px] w-[100%] h-[80%] flex-1">
            <div className="w-[50%] h-[100%] bg-[#33A7D1]"></div>
          </div>
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
          {AllAchievements.map((el) => (
            <Achievement key={el.id} size="7.292vw" achievement={el} />
          ))}
        </div>
      </div>
    </MainPageLayout>
  );
}
