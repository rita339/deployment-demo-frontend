import Card from "./Card.jsx";
import { useState, useEffect } from "react";
import "./Home.css";

const API = import.meta.env.VITE_API || "http://localhost:4000";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(API + "/employee");
        const data = await response.json();
        setEmployees(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchEmployees();
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    const firstName = event.target.elements.firstName.value;
    const response = await fetch(API + "/employee?firstName=" + firstName);
    const data = await response.json();
    setEmployees(data);
    event.target.reset();
  }
  return (
    <section>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">Search by first name: </label>
        <input type="text" name="firstName" id="firstName" />
        <button>Submit</button>
      </form>
      <ul className="cards-container">
        {employees.map(employee => <Card key={employee._id} employee={employee} />)}
      </ul>
    </section>
  );
};

export default Home;