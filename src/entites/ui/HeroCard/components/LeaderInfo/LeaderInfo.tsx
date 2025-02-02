import leaderLabel from "../../../../assets/icons/leaderLabel.png";
import partOne from "../../../../assets/icons/partOne.png";
import Image from "next/image";
import hero from "../../../../assets/pixelHero/KnightPixel.png";
import attack from "../../../../assets/icons/Attack.png";
import sheet from "../../../../assets/icons/Sheet.png";

export const LeaderInfo = () => {
  return (
    <div className="flex h-[7.135vw] rotate-180">
      <div className="flex flex-col items-start relative justify-end w-[3.281vw]">
        <Image
          className="w-[3.281vw] h-[3.594vw] absolute top-[-0.729vw] left-[-0.104vw]"
          src={leaderLabel}
          alt="leaderLabel"
        />
        <Image
          className="w-[2.813vw] h-[4.583vw] ml-[0.208vw] z-[2]"
          src={hero}
          alt="hero"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-col gap-[0px]">
          <span className="text-[1.25vw] leading-[0.938vw]">Каденза</span>
          <span className="text-[0.625vw] pl-[0.052vw] leading-[0.521vw]">
            Механическая Пехотная Дивизия
          </span>
        </div>
        <div className="flex flex-1 justify-between items-center">
          <Image className="w-[1.25vw] h-[1.563vw]" src={partOne} alt="partOne" />
          <div className="flex items-center gap-[0.625vw] justify-between">
            <div
              className={`w-[2.448vw] h-[2.448vw] relative flex items-center justify-center`}
            >
              <Image
                className="w-[100%] h-[100%] absolute z-[1]"
                src={attack}
                alt="attack"
              />
              <span className="z-[2] text-[2.083vw] leading-[1.302vw] text-[#CA2E21] font-bold">
                4
              </span>
            </div>
            <div
              className={`w-[2.188vw] h-[2.292vw]  relative flex items-center justify-center`}
            >
              <Image
                className="w-[100%] h-[100%] absolute z-[1]"
                src={sheet}
                alt="sheet"
              />
              <span className="z-[2] text-[2.083vw] leading-[1.302vw] text-[#24377D] font-bold ">
                20
              </span>
            </div>
          </div>
        </div>
        <div className="text-[0.625vw]  leading-[0.625vw] flex-1">
          Ваши герои и лидер получают на 1<br /> меньше урона от атак
        </div>
      </div>
    </div>
  );
};
