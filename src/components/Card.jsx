import "./Card.css"

const Card = ({employee}) => {
  
  return (
    <li className="card">
      <img src={employee.image} alt="employee image" />
      <h2>{employee.firstName} {employee.lastName}</h2>
      <p>{employee.job}</p>
      <p>{employee.email}</p>
      <p>{employee.bio}</p>
    </li>
  );
};

export default Card;