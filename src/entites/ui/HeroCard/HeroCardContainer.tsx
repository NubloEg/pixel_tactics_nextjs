import React, { useState } from "react";
import { HeroCard } from "./HeroCard";
import { ShowCard } from "@/features/ShowCard/ShowCard";

export const HeroCardContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLeader = true;
  return (
    <>
      <HeroCard isLeaderInitial={isLeader} onShowCard={setIsOpen} />
      {isOpen && (
        <ShowCard onClouse={setIsOpen}>
          <HeroCard isLeaderInitial={isLeader} hideSettings scale={1.5} />
        </ShowCard>
      )}
    </>
  );
};
