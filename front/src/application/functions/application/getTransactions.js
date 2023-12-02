import { API_URL } from "application/constants/app-constants";
import getHeaders from "./getHeaders";

export default function getTransactions(setData) {
  const config = {
    method: "GET",
    // headers: getHeaders(),
  };

  fetch(`${API_URL}/transactions`, config)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      setData(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}
