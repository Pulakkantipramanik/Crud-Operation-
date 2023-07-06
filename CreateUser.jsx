import style from './home.module.css'
import axios from "axios"
import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const CreateUser=()=>{
 
let [name, setName] = useState("")
let [salary ,setSalary] = useState("")
let [company ,setCompany] = useState("")

let navigate =useNavigate()

let nameData=(e)=>{
  setName(e.target.value)
}
let salaryData=(e)=>{
  setSalary(e.target.value)
}
let companyData=(e)=>{
  setCompany(e.target.value)
}
let formHandle=()=>{
  let payload ={name,salary,company}
  axios.post("http://localhost:3000/user",payload)
  .then(()=>{
    console.log("data has uploaded");
  })
  .catch(()=>{
    console.log("Data is not uploaded");
  })
  navigate("./users")
}
return (
    <div id={style.myForm}>
        <article>
            <label>Name  </label>
            <input type='text' value={name} onChange={nameData}></input> <br/>
            <label>Salary </label>
            <input type='text' value={salary} onChange={salaryData}></input> <br/>
            <label>Company</label>
            <input type='text' value={company} onChange={companyData}></input> <br/>
            <button onClick={formHandle}> Submit</button>
        </article>
    </div>
  )
}
export default CreateUser
