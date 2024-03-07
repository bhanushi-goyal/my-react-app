// import { useForm } from "react-hook-form"
// import React from "react"

// const Input = ({ label, register, required }) => (
//     <>
//         <label>{label}</label>
//         <input {...register(label, { required })} />
//     </>
// )

// const Select = (({ onChange, onBlur, name, label }, ref) => (
//     <>
//         <label>{label}</label>
//         <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
//             <option value="10">10</option>
//             <option value="20">20</option>
//             <option value="30">30</option>
//             <option value="40">40</option>
//         </select>
//     </>
// ))

// const NewFile = () => {

//     const { register, handleSubmit } = useForm()

//     const onSubmit = (data) => {
//         alert(JSON.stringify(data))
//     }


//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <Input label="First Name" register={register} required />
//             <Select label="Age" {...register("Age")} />
//             <input type="submit" />
//         </form>
//     )
// }

// export default NewFile


// import {useForm} from "react-hook-form"

// function NewFile(){
//     const{
//         register,
//         formstate: {errors},
//         handleSubmit,
//     } = useForm()
//     const onSubmit = (data) => console.log(data)

//     return(
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input
//                 {...register("firstname", {required: true})}
//                 aria-invalid={errors.firstName ? "true" : "false"}
//             />
//             {errors.firstName?.type === "required" && (
//                 <p role="alert">First name is required.</p>
//             )}
//             <input
//                 {...register("mail", {required: "Email address is required."})}
//                 aria-invalid={errors.mail ? "true" : "false"}
//             />
//             {errors.mail && <p role="alert">{errors.mail.message}</p>}
//             <input 
//                 {...register("password", {required: "Password is required."})}
//                 aria-invalid={errors.password ? "true" : "false"}
//             />
//             {errors.password && <p role="alert">{errors.password.message}</p>}
//             <input type="submit" />
//         </form>
//     )
// }

// export default NewFile

//add a new comment for push git command

import React from "react"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const SignUpSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().required().positive().integer(),
    website: yup.string().required().url()
})
function NewFile(){
    const{
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(SignUpSchema)
    })
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" mb-6">
                <label>First Name</label>
                <input {...register("firstName")} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
            <div className=" mb-6">
                <label>Last Name</label>
                <input {...register("lastName")} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
            <div className=" mb-6">
                <label>Age</label>
                <input type="number" {...register("age",{valueAsNumber: true })} /> 
                {errors.age && <p>{errors.age.message}</p>}
            </div>
            <div>
                <label>Website</label>
                <input {...register("website")} />
                {errors.website && <p>{errors.website.message}</p>}
            </div>
            <input type="submit" />
        </form>
    )
}

// const rootElement = document.getElementById("root")
// ReactDOM.render(<NewFile />, rootElement)
export default NewFile