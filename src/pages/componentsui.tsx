import UIButton from "@/shared/ui/UIButton/UIButton";
import React from "react";

export default function ComponentsUI() {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[12px]">
        <h1>Button</h1>
        <div className="flex gap-[6px]">
          <UIButton className="w-[100%]" variant="red" />
          <UIButton className="w-[100%]" variant="green" />
          <UIButton className="w-[100%]" variant="blue" />
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h1>Input</h1>
        <div className="flex gap-[6px]">
          <UIButton className="w-[100%]" variant="red" />
          <UIButton className="w-[100%]" variant="green" />
          <UIButton className="w-[100%]" variant="blue" />
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h1>Link</h1>
        <div className="flex gap-[6px]">
          <UIButton className="w-[100%]" variant="red" />
          <UIButton className="w-[100%]" variant="green" />
          <UIButton className="w-[100%]" variant="blue" />
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h1>Link</h1>
        <div className="flex gap-[6px]">
          <UIButton className="w-[100%]" variant="red" />
          <UIButton className="w-[100%]" variant="green" />
          <UIButton className="w-[100%]" variant="blue" />
        </div>
      </div>
    </div>
  );
}
