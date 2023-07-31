import "./App.css";
import { useState } from "react";
import CONTACTS from "./data/contacts";
import ContactItem from "./components/ContactItem";

function App() {
  const [name, setName] = useState("Abhi");
  const [list, setList] = useState(CONTACTS);
  const [email, setemail] = useState("");
  const [filter, setFilter] = useState("");

  const clickHnadler = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };

  const addContact = () => {
    setList([{ name, email }, ...list]);
  };

  const searchFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="App">
      <h1>Phone Book</h1>
      <h3> Add contacts</h3>
      <label>Name</label> <input type="text" onChange={clickHnadler}></input>
      <br></br>
      <label>Email</label>{" "}
      <input
        type="text"
        onChange={(event) => setemail(event.target.value)}
      ></input>
      <br></br>
      <br></br>
      <div></div>
      <button onClick={addContact}>ADD</button>
      <br></br>
      <br></br>
      <label> Search </label>
      <input type="text" onChange={searchFilter}></input>
      <div>
        <h3> Your contacts</h3>
        <ul>
          {/* {list.map((item) => (
            <ContactItem contactItem={item} />
          ))} */}
          {list
            .filter((item) =>
              item.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((item) => (
              <ContactItem contactItem={item} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
