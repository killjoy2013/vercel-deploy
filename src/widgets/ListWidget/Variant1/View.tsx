import { useContext } from "react";
import { ControllerContext } from "./Controller";

const View = () => {
  const { title, handleQuery, data } = useContext(ControllerContext);

  return (
    <div>
      <div>{title}</div>
      <button onClick={handleQuery}>bass</button>
      <table>
        <tbody>
          {data.map((person) => (
            <tr key={person?.email}>
              <td>{person?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
