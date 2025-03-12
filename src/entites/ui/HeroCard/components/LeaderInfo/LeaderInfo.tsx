import leaderLabel from "../../../../assets/icons/leaderLabel.png";
import partOne from "../../../../assets/icons/partOne.png";
import Image from "next/image";
import hero from "../../../../assets/pixelHero/KnightPixel.png";
//import hero from "../../../../assets/pixelHero/MascotPixel.png";
import attack from "../../../../assets/icons/Attack.png";
import sheet from "../../../../assets/icons/Sheet.png";

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

export const LeaderInfo = ({ scale }: { scale: number }) => {
  return (
    <div
      style={{
        height: PxToVw({ px: 137, scale: scale }),
      }}
      className="flex rotate-180"
    >
      <div
        style={{
          width: PxToVw({ px: 63, scale: scale }),
        }}
        className="flex flex-col items-start relative justify-end "
      >
        <Image
          style={{
            width: PxToVw({ px: 63, scale: scale }),
            height: PxToVw({ px: 69, scale: scale }),
            top: `-${PxToVw({ px: 14, scale: scale })}`,
            left: `-${PxToVw({ px: 2, scale: scale })}`,
          }}
          className="absolute"
          src={leaderLabel}
          alt="leaderLabel"
        />
        <Image
          style={{
            width: PxToVw({ px: 54, scale: scale }),
            height: PxToVw({ px: 88, scale: scale }),
            marginLeft: `${PxToVw({ px: 4, scale: scale })}`,
          }}
          className="z-[2]"
          src={hero}
          alt="hero"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div style={pixelFontText.style} className="flex flex-col gap-[0px]">
          <span
            style={{
              fontSize: PxToVw({ px: 40, scale: scale }),
              lineHeight: PxToVw({ px: 22, scale: scale }),
            }}
          >
            Каденза
          </span>
          <span
            style={{
              fontSize: PxToVw({ px: 16, scale: scale }),
              lineHeight: PxToVw({ px: 14.611, scale: scale }),
              paddingLeft: PxToVw({ px: 1, scale: scale }),
            }}
          >
            Механическая Пехотная Дивизия
          </span>
        </div>
        <div className="flex flex-1 justify-between items-center">
          <Image
            style={{
              width: PxToVw({ px: 24, scale: scale }),
              height: PxToVw({ px: 30, scale: scale }),
            }}
            src={partOne}
            alt="partOne"
          />
          <div
            style={{
              gap: PxToVw({ px: 12, scale: scale }),
            }}
            className="flex items-center justify-between"
          >
            <div
              style={{
                width: PxToVw({ px: 47, scale: scale }),
                height: PxToVw({ px: 47, scale: scale }),
              }}
              className={` relative flex items-center justify-center`}
            >
              <Image
                className="w-[100%] h-[100%] absolute z-[1]"
                src={attack}
                alt="attack"
              />
              <span
                style={{
                  ...pixelFontNumber.style,
                  fontSize: PxToVw({ px: 40, scale: scale }),
                  lineHeight: PxToVw({ px: 25, scale: scale }),
                }}
                className=" z-[2]     white-text text-[#CA2E21] "
              >
                4
              </span>
            </div>
            <div
              style={{
                width: PxToVw({ px: 42, scale: scale }),
                height: PxToVw({ px: 44, scale: scale }),
              }}
              className={`relative flex items-center justify-center`}
            >
              <Image
                className="w-[100%] h-[100%] absolute z-[1]"
                src={sheet}
                alt="sheet"
              />
              <span
                style={{
                  ...pixelFontNumber.style,
                  fontSize: PxToVw({ px: 40, scale: scale }),
                  lineHeight: PxToVw({ px: 25, scale: scale }),
                }}
                className=" z-[2] white-text text-[#24377D] "
              >
                20
              </span>
            </div>
          </div>
        </div>
        <div
          style={{...pixelFontText.style,
            fontSize: PxToVw({ px: 18, scale: scale }),
            lineHeight: PxToVw({ px: 10, scale: scale }),
          }}
          className="tracking-[0.7] flex-1"
        >
          Ваши герои и лидер получают на 1<br /> меньше урона от атак
        </div>
      </div>
    </div>
  );
};
