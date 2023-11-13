import { useState, useEffect } from "react";
import axios from "axios";

const usePostRequest = (url, values) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(url, values);
        setResult(res.data.message);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url, values]);

  return { result, error };
};
