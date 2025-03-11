import { ReactElement } from "react";
import s from "../../HeroCard.module.scss";

// 👇 import local font
import localFont from "next/font/local";
import { AbilityTypeEnum } from "@/entites/models/Card";

//👇 Configure our local font object
// const pixelFontText = localFont({
//   src: "../../../../../../asset/Nine By Five NBP/NineByFiveNbp.ttf",
// });
const pixelFontNumber = localFont({
  src: "../../../../../../asset/Nineteen Ninety Three/Nineteen Ninety Three.otf",
});

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
      {scale >= 1 && (
        <div style={pixelFontNumber.style} className={s.discription}>
          {textAbility}
        </div>
      )}
    </div>
  );
};
