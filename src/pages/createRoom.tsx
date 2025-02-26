import MainPageLayout from "@/shared/ui/MainPageLayout/MainPageLayout";
import UIAvatar from "@/shared/ui/UIAvatar/UIAvatar";
import UILink from "@/shared/ui/UILink/UILink";
import React from "react";
import ComponentsUI from "./componentsui";

export default function CreateRoom() {
  const rooms: {
    id: string;
    name: string;
    player1: string;
    player2: string;
  }[] = [{ id: "1", name: "Игра 1", player1: "Егор", player2: "Елизавета" }];

  return (
    <MainPageLayout>
      <ComponentsUI />
      <div className="bgAttack h-[100%] p-[1.25vw]">
        {rooms.length > 0 ? (
          <div className="flex flex-wrap">
            {rooms.map((el) => (
              <UILink key={el.id} href={`/game`}>
                <div className="bg-slate-400 w-[13.333vw] h-[max-content] transition-all duration-[0.3s] rounded-[0.625vw]  flex flex-col p-[0.625vw] cursor-pointer hover:bg-slate-500">
                  <div className="self-center">{el.name}</div>
                  <div className="flex justify-between">
                    <div className="flex flex-col items-center gap-[0.208vw]">
                      <UIAvatar />
                      <div>{el.player1}</div>
                    </div>
                    <div className="flex flex-col items-center gap-[0.208vw]">
                      <UIAvatar />
                      <div>{el.player2}</div>
                    </div>
                  </div>
                </div>
              </UILink>
            ))}
          </div>
        ) : (
          <div>emty</div>
        )}
      </div>
    </MainPageLayout>
  );
}
