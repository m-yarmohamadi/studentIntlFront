import axios from "axios";

export const postApi = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    console.log("response:", response.data);
  } catch (error) {
    console.error("Error:", error.response);
  }
};
