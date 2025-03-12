import Image from "next/image";
import s from "../../HeroCard.module.scss";
import hero from "../../../../assets/pixelHero/KnightPixel.png";
//import hero from "../../../../assets/pixelHero/MascotPixel.png";
import attack from "../../../../assets/icons/Attack.png";
import sheet from "../../../../assets/icons/Sheet.png";
import heroLabel from "../../../../assets/icons/heroLabel.png";

// 👇 import local font
import localFont from "next/font/local";
import { PxToVw } from "@/app/utils";

//👇 Configure our local font object
const pixelFontText = localFont({
  src: "../../../../../../asset/Nine By Five NBP/NineByFiveNbp.ttf",
});
const pixelFontNumber = localFont({
  src: "../../../../../../asset/Nineteen Ninety Three/Nineteen Ninety Three.otf",
});

export const HeroInfo = ({ scale = 1 }: { scale: number }) => {
  return (
    <div
      style={{
        fontSize: `${PxToVw({ px: 24, scale: scale })}`,
        lineHeight: `${PxToVw({ px: 24, scale: scale })}`,
        minHeight: `${PxToVw({ px: 70, scale: scale })}`,
      }}
      className={s.heroInfo}
    >
      <Image
        style={{
          height: `${PxToVw({ px: 66, scale: scale })}`,
          width: `${PxToVw({ px: 40, scale: scale })}`,
        }}
        src={hero}
        alt="hero"
      />
      <div
        style={{ paddingLeft: PxToVw({ px: 50, scale: scale }) }}
        className="flex flex-1 flex-col"
      >
        <div style={pixelFontText.style} className="flex ">
          <Image
            style={{
              position: "absolute",
              top: `-${PxToVw({ px: 10, scale: scale })}`,
              left: `${PxToVw({ px: 46, scale: scale })}`,
              width: `${PxToVw({ px: 42, scale: scale })}`,
              height: `${PxToVw({ px: 43, scale: scale })}`,
            }}
            src={heroLabel}
            alt="heroLabel"
          />
          <span
            style={{
              fontSize: PxToVw({ px: 40, scale: scale }),
              lineHeight: PxToVw({ px: 22, scale: scale }),
            }}
          >
            Рыцарь
          </span>
        </div>
        <div
          style={{ gap: PxToVw({ px: 12, scale: scale }) }}
          className="flex flex-1 items-center justify-end "
        >
          <div
            style={{
              width: `${PxToVw({ px: 48, scale: scale })}`,
              height: `${PxToVw({ px: 47, scale: scale })}`,
            }}
            className={`${s.attack} relative flex items-center justify-center`}
          >
            <Image
              className="w-[100%] h-[100%] absolute z-[1] "
              src={attack}
              alt="attack"
            />
            <span
              style={{
                fontSize: PxToVw({ px: 40, scale: scale }),
                lineHeight: PxToVw({ px: 22, scale: scale }),
                ...pixelFontNumber.style,
              }}
              className="z-[2] text-[#CA2E21] white-text"
            >
              3
            </span>
          </div>
          <div
            style={{
              width: `${PxToVw({ px: 41, scale: scale })}`,
              height: `${PxToVw({ px: 44, scale: scale })}`,
            }}
            className={`${s.sheet} relative flex items-center justify-center`}
          >
            <Image
              className="w-[100%] h-[100%] absolute z-[1]"
              src={sheet}
              alt="sheet"
            />
            <span
              style={{
                fontSize: PxToVw({ px: 40, scale: scale }),
                lineHeight: PxToVw({ px: 22, scale: scale }),
                ...pixelFontNumber.style,
              }}
              className="z-[2] text-[#24377D] white-text"
            >
              10
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
