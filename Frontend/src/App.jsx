import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ContactCard from "./components/ContactCard";
import Form from "./components/Form";
function App() {
  const [contact, setContact] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NjQ2M2M5YTJkNWE2ZjA2ZWU3Mjg0ODYiLCJpYXQiOjE3MTU4NzkwNjZ9.c5obhgeSVMJaJDMS1Siz4Qj3RcVFV8h84qfNtBsooA8";

  const axiosInstance = axios.create({
    // baseURL: "api/contact",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  useEffect(() => {
    axiosInstance
      .get("api/contact")
      .then((response) => {
        // Handle successful response
        setContact([...response.data]);
        console.log(contact);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {/* <Form /> */}
      <ContactCard contact={contact} />
    </>
  );
}

export default App;
