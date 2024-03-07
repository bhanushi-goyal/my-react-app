import React from "react"
import StartCode from "./StartCode"
// import { MyContext } from "./Context/MyContext"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NewFile from "./Components/NewFile"

function App() {

  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [email, setEmail] = useState("")
  // const [phone, setPhone] = useState([])
  // const [password, setPassword] = useState([])
  // const [confirmPassword, setConfirmPassword] = useState([])
  // const [dob, setDob] = useState("")
  // const [gender, setGender] = useState("")
  // const [city, setCity] = useState("")
  // const [homeCourt, setHomeCourt] = useState("")
  // const [skill, setSkill] = useState("")

  return (

    <div>
      {/* <MyContext.Provider value={{firstName, setFirstName, lastName, setLastName, email, setEmail,
      password, setPassword, confirmPassword, setConfirmPassword, dob, setDob, gender, setGender,
      homeCourt, setHomeCourt, skill, setSkill, phone, setPhone, city, setCity}}>

      </MyContext.Provider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartCode />} />
          <Route path="/new" element={<NewFile />} />
        </Routes>
      </BrowserRouter>
      {/* <StartCode /> */}
    </div>
  )
}

export default App
