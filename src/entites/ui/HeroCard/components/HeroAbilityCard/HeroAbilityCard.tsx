import { ReactElement } from "react";
import s from "../../HeroCard.module.scss";
export enum AbilityTypeEnum {
  "Vanguard" = "Vanguard",
  "Flank" = "Flank",
  "Rear" = "Rear",
  "Order" = "Order",
}

export const AbilityHeroCard = ({
  type,
  textAbility = <>Пусто</>,
  iconsAbility = <>Пусто</>,
  scale,
}: {
  type: keyof typeof AbilityTypeEnum;
  textAbility: ReactElement;
  iconsAbility: ReactElement;
  scale: number;
}) => {
  const styles = {
    Vanguard: s.Vanguard,
    Flank: s.Flank,
    Rear: s.Rear,
    Order: s.Order,
  };

  return (
    <div className={`${s.ability} ${styles[type] || ""}`}>
      <div className={s.iconsAbility}>{iconsAbility}</div>
      {scale >= 1 && <div className={s.discription}>{textAbility}</div>}
    </div>
  );
};
