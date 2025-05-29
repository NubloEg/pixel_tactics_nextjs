import MainPageLayout from "@/shared/ui/MainPageLayout/MainPageLayout";
import React, { useEffect } from "react";
import ComponentsUI from "./componentsui";
import GameCard from "@/entites/ui/GameCard/GameCard";
import { observer } from "mobx-react";
import gameCardsStore from "@/app/store/gameCardsStore";

export default observer(function CreateRoom() {
  useEffect(() => {}, []);

  const rooms = gameCardsStore.getGameCards;

  return (
    <MainPageLayout>
      <div className="bgAttack h-[100%] p-[1.25vw]">
        {rooms.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {rooms.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
            <div onClick={() => gameCardsStore.addGameCard()}>Новая игра</div>
          </div>
        ) : (
          <div onClick={() => gameCardsStore.addGameCard()}>emty</div>
        )}
      </div>
      <ComponentsUI />
    </MainPageLayout>
  );
});
