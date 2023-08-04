import React, { useEffect, useState } from "react";
export default function Employee_info() {
  const [receiceEmployee, setreceiveEmployee] = useState();
  const [state, setstate] = useState();
  const storedArray = JSON.parse(sessionStorage.getItem("viewemployeedata"));
  useEffect(() => {
    const storedArray =
      JSON.parse(sessionStorage.getItem("viewemployeedata")) || [];
    if (storedArray) {
      setreceiveEmployee(storedArray);
    }
    if (receiceEmployee !== "") {
      console.log("not =");
    }
  }, []);
  console.log(receiceEmployee);
  return (
    <div>
      <div
        style={{
          marginleft: 600,
          border: "1 solid",
          borderRadius: "25%",
        }}
      >
        <img src="./employee.jpeg" style={{ marginLeft: 600 }}></img>
      </div>
      <h3 style={{ marginLeft: 400 }}>
        “A little progress each day adds up to big results.”
      </h3>
      <br />
      {storedArray !== "" ? (
        <div style={{ margin: "90 150" }}>
          <table
            class="table table-borded"
            style={{
              marginLeft: "400px",
              marginRight: "100px",
              width: "600px",
            }}
          >
            <tbody>
              <tr class="table-darked">
                <th>key</th>
                <th>value</th>
              </tr>
              <tr>
                <td>customer id </td>
                <td>{storedArray.id}</td>
              </tr>

              <tr>
                <td>name</td>
                <td>{storedArray.name}</td>
              </tr>
              <tr>
                <td>email id</td>
                <td>{storedArray.emailid}</td>
              </tr>

              <tr>
                <td>mobile.no</td>
                <td>{storedArray.mobileno}</td>
              </tr>
              <tr>
                <td>address</td>
                <td>{storedArray.address}</td>
              </tr>
              <tr>
                <td>dob</td>
                <td>{storedArray.dob}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        console.log("")
      )}

      <a href="/dashbord" style={{ marginLeft: 600 }}>
        go to dashbord
      </a>
    </div>
  );
}
