import { useEffect } from "react";

import { useState } from "react";
export default function Profile(props) {
  const [receiveformdata, setreceiveformdata] = useState([]);

  useEffect(() => {
    // Retrieve data from localStorage
    const data2 = sessionStorage.getItem("formArray");
    // If data exists, parse the JSON string back into an array
    if (data2) {
      setreceiveformdata(JSON.parse(data2));
    }
  }, []);
  const data1 = JSON.parse(sessionStorage.getItem("checkdata"));
  console.log(data1);
  return (
    <div>
      <div>
        <table class="table">
          <tbody>
            <tr class="table-bg dark">
              <th>s.no</th>
              <th>customer id </th>
              <th>name</th>
              <th>email id</th>
              <th>password</th>
              <th>mobile.no</th>
              <th>address</th>
              <th>car.no</th>
              <th>car company</th>
              <th>car model </th>
              <th>car color</th>
              <th>employee name</th>
              <th>employee phone no</th>
              <th>date</th>
            </tr>
            {receiveformdata.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <th>{"10" + i + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td>{data.phone_no}</td>
                  <td>{data.address}</td>
                  <td>{data.car_no}</td>
                  <td>{data.car_company}</td>
                  <td>{data.car_model}</td>
                  <td>{data.car_color}</td>
                  <td>{data.employeename}</td>
                  <td>{data.employeephoneno}</td>
                  <td>{data.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <a href="/dashbord">go to dashbord</a>
    </div>
  );
}
