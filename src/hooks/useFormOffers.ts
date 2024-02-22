import { useEffect, useState } from "react";
import { useAlerts } from "hooks/useAlerts";
import SimulatorService from "services/SimulatorService";

export const useFormOffers = () => {
  const [monthlyPayments, setMonthlyPayments] = useState<number>(0);
  const [apr, setApr] = useState<number>(0);
  const [amount, setAmount] = useState<number>();
  const [loanPurpose, setLoanPurpose] = useState<string>("");
  const [terms, setTerms] = useState<number>(0);
  const { showAlertDisplay, message, type, iconName, showAlert } = useAlerts();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleLoanPurposeChange = (loanPurpose: string | number) => {
    setLoanPurpose(String(loanPurpose));
  };

  const handleTermChange = (terms: string | number) => {
    setTerms(Number(terms));
  };

  useEffect(() => {
    if (loanPurpose !== " " && terms !== 0) {
      if (amount !== 0 && amount !== undefined && terms !== 0) {
        console.log("amount !== 0 && terms !== 0", amount, terms);
        handleSubmit();
      }
    }
  }, [amount, loanPurpose, terms]);

  const handleSubmit = async () => {
    const requestData = {
      amount: amount,
      loanPurpose: loanPurpose,
      terms: terms,
    };

    try {
      const response = await SimulatorService.postOffersInfo(requestData);

      setMonthlyPayments(response.monthlyPayments);
      setApr(response.apr);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      showAlert(
        "danger",
        "Sorry! We had a problem with our service. Try again later!",
        "exclamation-circle-fill"
      );
    }
  };

  const postSubmissionsData = () => {
    try {
      console.log("vai ter coisa aqui");
    } catch (error: any) {
      if (loanPurpose === "API error") {
        showAlert(
          "danger",
          "Sorry! We had a problem with our service. Try again later!",
          "exclamation-circle-fill"
        );
      } else {
        showAlert(
          "warning",
          "It is necessary to fill in all fields on the form.",
          "exclamation-circle-fill"
        );
      }
    }
  };

  return {
    monthlyPayments,
    apr,
    amount,
    loanPurpose,
    terms,
    setMonthlyPayments,
    setApr,
    setAmount,
    setLoanPurpose,
    setTerms,
    handleInputChange,
    handleLoanPurposeChange,
    handleTermChange,
    postSubmissionsData,
  };
};
