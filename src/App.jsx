import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Raju", email: "Raju@gmail.com", age: "25" },
    { name: "Ali", email: "ali@gmail.com", age: "30" },
    { name: "Rohith", email: "Rohithsharma@gmail.com", age: "40" },
    { name: "Virat", email: "virat@gmail.com", age: "37" },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="container ">
      <h2 className="text-center my-5">User Panel</h2>

      <Form addUser={addUser} />

      <List users={users} />
    </div>
  );
};

export default App;
