import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  id: string;
  label: string;
};

const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input name={id} type="text" id={id} {...props} />
    </div>
  );
};

export default Input;
