import React from "react";
import "./employeeCard.css";

function EmployeeCard(props) {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={props.image} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <ul>
            <li>
              <p>
                {" "}
                {props.firstName} {props.lastName}
              </p>
            </li>
            <li>
              <p> {props.email}</p>
            </li>
            <li>
              <p> {props.phone}</p>
            </li>
            <li>
              <p>
                {" "}
                {props.address.number} {props.address.name}, {props.city},{" "}
                {props.state} {props.country}
              </p>
            </li>
            <li>
              <p>Age: {props.age}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
