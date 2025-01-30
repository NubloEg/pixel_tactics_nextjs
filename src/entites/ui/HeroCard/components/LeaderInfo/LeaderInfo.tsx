import leaderLabel from "../../../../assets/icons/leaderLabel.png";
import partOne from "../../../../assets/icons/partOne.png";
import Image from "next/image";
import hero from "../../../../assets/pixelHero/KnightPixel.png";
import attack from "../../../../assets/icons/Attack.png";
import sheet from "../../../../assets/icons/Sheet.png";

export const LeaderInfo = () => {
  return (
    <div className="flex h-[137px] rotate-180">
      <div className="flex flex-col items-start relative justify-end w-[63px]">
        <Image
          className="w-[63px] h-[69px] absolute top-[-14px] left-[-2px]"
          src={leaderLabel}
          alt="leaderLabel"
        />
        <Image
          className="w-[54px] h-[88px] ml-[4px] z-[2]"
          src={hero}
          alt="hero"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-col gap-[0px]">
          <span className="text-[24px] leading-[18px]">Каденза</span>
          <span className="text-[12px] pl-[1px] leading-[10px]">
            Механическая Пехотная Дивизия
          </span>
        </div>
        <div className="flex flex-1 justify-between items-center">
          <Image className="w-[24px] h-[30px]" src={partOne} alt="partOne" />
          <div className="flex items-center gap-[12px] justify-between">
            <div
              className={`w-[47px] h-[47px] relative flex items-center justify-center`}
            >
              <Image
                className="w-[100%] h-[100%] absolute z-[1]"
                src={attack}
                alt="attack"
              />
              <span className="z-[2] text-[40px] leading-[25px] text-[#CA2E21] font-bold">
                4
              </span>
            </div>
            <div
              className={`w-[42px] h-[44px]  relative flex items-center justify-center`}
            >
              <Image
                className="w-[100%] h-[100%] absolute z-[1]"
                src={sheet}
                alt="sheet"
              />
              <span className="z-[2] text-[40px] leading-[25px] text-[#24377D] font-bold ">
                20
              </span>
            </div>
          </div>
        </div>
        <div className="text-[12px]  leading-[10px] flex-1">
          Ваши герои и лидер получают на 1<br /> меньше урона от атак
        </div>
      </div>
    </div>
  );
};
