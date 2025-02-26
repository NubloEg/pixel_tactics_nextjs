import React from "react";
import s from "./CardField.module.scss";

export default function CardField({ className }: { className?: string }) {
  return (
    <div
      className={`w-[8.594vw] h-[12.865vw] flex items-center justify-center ${className} ${s.CardField}`}
    >
      <span>CardField</span>
    </div>
  );
}
