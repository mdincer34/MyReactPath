import List from "./List";
import From from "./Form";
import "./styles.css";
import { useState, useEffect } from "react";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phoneNumber: "05223421",
    },
    {
      fullname: "Mustafa",
      phoneNumber: "90697239",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <From addContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
