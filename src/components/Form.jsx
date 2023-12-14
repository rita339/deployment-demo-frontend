import { useState } from "react";
import Card from "./Card.jsx";
import "./Form.css"

const Form = () => {
  // const [employees, setEmployees] = useOutletContext();
  const [newEmployee, setNewEmployee] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const submitHandler = async (event) => {
    try {
      event.preventDefault();
      const API = import.meta.env.VITE_API || "http://localhost:4000";
      const formData = new FormData(event.target);
      const firstName = formData.get('firstName');
      const lastName = formData.get('lastName');
      const email = formData.get('email');
      const image = formData.get('image');
      const job = formData.get('job');
      const bio = formData.get('bio');
      const obj = {firstName, lastName, email, image, job, bio};
      const response = await fetch(API + "/employee", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });
      const data = await response.json();
      console.log(data);
      setNewEmployee(data);
      setSubmitted(true);
      event.target.reset();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section>
    <form onSubmit={submitHandler} className="add-form">
      <ul>
        <li>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" name="firstName" id="firstName" required />
        </li>
        <li>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" name="lastName" id="lastName" required />
        </li>
        <li>
          <label htmlFor="email">E-Mail: </label>
          <input type="email" name="email" id="email" />
        </li>
        <li>
          <label htmlFor="image">Image Link: </label>
          <input type="text" name="image" id="image" />
        </li>
        <li>
          <label htmlFor="job">Job: </label>
          <input type="text" name="job" id="job" />
        </li>
        <li>
          <label htmlFor="bio">Bio: </label>
          <textarea name="bio" id="bio" cols="30" rows="10"></textarea>
        </li>
        <li>
          <button>Submit</button>
        </li>
      </ul>
    </form>
    {submitted && <ul><Card key={newEmployee._id} employee={newEmployee}/></ul>}
    </section>
  );
};

export default Form;