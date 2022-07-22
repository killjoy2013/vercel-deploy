import { useContext } from "react";
import { ControllerContext } from "./Controller";

const View = () => {
  const { title, handleQuery, data } = useContext(ControllerContext);

  return (
    <div>
      <div>{title}</div>
      <button onClick={handleQuery}>bass</button>
      <section>
        {data.map((person) => (
          <div key={person?.email} style={{ backgroundColor: "yellow" }}>
            {person?.name.first}
          </div>
        ))}
      </section>
    </div>
  );
};

export default View;
