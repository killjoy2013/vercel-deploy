import { useContext } from "react";
import { ControllerContext } from "./Controller";

const View = () => {
  const { data } = useContext(ControllerContext);

  console.log({ data });

  return (
    <div>
      <table>
        <tbody>
          {data &&
            data.map((person) => (
              <tr key={person?.name}>
                <td>{person?.name}</td>
                <td>{person?.gender}</td>
                <td>{person?.mass}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
