import { AllAchievements } from "@/app/store/dafaultStore";
import Achievement from "@/entites/ui/Achievement/Achievement";
import MainPageLayout from "@/shared/ui/MainPageLayout/MainPageLayout";
import ProfileInfo from "@/shared/ui/ProfileInfo/ProfileInfo";
import ProgressBar from "@/shared/ui/ProgressBar/ProgressBar";
import UIAvatar from "@/shared/ui/UIAvatar/UIAvatar";
import React from "react";

export interface IProfile {
  id: string;
  name: string;
  rating: number;
  lvl: { exp: number; maxExp: number; lvl: number };
  gamesCount: number;
  maxRatingDifference: number;
  loveLeader: string;
  timeLongGame: string;
}

export default function Profile() {
  const profile: IProfile = {
    id: "1",
    name: "Елизавета",
    rating: 32,
    lvl: {
      exp: 470,
      maxExp: 1200,
      lvl: 3,
    },
    gamesCount: 14,
    maxRatingDifference: 23,
    loveLeader: "Рыцарь",
    timeLongGame: "1:10:32",
  };

  return (
    <MainPageLayout className="bgMascot" isVisibleSaidBar={true}>
      <div className="flex flex-col gap-[1.25vw] px-[1.667vw] py-[1.25vw]">
        <div className="bg-gray-300 w-[100%] h-[17.188vw] py-[1.042vw] rounded-[0.625vw] flex justify-center">
          <div className="flex flex-col items-center">
            <UIAvatar isChange size="10.938vw" />
            <span className="text-[1.875vw] leading-[1.875vw] mt-[0.4vw]">{profile.name}</span>
            <span className="text-[0.875vw] text-gray-500">
              Рейтинг:{profile.rating}
            </span>
          </div>
        </div>
        <div className="bg-gray-300 w-[100%] h-[3.125vw] rounded-[0.625vw] flex items-center px-[0.875vw]">
          <div className="flex-[0.12] text-[1.275vw]">
            Уровень {profile.lvl.lvl}
          </div>
          <ProgressBar {...profile.lvl} />
        </div>
        <div className="flex justify-between">
          <ProfileInfo
            info={{ name: "Сыграно игр", value: String(profile.gamesCount) }}
          />
          <ProfileInfo
            info={{
              name: "Максимальная разница в рейтинге",
              value: String(profile.maxRatingDifference),
            }}
          />
          <ProfileInfo
            info={{ name: "Любимый лидер", value: String(profile.loveLeader) }}
          />
          <ProfileInfo
            info={{
              name: "Время самой долгой игры",
              value: String(profile.timeLongGame),
            }}
          />
        </div>
        <div className="bg-gray-300 w-[100%] py-[0.625vw] px-[0.938vw] flex flex-wrap gap-x-[2.188vw] gap-y-[1.354vw] rounded-[0.625vw]">
          {AllAchievements.map((el) => (
            <Achievement
              isDisabled={el.id === "4"}
              isLock={el.id === "18"}
              key={el.id}
              size="7.292vw"
              achievement={el}
            />
          ))}
        </div>
      </div>
    </MainPageLayout>
  );
}
