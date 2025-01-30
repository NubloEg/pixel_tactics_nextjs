import { ReactElement } from "react";
import s from "../../HeroCard.module.scss";
export enum AbilityTypeEnum {
  "Vanguard" = "Vanguard",
  "Flank" = "Flank",
  "Rear" = "Rear",
  "Order" = "Order",
}

export const HeroAbilityCard = ({
  type,
  textAbility = <>Пусто</>,
  iconsAbility = <>Пусто</>,
}: {
  type: keyof typeof AbilityTypeEnum;
  textAbility: ReactElement;
  iconsAbility: ReactElement;
}) => {
  const styles = {
    Vanguard: s.Vanguard,
    Flank: s.Flank,
    Rear: s.Rear,
    Order: s.Order,
  };

  return (
    <div className={`${s.ability} ${styles[type] || ""}`}>
      <div className={s.images}>{iconsAbility}</div>
      <div className={s.discription}>{textAbility}</div>
    </div>
  );
};
