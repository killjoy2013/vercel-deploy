import { useContext } from "react";
import { ControllerContext } from "./Controller";
import styles from "../../../../styles/ListWidgetV2.module.css";

const View = () => {
  const { data } = useContext(ControllerContext);

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className={styles.th}>Name</td>
            <td className={styles.th}>Gender</td>
            <td className={styles.th}>Mass</td>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((person) => (
              <tr className={styles.tr} key={person?.name}>
                <td className={styles.td}>{person?.name}</td>
                <td className={styles.td}>{person?.gender}</td>
                <td className={styles.td}>{person?.mass}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
