import { useContext } from "react";
import { ControllerContext } from "./Controller";
import styles from "../../../../styles/ListWidgetV1.module.css";

const View = () => {
  const { data } = useContext(ControllerContext);

  return (
    <div>
      {data &&
        data.map((person) => (
          <div className={styles.item} key={person?.name}>
            {person?.name}
          </div>
        ))}
      {/* <table>
        <tbody>
          {data &&
            data.map((person) => (
              <tr key={person?.name}>
                <td>{person?.name}</td>
              </tr>
            ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default View;
