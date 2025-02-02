import { ReactNode } from "react";
import SaidBar from "../SaidBar/SaidBar";

export default function MainPageLayout({
  isVisibleSaidBar = true,
  children,
}: {
  isVisibleSaidBar?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex w-[100vw] h-[100dvh]">
      {isVisibleSaidBar && <SaidBar />}
      <div className="w-[100%] h-[100%]">{children}</div>
    </div>
  );
}
