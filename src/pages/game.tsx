import CardField from "@/entites/ui/CardField/CardField";
import MainPageLayout from "@/shared/ui/MainPageLayout/MainPageLayout";
import UILink from "@/shared/ui/UILink/UILink";
import React from "react";

export default function Game() {
  return (
    <MainPageLayout isVisibleSaidBar={false}>
      <div className="flex flex-col h-[100%]">
        <div className="h-[3.125vw] flex justify-between">
          <div className="bg-gray-400 w-[30%] flex">
            <UILink href="/createRoom">
              <div className="bg-red-700 h-[100%] w-[3.125vw] ">Out</div>
            </UILink>
          </div>
          <div className="bg-gray-400 w-[30%]">right</div>
        </div>
        <div className="flex flex-1 px-[1.667vw] gap-[1.354vw]">
          <div className="items-center flex flex-1 ">
            <div className="flex flex-col gap-[2.917vw] mr-[1.667vw]">
              <CardField />
              <CardField />
            </div>
            <div className="gameSpace">
              <CardField />
              <CardField />
              <CardField />
              <CardField />
              <CardField className="rotate-180" />
              <CardField />
              <CardField />
              <CardField />
              <CardField />
            </div>
            <div className="flex flex-col gap-[0.417vw] ml-[1.354vw]">
              <CardField />
              <CardField className="opacity-0" />
              <CardField className="opacity-0" />
            </div>
          </div>
          <div className="items-center flex flex-1 justify-end">
            <div className="flex flex-col gap-[0.417vw] mr-[1.354vw]">
              <CardField />
              <CardField className="opacity-0" />
              <CardField className="opacity-0" />
            </div>

            <div className="gameSpace">
              <CardField />
              <CardField />
              <CardField />
              <CardField />
              <CardField className="rotate-180" />
              <CardField />
              <CardField />
              <CardField />
              <CardField />
            </div>
            <div className="flex flex-col gap-[2.917vw] ml-[1.667vw]">
              <CardField />
              <CardField />
            </div>
          </div>
        </div>
        <div className="h-[3.125vw] flex justify-between">
          <div className="bg-gray-400 w-[30%]">left</div>
          <div className="bg-gray-400 w-[30%]">right</div>
        </div>
      </div>
      {/* <ComponentsUI /> */}
    </MainPageLayout>
  );
}
