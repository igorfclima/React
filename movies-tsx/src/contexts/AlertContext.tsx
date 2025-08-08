import { createContext, useContext, useState, type ReactNode } from "react";
import "../css/Alert.css";

interface AlertData {
  message: string;
  title: string;
  color: string;
  icon: React.ElementType;
  fontSize?: string;
  largura?: string;
  altura?: string;
}

interface AlertContextType {
  showAlert: (data: AlertData) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
}

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alertData, setAlertData] = useState<AlertData | null>(null);

  const showAlert = (data: AlertData) => {
    setAlertData(data);
    setTimeout(() => {
      setAlertData(null);
    }, 1000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alertData && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "all 0.3s ease",
            zIndex: 9999,
          }}
        >
          <div
            className={`alert ${alertData.color}`}
            style={{
              padding: "1rem",
              borderRadius: "4px",
              width: alertData.largura || "400px",
              height: alertData.altura || "auto",
              fontSize: alertData.fontSize || "16px",
              display: "flex",
              alignItems: "center",
              transition: "all 0.3s ease",
              gap: "0.75rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            {alertData.icon && <alertData.icon size={24} color="white" />}
            <div>
              <h4 style={{ margin: 0 }}>{alertData.title}</h4>
              <p style={{ margin: 0 }}>{alertData.message}</p>
            </div>
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
}
