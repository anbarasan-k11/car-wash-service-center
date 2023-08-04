import { Link } from "react-router-dom";
import ChildComponent from "./singnup";
import { useState } from "react";
export default function Homepage() {
  const [loginWith, setLoginWith] = useState("");
  sessionStorage.setItem("Loginwith", loginWith);
  const handleItemClick = (value) => {
    setLoginWith(value);
  };
  console.log(loginWith);
  const handleItemClick1 = (value) => {
    setLoginWith(value);
  };
  const handleItemClick2 = (value) => {
    setLoginWith(value);
  };

  return (
    <div className="App" style={{ height: "100%" }}>
      <div
        style={{
          paddingTop: 130,
          backgroundimage: "linear-gradient(90deg, #0000ff, #ff33cc)",
        }}
      >
        <div
          id="logo5"
          style={{ display: "flex", justifyContent: "center", marginleft: 550 }}
        ></div>
        <div style={{ marginLeft: 450, display: "flex" }}>
          <h3>WELCOME TO CAR WASH SERVICE</h3>
        </div>
        <br></br>
        <div style={{ display: "flex", textAlign: "center", marginLeft: 550 }}>
          <div class="d-flex justify-content-center">
            <div class="dropdown">
              <button
                id="button"
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                login with
              </button>
              <ul class="dropdown-menu ">
                <li>
                  <a
                    class="dropdown-item"
                    onClick={() => handleItemClick("manager")}
                    href="/Managerlogin"
                  >
                    manager
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    onClick={() => handleItemClick1("employee")}
                    href="/employee_login"
                  >
                    employee
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    onClick={() => handleItemClick2("customer")}
                    href="customer_login"
                  >
                    customer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
