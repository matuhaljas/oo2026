import { useState, useEffect } from "react";
import type { Tulemus } from "../models/Tulemus";
import type { Sportlane } from "../models/Sportlane";
import type { Spordiala } from "../models/Spordiala";

function LisaTulemused() {
    const [tulemus, setTulemus] = useState<Tulemus[]>([]);
      const [sportlased, setSportlane] = useState<Sportlane[]>([]);
      const [spordialad, setSpordiala] = useState<Spordiala[]>([]);
      const [newTulemus, setNewTulemus] = useState<{
      punktid: number;
      spordiala: Spordiala | null;
      sportlane: Sportlane | null;
      }>({
        punktid: 0,
        spordiala: null,
        sportlane: null  // was duplicated as spordiala
      });


    useEffect(() => {
              fetch("http://localhost:8090/spordialad")
              .then(res => res.json())
              .then(setSpordiala);
    
              fetch("http://localhost:8090/athletes")
              .then(res => res.json())
              .then(setSportlane);
    
              fetch("http://localhost:8090/tulemused")
              .then(res => res.json())
              .then(json => setTulemus(json))
          }, []);

    const addTulemus = () => {
      fetch("http://localhost:8090/tulemused", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          punktid: newTulemus.punktid,
          spordialaId: newTulemus.spordiala?.id,
          sportlaneId: newTulemus.sportlane?.id
        })
      })
        .then(res => res.json())
        .then((created) => {
          setTulemus([...tulemus, created]);

          setNewTulemus({
            punktid: 0,
            spordiala: null,
            sportlane: null
          });
        });
    };

  return (
    <div>
        
        <div>
            <label>Puntid</label> <br />
            <input type="number" value={newTulemus.punktid} onChange={(e) => setNewTulemus({ ...newTulemus, punktid: Number(e.target.value) })}/> <br />
            <label>Sportlane</label> <br />
            <select
              value={newTulemus.sportlane?.id ?? ""}
              onChange={(e) => {
                const selected = sportlased.find(
                  c => c.id === Number(e.target.value)
                );

                setNewTulemus({
                  ...newTulemus,
                  sportlane: selected || null
                });
              }}
            >
              <option value="">Vali sportlane</option>

              {sportlased.map(sportlane => (
                <option key={sportlane.id} value={sportlane.id}>
                  {sportlane.name}
                </option>
              ))}
            </select> <br />
            <label>Spordiala</label> <br />
            <select
              value={newTulemus.spordiala?.id ?? ""}
              onChange={(e) => {
                const selected = spordialad.find(
                  c => c.id === Number(e.target.value)
                );

                setNewTulemus({
                  ...newTulemus,
                  spordiala: selected || null
                });
              }}
            >
              <option value="">Vali spordiala</option>

              {spordialad.map(spordiala => (
                <option key={spordiala.id} value={spordiala.id}>
                  {spordiala.name}
                </option>
              ))}
            </select> <br />
            <button onClick={addTulemus}>Add Tulemus</button>
        </div>

    </div>
  )
}

export default LisaTulemused