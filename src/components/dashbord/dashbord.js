import { useEffect, useState } from "react";

export default function Dashbord() {
  const [customer, setcustomer] = useState([]);
  const [receiveemployee, setreceiveemployee] = useState([]);
  const loginwith = sessionStorage.getItem("Loginwith");
  console.log(loginwith);
  const lengthOfEmployee = receiveemployee.length;
  const lengthOfCustomer = customer.length;
  useEffect(() => {
    const storedArray =
      JSON.parse(sessionStorage.getItem("employeedata")) || [];
    if (storedArray) {
      setreceiveemployee(storedArray);
    }
    setcustomer(JSON.parse(sessionStorage.getItem("formArray")) || []);
  }, []);

  //log out return to signup page
  const logout = (indexToRemove) => {
    const storedData = sessionStorage.getItem("userData");

    if (storedData) {
      const dataArray = JSON.parse(storedData);
      const updatedArray = dataArray.filter(
        (item, index) => index !== indexToRemove
      );

      // Store the updated array
      sessionStorage.setItem("userData", JSON.stringify(updatedArray));
    }
  };

  const currentDate = new Date();
  console.log(currentDate);

  return (
    <div style={{ height: "100%", backgroundColor: "#d0e4e7" }}>
      <div class="card text-center mb-4">
        <div class="card-header" style={{ backgroundColor: "black" }}>
          <ul class="nav nav-tabs card-header-tabs  me-auto mb-4 ">
            <li class="nav-item">
              <a class="nav-link" href="#">
                dashbord
              </a>
            </li>
            {loginwith === "manager" ? (
              <li class="nav-item ">
                <a class="nav-link" href="/employe_edetails">
                  employee
                </a>
              </li>
            ) : (
              console.log("")
            )}
            {loginwith === "manager" ? (
              <li class="nav-item">
                <a class="nav-link" href="/car service form">
                  customer profile
                </a>
              </li>
            ) : (
              console.log("")
            )}
            {loginwith === "manager" || loginwith === "employee" ? (
              <li class="nav-item">
                <a class="nav-link" href="/wah_history">
                  wash
                </a>
              </li>
            ) : (
              console.log("")
            )}
            {loginwith === "manager" ? (
              <li class="nav-item">
                <a class="nav-link" href="users">
                  users
                </a>
              </li>
            ) : (
              console.log("")
            )}

            {loginwith === "customer" ? (
              <li class="nav-item">
                <a class="nav-link" href="/customer_view_profile">
                  customer_view_profile
                </a>
              </li>
            ) : (
              console.log("")
            )}
            {loginwith === "manager" ? (
              <li class="nav-item">
                <a class="nav-link" href="/add_employee">
                  add employee
                </a>
              </li>
            ) : (
              console.log("")
            )}
            {loginwith === "customer" ||
            loginwith === "manager" ||
            loginwith === "employee" ? (
              <li class="nav-item">
                <a class="nav-link" href="/" onClick={logout}>
                  log out
                </a>
              </li>
            ) : (
              console.log("")
            )}
          </ul>
        </div>

        <div
          style={{
            backgroundImage: "linear-gradient(90deg, #00ffff, #bb33ff)",
          }}
        >
          <marquee>
            Welcome To Car Wash Service Center In Your City , I Hope We will
            satisfy the customers requirement.
          </marquee>
        </div>
        {loginwith === "manager" ? (
          <div
            style={{
              display: "flex",
              backgroundColor: "lightblue",
              justifyContent: "center",
            }}
          >
            <div style={{ backgroundColor: "green", padding: 20 }}>
              <h3>employee</h3>
              <h4>{lengthOfEmployee}</h4>
            </div>

            <div
              style={{
                backgroundColor: "green",
                padding: 20,
                marginLeft: 20,
              }}
            >
              <h3>customer</h3>
              <h3>{lengthOfCustomer}</h3>
            </div>
            <div
              style={{
                backgroundColor: "green",
                padding: 20,
                marginLeft: 20,
              }}
            >
              <h3>date</h3>
              <input
                style={{ backgroundColor: "green" }}
                type="text"
                value={currentDate}
                readOnly="true"
              />
            </div>
          </div>
        ) : (
          console.log("")
        )}
      </div>
      <div id="logoimage"></div>
      <br />
      <div>
        <p
          style={{
            marginLeft: "560px",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          location : 35,gandhi nagar,thiruvannamalai
        </p>
      </div>
    </div>
  );
}
