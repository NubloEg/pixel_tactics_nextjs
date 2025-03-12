import React, { Fragment, useState } from "react";
import { ShowCard } from "@/features/ShowCard/ShowCard";
import ReactDOM from "react-dom";

import { HeroCardSettings } from "./HeroCardSettings";

export const HeroCardContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLeaderInition = true;
  return (
    <>
      <HeroCardSettings
        isLeaderInition={isLeaderInition}
        setIsShow={setIsOpen}
        scale={1}
      />
      {isOpen &&
        ReactDOM.createPortal(
          <ShowCard onClose={setIsOpen}>
            <HeroCardSettings scale={1} isLeaderInition={isLeaderInition} />
          </ShowCard>,
          document.body
        )}
    </>
  );
};
