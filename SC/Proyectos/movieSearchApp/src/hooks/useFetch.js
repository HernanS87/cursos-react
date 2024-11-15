import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  const getFetch = async () => {
    //falta poner isLoading en true y agregar el finally para pasarlo a false
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({
        data: data.results,
        isLoading: false,
        errors: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: error,
      });
    }
  };

  useEffect(() => {
    if (!url) return;
    getFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return {
    ...state,
  };
};
