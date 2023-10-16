import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const showEmployees = true;
  const [role, setRole] = useState("dev");
  const [employee, setemployee] = useState([
    {
      name: "Abby",
      role: "Intern",
      img: "https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?",
    },
    {
      name: "John",
      role: "Developer",
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?",
    },
    {
      name: "Adams",
      role: "CFO",
      img: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?",
    },
    {
      name: "Caleb",
      role: "Manager",
      img: "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?",
    },
    {
      name: "Sandra",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?",
    },
    {
      name: "Carie",
      role: "HR",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?",
    },
  ]);

  const updateEmployee = () => {
    console.log("Inside App.js");
  };
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap">
            {employee.map((emp, index) => {
              return (
                <Employee
                  name={emp.name}
                  role={emp.role}
                  img={emp.img}
                  key={uuidv4()}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
