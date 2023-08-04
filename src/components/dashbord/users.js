import { useEffect } from "react";
import { useState } from "react";
export default function User() {
  const [myArray, setMyArray] = useState([]);
  useEffect(() => {
    const storedData = sessionStorage.getItem("myArray");

    if (storedData) {
      const parsedArray = JSON.parse(storedData);
      setMyArray(parsedArray);
    }
  }, []);
  const removeItem = (indexToRemove) => {
    const storedData = sessionStorage.getItem("myArray");

    if (storedData) {
      const dataArray = JSON.parse(storedData);

      // Remove the item from the array
      const updatedArray = dataArray.filter(
        (item, index) => index !== indexToRemove
      );
      // Store the updated array back into session storage
      sessionStorage.setItem("myArray", JSON.stringify(updatedArray));
    }
  };

  return (
    <div>
      <table
        class="table"
        border="2px"
        classname="my-table"
        width="100%"
        backgroundcolor="white"
      >
        <tbody border="1px">
          <tr class="table-dark">
            <th>s.no</th>
            <th>UserName</th>
            <th>password</th>
            <th>update</th>
            <th>delete</th>
          </tr>
          {myArray.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>
                <button>update</button>
              </td>
              <td>
                <button onClick={() => removeItem(i)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        style={{ marginLeft: "560px", marginTop: "20px", textAlign: "center" }}
      >
        <a href="dashbord">go to dashbord</a>
      </button>
    </div>
  );
}
