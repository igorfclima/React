import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ label, setState, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        name={label}
        type="text"
        onChange={({ currentTarget }) => setState(currentTarget.value)}
        id={label}
        {...props}
      />
    </div>
  );
};

export default Input;
