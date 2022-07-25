import { useContext } from "react";
import { BrandContext } from "../../../contexts/BrandContext";
import { ControllerContext } from "./Controller";

const View = () => {
  const { data } = useContext(ControllerContext);

  return (
    <div>
      <table>
        <tbody>
          {data &&
            data.map((person) => (
              <tr key={person?.name}>
                <td>{person?.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
