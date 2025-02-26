import Image from "next/image";
import s from "../../HeroCard.module.scss";
import hero from "../../../../assets/pixelHero/KnightPixel.png";
import attack from "../../../../assets/icons/Attack.png";
import sheet from "../../../../assets/icons/Sheet.png";
import heroLabel from "../../../../assets/icons/heroLabel.png";

// 👇 import local font
import localFont from "next/font/local";

//👇 Configure our local font object
const pixelFontText = localFont({
  src: "../../../../../../asset/Nine By Five NBP/NineByFiveNbp.ttf",
});
const pixelFontNumber = localFont({
  src: "../../../../../../asset/Nineteen Ninety Three/Nineteen Ninety Three.otf",
});

export const HeroInfo = () => {
  return (
    <div className={s.heroInfo}>
      <Image className={s.imgHero} src={hero} alt="hero" />
      <div className="flex flex-1 flex-col pl-[2.604vw]">
        <div style={pixelFontText.style} className="flex ">
          <Image className={s.heroLabel} src={heroLabel} alt="heroLabel" />
          <span className="text-[2.083vw] leading-[1.146vw]">Рыцарь</span>
        </div>
        <div className="flex flex-1 items-center gap-[0.625vw] justify-end ">
          <div
            className={`${s.attack} relative flex items-center justify-center`}
          >
            <Image
              className="w-[100%] h-[100%] absolute z-[1] "
              src={attack}
              alt="attack"
            />
            <span
              style={pixelFontNumber.style}
              className="z-[2] text-[2.083vw] leading-[1.302vw] text-[#CA2E21] white-text"
            >
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
            <span
              style={pixelFontNumber.style}
              className="z-[2] text-[#24377D] text-[2.083vw] leading-[1.302vw]   white-text"
            >
              10
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
