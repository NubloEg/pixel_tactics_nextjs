import { ReactNode } from "react";
import SaidBar from "../SaidBar/SaidBar";
import s from "./MainPageLayout.module.scss";

export default function MainPageLayout({
  isVisibleSaidBar = true,
  children,
  className,
}: {
  isVisibleSaidBar?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="flex w-[100vw] h-[100dvh]">
      {isVisibleSaidBar && <SaidBar />}
      <div
        className={`${s.wrapper} ${className} w-[100%] h-[100%] overflow-auto`}
      >
        {children}
      </div>
    </div>
  );
}
