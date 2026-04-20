import { useEffect, useState } from "react";
import type { Sportlane } from "../models/Sportlane";
import type { Riik } from "../models/Riik";

function ManageSportlased() {
    const [sportlane, setSportlane] = useState<Sportlane[]>([]);
    const [countries, setCountries] = useState<Riik[]>([]);

    const [newSportlane, setNewSportlane] = useState<{
      name: string;
      country: Riik | null;
    }>({
      name: "",
      country: null
    });

    useEffect(() => {
    fetch("http://localhost:8090/athletes")
      .then(res => res.json())
      .then(setSportlane);

    fetch("http://localhost:8090/countries")
      .then(res => res.json())
      .then(setCountries);
  }, []);

    const deleteSportlane = (id: number) => {
      fetch("http://localhost:8090/athletes/" + id, {
        method: "DELETE"
      }).then(() => {
        setSportlane(prev => prev.filter(s => s.id !== id));
      });
    };

    const addSportlane = () => {
      fetch("http://localhost:8090/athletes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSportlane)
      })
        .then(res => res.json())
        .then((created) => {
          setSportlane([...sportlane, created]);

          setNewSportlane({
            name: "",
            country: null
          });
        });
    };


  return (
    <div>
        <div>
            <label>Name</label> <br />
            <input value={newSportlane.name} onChange={(e) => setNewSportlane({ ...newSportlane, name: e.target.value })}/> <br />
            <label>Country</label> <br />
            <select
              value={newSportlane.country?.id ?? ""}
              onChange={(e) => {
                const selected = countries.find(
                  c => c.id === Number(e.target.value)
                );

                setNewSportlane({
                  ...newSportlane,
                  country: selected || null
                });
              }}
            >
              <option value="">Vali riik</option>

              {countries.map(country => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
            <button onClick={addSportlane}>Add Sportlane</button>
        </div>
        <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Country</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {sportlane.map(sportlane => 
            <tr key = {sportlane.id}>
              <td>{sportlane.id}</td>
              <td>{sportlane.name}</td>
              <td>{sportlane.country?.name ?? "-"}</td>
              <td><button onClick={() => deleteSportlane(Number(sportlane.id))}>X</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default ManageSportlased