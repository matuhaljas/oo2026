import { useEffect, useState } from "react";
import type { Tulemus } from "../../models/Tulemus";

function Kettaheide() {
  const [tulemus, setTulemus] = useState<Tulemus[]>([]);
    
    useEffect(() => {
            fetch("http://localhost:8090/tulemused")
            .then(res => res.json())
            .then(json => setTulemus(json))
        }, []);
        
  
    return (
      <div>
        
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
              {tulemus
                .filter(s => (s.spordiala?.id ?? 0) === 2)
                
                .map(s => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.sportlane?.name}</td>
                    <td>{s.punktid}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
  
      </div>
    )
}

export default Kettaheide