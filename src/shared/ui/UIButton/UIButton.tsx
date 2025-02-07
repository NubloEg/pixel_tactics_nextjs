import s from "./UIButton.module.scss";
type VariantsButton = "red" | "green" | "blue";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantsButton;
}

export default function UIButton({
  variant = "blue",
  children = "Empty",
  ...props
}: Props) {
  const styleVariant = {
    red: s.red,
    green: s.green,
    blue: s.blue,
  };

  return (
    <button
      {...props}
      className={`${styleVariant[variant]} px-[8px] py-[12px] border-[4px] rounded-[12px] ${props.className}`}
    >
      {children}
    </button>
  );
}
