import { API_URL } from "application/constants/app-constants";
import getHeaders from "./getHeaders";

export default function postTransactions(body) {
  const config = {
    method: "POST",
    // headers: getHeaders(),
    body,
  };

  fetch(`${API_URL}/transactions`, config)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}
