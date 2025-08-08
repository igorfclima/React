import React from "react";
import "../css/Alert.css";
import { AiOutlineClose } from "react-icons/ai";

interface AlertProps {
  message: string;
  largura: string;
  altura: string;
  color: string;
  fontSize: string;
  title: string;
  iconSize: number;
  icon: React.ElementType;
}

const Alert: React.FC<AlertProps> = ({
  message,
  largura,
  altura,
  color,
  title,
  fontSize,
  iconSize,
  icon: Icon,
}) => {
  return (
    <div
      className={`alert ${color}`}
      style={{
        width: `${largura}`,
        height: `${altura}`,
        fontSize: `${fontSize}`,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        position: "fixed", // <-- Fixa no topo
        top: "20px", // <-- Distância do topo
        left: "50%",
        transform: "translateX(-50%)", // <-- Centraliza horizontalmente
        zIndex: 9999, // <-- Garante que fique por cima
      }}
    >
      {Icon && <Icon size={iconSize} />}
      <h1>{title}</h1>
      <p>{message}</p>
      <button
        className="close-button"
        onClick={() => console.log("Close alert")}
      >
        <AiOutlineClose size={iconSize} />
      </button>
    </div>
  );
};

export default Alert;
