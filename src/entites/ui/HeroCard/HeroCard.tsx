import React from "react";
import s from "./HeroCard.module.scss";

import { LeaderInfo } from "./components/LeaderInfo/LeaderInfo";
import { HeroAbilityCard } from "./components/HeroAbilityCard/HeroAbilityCard";
import { HeroInfo } from "./components/HeroInfo/HeroInfo";

export const HeroCard = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <HeroInfo />
        <div className="flex flex-col gap-[3px]">
          <HeroAbilityCard
            type="Vanguard"
            textAbility={
              <>
                <strong>Перехват.</strong> Нанесите 2 урона герою, который
                выбрал этого героя как цель своеё атаки
              </>
            }
            iconsAbility={<>icons</>}
          />
          <HeroAbilityCard
            type="Flank"
            textAbility={
              <>
                <strong>Перехват.</strong> Нанесите 2 урона герою, который
                выбрал этого героя как цель своеё атаки
              </>
            }
            iconsAbility={<>icons</>}
          />
          <HeroAbilityCard
            type="Rear"
            textAbility={
              <>
                <strong>Перехват.</strong> Нанесите 2 урона герою, который
                выбрал этого героя как цель своеё атаки
              </>
            }
            iconsAbility={<>icons</>}
          />
          <HeroAbilityCard
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
  );
};
