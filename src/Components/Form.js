import React, { useState, useMemo } from "react"
// import { MyContext } from "../Context/MyContext";

function Form(){

    // const {lastName, setLastName} = useContext(MyContext)
    // const {email, setEmail} = useContext(MyContext)
    // const {phone, setPhone} = useContext(MyContext)
    // const {password, setPassword} = useContext(MyContext)
    // const {confirmPassword, setConfirmPassword} = useContext(MyContext)
    // const {dob, setDob} = useContext(MyContext)
    // const {gender, setGender} = useContext(MyContext)
    // const {city, setCity} = useContext(MyContext)
    // const {homeCourt, setHomeCourt} = useContext(MyContext)
    // const {skill, setSkill} = useContext(MyContext)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState([])
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [dob, setDob] = useState("")
    const [gender, setGender] = useState("")
    const [city, setCity] = useState("")
    const [homeCourt, setHomeCourt] = useState("")
    const [skill, setSkill] = useState("")

    const memoizedState = useMemo(() => {
        return{
            firstName, setFirstName, lastName, setLastName, email, setEmail, phone, setPhone,
            password, setPassword, confirmPassword, setConfirmPassword, dob, setDob, gender, setGender,
            city, setCity, homeCourt, setHomeCourt, skill, setSkill
    }},[
        firstName, setFirstName, lastName, setLastName, email, setEmail, phone, setPhone, password,
        setPassword, confirmPassword, setConfirmPassword, dob, setDob, gender, setGender, city, setCity,
        homeCourt, setHomeCourt, skill, setSkill
    ])


    return(
        <div className="flex flex-wrap">
            <div className="p-8 bg-[#6c6c6c3b] w-[80%] ml-auto mr-auto">
                <h1 className="text-center m-2 text-2xl underline">
                    Complete your profile to continue
                </h1>
                <div className="p-6 grid grid-cols-2 gap-4">

                    <input className=" p-2 rounded" 
                        placeholder="First Name" 
                        value={firstName} 
                        name="firstName" 
                        type="text" 
                        onChange={(event) => {memoizedState.setFirstName(event.target.value)}} 
                    />
                    
                    <input className=" p-2 rounded" 
                        placeholder="Last Name" 
                        value={lastName} 
                        type="text" 
                        name="lastName" 
                        onChange={(event) => {memoizedState.setLastName(event.target.value)}} 
                    />
                    
                    <input className=" p-2 rounded" 
                        placeholder="Email Id" 
                        value={email} 
                        type="text" 
                        name="email" 
                        onChange={(event) => {memoizedState.setEmail(event.target.value)}} 
                    />

                    <input className=" p-2 rounded" 
                        placeholder="Phone Number" 
                        value={phone} 
                        name="phone" 
                        type="number" 
                        onChange={(event) => {memoizedState.setPhone(event.target.value)}} 
                    />
                    <input className=" p-2 rounded" 
                        placeholder="Password" 
                        value={password} 
                        name="password" 
                        type="password" 
                        onChange={(event) => {memoizedState.setPassword(event.target.value)}} 
                    />
                    
                    <input className=" p-2 rounded" 
                        placeholder="Confirm Password" 
                        value={confirmPassword} 
                        name="confirmPassword" 
                        type="password" 
                        onChange={(event) => {memoizedState.setConfirmPassword(event.target.value)}} 
                    />

                    <input className=" p-2 rounded" 
                        placeholder="DOB" 
                        value={dob} 
                        name="dob" 
                        type="number" 
                        onChange={(event) => {memoizedState.setDob(event.target.value)}} 
                    />
                    
                    <input className=" p-2 rounded" 
                        placeholder="Gender" 
                        value={gender} 
                        name="gender" 
                        type="text" 
                        onChange={(event) => {memoizedState.setGender(event.target.value)}} 
                    />
                    
                    <input className=" p-2 rounded" 
                        placeholder="City" 
                        value={city} 
                        name="city" 
                        type="text" 
                        onChange={(event) => {memoizedState.setCity(event.target.value)}} 
                    />

                    <input className=" p-2 rounded" 
                        placeholder="Home Court" 
                        value={homeCourt} 
                        name="homeCourt" 
                        type="text" 
                        onChange={(event) => {memoizedState.setHomeCourt(event.target.value)}} 
                    />
                    
                    <div className=" flex items-center ml-auto ">
                        <input className=" p-2 rounded" 
                            placeholder="Skill Levels"
                            value={skill}
                            name="skill"
                            type="text"
                            onChange={(event) => {memoizedState.setSkill(event.target.value)}}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <input type="checkbox"
                        className="w-4 h-4"
                    />
                    <label className="ms-2 text-sm font-medium">
                        I agree with the
                        <a href="text"
                            className="text-green-600"
                        > Terms and Conditions
                        </a> and
                        <a href="text"
                            className="text-green-600"
                        > Privacy Policy
                        </a> .
                    </label>
                </div>

                <div>
                    <input type="checkbox"
                        className="w-4 h-4"
                    />
                    <label className="ms-2 text-sm font-medium">
                        I agree to recieve marketing newsletters and other information.
                    </label>
                </div>

                <div className="items-center justify-center flex-col p-6 grid">
                    <button className="rounded bg-green-500 p-2 px-4 text-center flex items-center" onClick={() => {}}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form
