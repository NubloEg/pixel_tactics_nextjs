import React, { useState } from "react";
import s from "./HeroCard.module.scss";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import backCard from "../../assets/card/CardBack.png";
import mascot from "../../assets/pixelHero/MascotPixel.png";
import { LeaderInfo } from "./components/LeaderInfo/LeaderInfo";
import { AbilityHeroCard } from "./components/HeroAbilityCard/HeroAbilityCard";
import { HeroInfo } from "./components/HeroInfo/HeroInfo";

export const HeroCard = ({
  scale = 0.5,
  onShowCard,
  hideSettings = false,
  isLeaderInitial = false,
}: {
  scale?: number;
  onShowCard?: (value: boolean) => void;
  hideSettings?: boolean;
  isLeaderInitial: boolean;
}) => {
  const [switchCard, setSwitchCard] = useState<boolean>(false);
  const [isLeader, setIsLeader] = useState<boolean>(isLeaderInitial);

  return (
    <div className={`${s.wrapper}`} style={{ scale: scale }}>
      <div
        className={`${s.flip_card} 
        ${switchCard ? s.switch : s.switchReturn}
        ${isLeader ? s.leader : s.hero}`}
      >
        <div
          style={{
            transform: `rotateY(${switchCard ? `180deg` : `0deg`}) rotateZ(${
              isLeader ? `180deg` : `0deg`
            })`,
          }}
          className={s.flip_card_inner}
        >
          <div className={`${s.card}`}>
            <HeroInfo />
            <div className="flex flex-col gap-[3px]">
              <AbilityHeroCard
                type="Vanguard"
                scale={scale}
                textAbility={
                  <>
                    <strong>Перехват.</strong> Нанесите 2 урона герою, который
                    выбрал этого героя как цель своеё атаки
                  </>
                }
                iconsAbility={<>icons</>}
              />
              <AbilityHeroCard
                scale={scale}
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
                scale={scale}
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
                scale={scale}
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
          <div className={s.backCard}>
            <Image className="w-[16.927vw] h-[5.625vw]" src={logo} alt="hero" />

            <Image
              className="w-[7.396vw] h-[15.625vw] self-center"
              src={backCard}
              alt="hero"
            />
            <div className={s.backCardBottom}>
              <Image
                className="w-[3.594vw] h-[4.063vw]"
                src={mascot}
                alt="hero"
              />
              <Image
                className="w-[3.594vw] h-[4.063vw]"
                src={mascot}
                alt="hero"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={s.show}>
        <div className={s.settingsCard}>
          {!hideSettings && (
            <div
              className="text-[1.17vw]"
              onClick={() => setSwitchCard((e) => !e)}
            >
              switch
            </div>
          )}
          <div className="text-[1.17vw]" onClick={() => setIsLeader((e) => !e)}>
            revolt
          </div>
          {!hideSettings && (
            <div
              className="text-[1.17vw]"
              onClick={() => {
                if (onShowCard) {
                  onShowCard(true);
                }
              }}
            >
              show
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
