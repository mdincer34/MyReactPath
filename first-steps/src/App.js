import { useState } from "react";

function App() {
  const [name, setName] = useState("Mustafa");
  const [age, setAge] = useState(19);
  const [friends, setFriends] = useState(["Ahmet", "Mehmet"]);
  const [address, setAddress] = useState({ title: "Istanbul", zip: 34000 });
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(22)}>Change Age</button>

      <hr />
      <br />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}

      <br />

      <button onClick={() => setFriends([...friends, "Derya"])}>
        Add New Friend
      </button>

      <hr />
      <br />

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <br></br>
      <button
        onClick={() =>
          setAddress({ ...address, title: "Eskişehir", zip: "26000" })
        }
      >
        Change Address
      </button>
    </div>
  );
}

export default App;
