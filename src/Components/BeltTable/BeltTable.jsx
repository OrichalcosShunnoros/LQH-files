import { beltData } from "./BeltDt";
import "./BeltTable.css";

export const BeltTable = () => {
  return (
    <div className="table-container">
      <table className="belt-table">
        <thead>
          <tr>
            <th>Color</th>
            <th>Grado</th>
            <th>Rango</th>
            <th>Significado</th>
          </tr>
        </thead>
        <tbody>
          {beltData.map((belt, index) => {
            const colors = belt.color || ["#000", "#000"];
            const primaryColor = colors[0] || "#000";
            const secondaryColor = colors[1] || primaryColor;

            return (
              <tr key={index}>
                <td
                  style={{
                    background: `linear-gradient(180deg, ${primaryColor} 50%, ${secondaryColor} 50%)`,
                    fontWeight: "bold",
                    textAlign: "center",
                    border: "5px solid #222"
                  }}
                ></td>
                <td>{belt.grado}</td>
                <td>{belt.rango}</td>
                <td>{belt.significado}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
