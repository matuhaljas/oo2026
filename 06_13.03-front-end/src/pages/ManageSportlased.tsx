import { useEffect, useState } from "react";
import type { Sportlane } from "../models/Sportlane";

function ManageSportlased() {
    const [sportlane, setSportlane] = useState<Sportlane[]>([]);
    const [ newSportlane, steNewSportlane] = useState<Sportlane>({
        name: ""
    })

    useEffect(() => {
        fetch("http://localhost:8090/athletes")
        .then(res => res.json())
        .then(json => setSportlane(json))
    }, []);

    const deleteSportlane = (sportlaneId: number) => {
        fetch("http://localhost:8090/athletes/" + sportlaneId, {
            method: "DELETE"
        }).then(res => res.json())
        .then(json => setSportlane(json))
    }

    const addSportlane = () => {
        fetch("http://localhost:8090/athletes", {
            method: "POST",
            body: JSON.stringify(newSportlane),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(() => {
            alert("Uus sportlane lisatud!");
            window.location.reload();
});
    }


  return (
    <div>
        <div>
            <label>Name</label> <br />
            <input onChange={(e) => steNewSportlane({...newSportlane, name: e.target.value})} type="text"/> <br />
            <button onClick={addSportlane}>Add Sportlane</button>
        </div>
        <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>tulemus</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {sportlane.map(sportlane => 
            <tr key = {sportlane.id}>
              <td>{sportlane.id}</td>
              <td>{sportlane.name}</td>
            {/*  <td>{sportlased.tulemus}</td> */}
              <td><button onClick={() => deleteSportlane(Number(sportlane.id))}>X</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default ManageSportlased