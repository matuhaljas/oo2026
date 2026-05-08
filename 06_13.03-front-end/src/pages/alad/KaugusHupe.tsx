import { useEffect, useState } from "react";
import type { Tulemus } from "../../models/Tulemus";

function KaugusHupe() {
  const [tulemus, setTulemus] = useState<Tulemus[]>([]);
  const [sort, setSort] = useState("id,asc");
  
  useEffect(() => {
          fetch("http://localhost:8090/tulemused")
          .then(res => res.json())
          .then(json => setTulemus(json))
      }, []);

  const sortHandler = (newSort: string) => {
    setSort(newSort);
  }

  const sorted = [...tulemus]
  .filter(s => (s.spordiala?.id ?? 0) === 1)
  .sort((a, b) => {
    if (sort === "id,asc") return (a.id ?? 0) - (b.id ?? 0);
    if (sort === "id,desc") return (b.id ?? 0) - (a.id ?? 0);
    return 0;
  });
      

  return (
    <div>

      <br /><br />

      <button onClick={() => sortHandler("punktid,desc")}>Sorteeri kõrgemad tulemused enne</button>
      <button onClick={() => sortHandler("punktid,asc")}>Sorteeri madalamad tulemused enne</button>

      <br /><br />
      
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Tulemus</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(s => (
              <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.sportlane?.name}</td>
                  <td>{s.punktid}</td>
                </tr>
            ))}
            {sorted.length === 0 && (
              <tr><td colSpan={3}>No athletes found</td></tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default KaugusHupe