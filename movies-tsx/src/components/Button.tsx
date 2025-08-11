import React, { type SetStateAction } from "react";

type ButtonProps = {
  incrementar: React.Dispatch<SetStateAction<number>>;
};

const Button = ({ incrementar }: ButtonProps) => {
  return <button onClick={() => incrementar((n) => n + 1)}></button>;
};

export default Button;
