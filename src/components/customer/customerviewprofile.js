import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const Customerviewprofile = () => {
  const [receiveformdata, setreceiveformdata] = useState([]);
  const logindata = JSON.parse(sessionStorage.getItem("customerlogin"));
  useEffect(() => {
    const data2 = sessionStorage.getItem("formArray");
    if (data2) {
      setreceiveformdata(JSON.parse(data2));
    }
  }, []);

  const Userfound = receiveformdata.some(
    (item) =>
      logindata.username === item.name && logindata.password === item.password
  );
  return (
    <div>
      {Userfound ? (
        <div>
          {receiveformdata.map((data, i) => {
            return (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <h3 style={{ marginLeft: 400 }}>
                    “customer satisfaction is our first priority.”
                  </h3>
                </div>
                <div style={{ marginLeft: 250, marginRight: 150 }}>
                  <table class="table">
                    <tbody>
                      <tr
                        class="table-darked"
                        style={{
                          marginLeft: "400px",
                          marginRight: "100px",
                          width: "600px",
                        }}
                      >
                        <th>key</th>
                        <th>value</th>
                      </tr>
                      <tr>
                        <td>customer id </td>
                        <td>{"10" + i + 1}</td>
                      </tr>
                      <tr>
                        <td>name</td>
                        <td>{data.name}</td>
                      </tr>
                      <tr>
                        <td>email id</td>
                        <td>{data.email}</td>
                      </tr>
                      <tr>
                        <td>password</td>
                        <td>{data.password}</td>
                      </tr>
                      <tr>
                        <td>mobile.no</td>
                        <td>{data.phone_no}</td>
                      </tr>
                      <tr>
                        <td>address</td>
                        <td>{data.address}</td>
                      </tr>
                      <tr>
                        <td>car.no</td>
                        <td>{data.car_no}</td>
                      </tr>
                      <tr>
                        <td>car company</td>
                        <td>{data.car_company}</td>
                      </tr>
                      <tr>
                        <td>car model </td>
                        <td>{data.car_model}</td>
                      </tr>
                      <tr>
                        <td>car color</td>
                        <td>{data.car_color}</td>
                      </tr>
                      <tr>
                        <td>employeename</td>
                        <td>{data.employeename}</td>
                      </tr>
                      <tr>
                        <td>employeephoneno</td>
                        <td>{data.employeephoneno}</td>
                      </tr>
                      <tr>
                        <td>date</td>
                        <td>{data.date}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        console.log("user not found")
      )}
      <a href="/dashbord" style={{ marginLeft: 600 }}>
        go to dashbord
      </a>
    </div>
  );
};
