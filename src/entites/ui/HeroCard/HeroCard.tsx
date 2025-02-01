import React, { useState } from "react";
import s from "./HeroCard.module.scss";

import { LeaderInfo } from "./components/LeaderInfo/LeaderInfo";
import { AbilityHeroCard } from "./components/HeroAbilityCard/HeroAbilityCard";
import { HeroInfo } from "./components/HeroInfo/HeroInfo";

export const HeroCard = () => {
  const [switchCard, setSwitchCard] = useState<boolean | null>(null);
  const [revoltCard, setRevolt] = useState<boolean | null>(false);

  return (
    <div className={s.wrapper}>
      <div
        className={`${s.flip_card} 
        ${switchCard === null ? "" : switchCard ? s.switch : s.switchReturn}
        ${revoltCard ? s.leader : s.hero}`}
      >
        <div className={s.flip_card_inner}>
          <div className={s.card}>
            <HeroInfo />
            <div className="flex flex-col gap-[3px]">
              <AbilityHeroCard
                type="Vanguard"
                textAbility={
                  <>
                    <strong>Перехват.</strong> Нанесите 2 урона герою, который
                    выбрал этого героя как цель своеё атаки
                  </>
                }
                iconsAbility={<>icons</>}
              />
              <AbilityHeroCard
                type="Flank"
                textAbility={
                  <>
                    <strong>Перехват.</strong> Нанесите 2 урона герою, который
                    выбрал этого героя как цель своеё атаки
                  </>
                }
                iconsAbility={<>icons</>}
              />
              <AbilityHeroCard
                type="Rear"
                textAbility={
                  <>
                    <strong>Перехват.</strong> Нанесите 2 урона герою, который
                    выбрал этого героя как цель своеё атаки
                  </>
                }
                iconsAbility={<>icons</>}
              />
              <AbilityHeroCard
                type="Order"
                textAbility={
                  <>
                    <strong>Перехват.</strong> Нанесите 2 урона герою, который
                    выбрал этого героя как цель своеё атаки
                  </>
                }
                iconsAbility={<>icons</>}
              />
            </div>
            <LeaderInfo />
          </div>
          <div className={s.backCard}></div>
        </div>
      </div>
      <div className={s.show}>
        <div className={s.settingsCard}>
          <div onClick={() => setSwitchCard((e) => !e)}>switch</div>
          {!switchCard && (
            <div onClick={() => setRevolt((e) => !e)}>revolt</div>
          )}
          <div>switch</div>
        </div>
      </div>
    </div>
  );
};
