import { useEffect, useState } from "react";
import type { Sportlane } from "../models/Sportlane";
import type { Riik } from "../models/Riik";


function HomePage() {
  const [sportlane, setSportlane] = useState<Sportlane[]>([]);
    const [countries, setCountries] = useState<Riik[]>([]);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("id,asc");
  const [activeCategoryId, setActiveCategoryId] = useState(0);

  useEffect(() => {
          fetch("http://localhost:8090/athletes")
          .then(res => res.json())
          .then(json => setSportlane(json))

          fetch("http://localhost:8090/countries")
          .then(res => res.json())
          .then(setCountries);
      }, []);

  const sortHandler = (newSort: string) => {
    setSort(newSort);
    setPage(0);
  }

  return (
    <div>

      <br /><br />

      <button onClick={() => sortHandler("id,asc")}>Sorteeri vanemad enne</button>
      <button onClick={() => sortHandler("id,desc")}>Sorteeri uuemad enne</button>

      <br /><br />

      <button
        onClick={() => setActiveCategoryId(0)}
        style={activeCategoryId === 0 ? { fontWeight: "bold" } : undefined}
      >
        Kõik riigid
      </button>

      {countries.map(country => (
        <button
          key={country.id}
          onClick={() => setActiveCategoryId(country.id)}
          style={activeCategoryId === country.id ? { fontWeight: "bold" } : undefined}
        >
          {country.name}
        </button>
      ))}
      
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {sportlane
              .filter(s =>
                activeCategoryId === 0
                  ? true
                  : (s.country?.id ?? 0) === activeCategoryId
              )
              .map(s => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.country?.name}</td>
                </tr>
            ))}
            {sportlane
              .filter(s =>
                activeCategoryId === 0
                  ? true
                  : (s.country?.id ?? 0) === activeCategoryId
              ).length === 0 && (
              <tr>
                <td colSpan={3}>No athletes found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HomePage