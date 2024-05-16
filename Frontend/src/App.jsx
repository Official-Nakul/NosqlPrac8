import "./App.css";
import axios from "axios";
function App() {
  // Assuming you have stored the JWT token in localStorage or sessionStorage
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NjJhYWJiOTE4M2M1Y2MxY2IzYzI2OTEiLCJpYXQiOjE3MTQwNzI1MDV9.oLbnceTIQIDNdGIsPIYQpaOOCK4-K7eOwiW7E-oIa00";

  // Set up Axios instance with default headers including the JWT token
  const axiosInstance = axios.create({
    // baseURL: "api/contact",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  // Make a GET request using the Axios instance
  axiosInstance
    .get("api/contact")
    .then((response) => {
      // Handle successful response
      console.log(response.data);
    })
    .catch((error) => {
      // Handle error
      console.error("Error fetching data:", error);
    });

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
