import { useState } from "react";

export const useAlerts = () => {
  const [showAlertDisplay, setAlertDisplay] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [iconName, setIconName] = useState("");

  const showAlert = (type: string, message: string, iconName?: string) => {
    setMessage(message);
    setType(type);
    if (iconName !== undefined) {
      setIconName(iconName);
    }
    setAlertDisplay(true);
    setAutoHide();
  };

  const setAutoHide = () => {
    const duration = 10000;
    setTimeout(() => {
      setAlertDisplay(false);
    }, duration);
  };

  return { showAlertDisplay, message, type, iconName, showAlert };
};
