import React from "react";
import Image from "next/image";
import logo from "../../../entites/assets/Logo.png";
import Link from "next/link";
import UILink from "../UILink/UILink";
export default function SaidBar() {
  return (
    <div className="bg-gray-300 min-w-[10.156vw] w-[10.156vw] flex flex-col gap-[6px] flex-auto justify-between">
      <Link href="/">
        <Image src={logo} alt="hero" />
      </Link>
      <nav className="flex flex-[0.8] flex-col justify-self-start gap-[6px]">
        <UILink className="px-4" href="/">
          <button className="bg-red-500 w-[100%]">Home</button>
        </UILink>
        <UILink className="px-4" href="/signUp">
          <button className="bg-red-500 w-[100%]">SignUp</button>
        </UILink>
        <UILink className="px-4" href="/game">
          <button className="bg-red-500 w-[100%]">Game</button>
        </UILink>
      </nav>
      <Link href="/profile">
        <div className="sidBarProfile flex items-center gap-[0.313vw] bg-gray-400 py-[6px] px-[8px]">
          <div className="h-[3.125vw] w-[3.125vw] rounded-full bg-blue-400"></div>
          <div className="flex flex-col text-[0.825vw]">
            <span>Елизавета</span>
            <span>Уровань 1000</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
