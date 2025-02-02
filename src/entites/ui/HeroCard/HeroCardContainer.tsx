import React, { useState } from "react";
import { HeroCard } from "./HeroCard";
import { ShowCard } from "@/features/ShowCard/ShowCard";

export const HeroCardContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HeroCard onShowCard={setIsOpen} />
      {isOpen && (
        <ShowCard onClouse={setIsOpen}>
          <HeroCard hideSettings scale={1.5} />
        </ShowCard>
      )}
    </>
  );
};
