import React, { Fragment, useState } from "react";
import { ShowCard } from "@/features/ShowCard/ShowCard";
import ReactDOM from "react-dom";

import { HeroCardSettings } from "./HeroCardSettings";
import { observer } from "mobx-react";
import cardStore, { CardInfo } from "@/app/store/cardStore";

export const HeroCardContainer = observer(({ id }: { id: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLeaderInition = false;
  const heroInfo: CardInfo = cardStore.getCard(id);

  return (
    <>
      <HeroCardSettings
        isLeaderInition={isLeaderInition}
        setIsShow={setIsOpen}
        scale={0.5}
        heroInfo={heroInfo}
      />
      {isOpen &&
        ReactDOM.createPortal(
          <ShowCard onClose={setIsOpen}>
            <HeroCardSettings
              heroInfo={heroInfo}
              scale={1.3}
              isLeaderInition={isLeaderInition}
            />
          </ShowCard>,
          document.body
        )}
    </>
  );
});
