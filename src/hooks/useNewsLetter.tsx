import { BASE_URL } from "@/constants/env";
import { useState } from "react";

const useNewsLetter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const beOriginal = async (email: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await fetch(`${BASE_URL}newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        setError(errData.message || "An unknown error occured");
        return;
      }
      setSuccess("Welcome, you are now an original clique!");
    } catch (error) {
      setError("An error occurred. Please check your internet connection");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, beOriginal, error, success };
};

export default useNewsLetter;
