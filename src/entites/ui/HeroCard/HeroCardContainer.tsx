import React, { useState } from "react";
import { HeroCard } from "./HeroCard";
import { ShowCard } from "@/features/ShowCard/ShowCard";
import ReactDOM from "react-dom";

export const HeroCardContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLeader = true;
  return (
    <>
      <HeroCard isLeaderInitial={isLeader} onShowCard={setIsOpen} />
      {isOpen &&
        ReactDOM.createPortal(
          <ShowCard onClose={setIsOpen}>
            <HeroCard isLeaderInitial={isLeader} hideSettings scale={1.5} />
          </ShowCard>,
          document.body
        )}
    </>
  );
};
