import Image from "next/image";
import s from "../../HeroCard.module.scss";
import hero from "../../../../assets/pixelHero/KnightPixel.png";
import attack from "../../../../assets/icons/Attack.png";
import sheet from "../../../../assets/icons/Sheet.png";
import heroLabel from "../../../../assets/icons/heroLabel.png";

export const HeroInfo = () => {
  return (
    <div className={s.heroInfo}>
      <Image className={s.imgHero} src={hero} alt="hero" />
      <div className="flex flex-1 flex-col pl-[50px]">
        <div className="flex ">
          <Image className={s.heroLabel} src={heroLabel} alt="heroLabel" />
          <span className="text-[24px] leading-[18px]">Рыцарь</span>
        </div>
        <div className="flex flex-1 items-center gap-[12px] justify-end ">
          <div
            className={`${s.attack} relative flex items-center justify-center`}
          >
            <Image
              className="w-[100%] h-[100%] absolute z-[1]"
              src={attack}
              alt="attack"
            />
            <span className="z-[2] text-[40px] leading-[25px] text-[#CA2E21] font-bold">
              3
            </span>
          </div>
          <div
            className={`${s.sheet} relative flex items-center justify-center`}
          >
            <Image
              className="w-[100%] h-[100%] absolute z-[1]"
              src={sheet}
              alt="sheet"
            />
            <span className="z-[2] text-[40px] leading-[25px] text-[#24377D] font-bold ">
              10
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
