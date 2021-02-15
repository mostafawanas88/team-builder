import './App.css';
import React, { useState } from "react";
import Team from "./Components/Team"
import TeamForm from "./Components/TeamForm"

const initialForm = {
  name: "",
  position: "",
  email: ""
}

function App() {
  const [team, setTeam] = useState([]);
  const [form, setForm] = useState(initialForm);

  const submit = () => {
    setTeam([...team, form]);
    setForm(initialForm);
  }

  const update = () => {
    setForm({...form, [name]: value})
  }

  return (
    <div className="App">
      <h1>Team-mates Form</h1>

      <TeamForm form={form} update={update} submit={submit} />

       {
         team.map(teamMember => {
           return (
             <Team details={teamMember} />
           )
         })
       }
    </div>
  );
}

export default App;
