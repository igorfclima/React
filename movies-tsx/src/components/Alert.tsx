import React from "react";

interface AlertProps {
  message: string;
  largura: number;
  altura: number;
  color: string;
  textColor: string;
  title: string;
}

const Alert: React.FC<AlertProps> = ({
  message,
  largura,
  altura,
  color,
  textColor,
  title,
}) => {
  return (
    <div
      style={{
        width: `${largura}px`,
        height: `${altura}px`,
        backgroundColor: color,
        color: textColor,
      }}
    >
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
