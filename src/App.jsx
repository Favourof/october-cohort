import Button from "./Button"
import { Card } from "./Card"
import appStyle from "./App.module.css"
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)

  let counter = 0

  const handleIncrement = () => {
    setCount(count + 1)
    // counter++
    console.log(count);
  }





  const name = "Ayo"
  const age = 56;
  // const user1 = {
  //   name: "Bolu",
  //   age: 18,
  //   active: true
  // }
  const [user, setUser] = useState({
    name: "Bolu",
    age: 18,
    active: true
  })

  // const users = [

  // ]
  const [users, setUsers] = useState([{
    name: "Bolu",
    age: 19,
    active: true
  },
  {
    name: "Ayo",
    age: 15,
    active: false
  },
  {
    name: "Kike",
    age: 24,
    active: true
  },
  {
    name: "John",
    age: 18,
    active: true
  }])




  return (
    <div > <p>Use state {count}</p>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>increment</button>
      <button>Decrement</button>
      <div>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.active ? "active" : "Not Active"}</p>
        <p></p>
      </div>

      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <h1 className={appStyle.header}>Hello world</h1>
      <p className={appStyle.para}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quisquam dignissimos vitae voluptate recusandae optio magnam, beatae obcaecati, molestiae voluptates at accusamus sint quis consequuntur quasi placeat itaque assumenda autem.</p>

      <Button text="Log in" bg='green' color='purple' />
      <Card />

      {
        users.map((u, i) => (
          <ul key={i}>
            <li>{u.name}</li>
            <li>{u.age}</li>
            <li>{u.active ? "active" : "not Active"}</li>
          </ul>
        ))
      }

      <Button text={"Submit"} bg="red" color='white' />
    </div>

  )
}

export default App

