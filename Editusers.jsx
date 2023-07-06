import React, { useEffect } from 'react'
import style from './home.module.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Editusers = () => {
    let [name, setName] = useState("")
   let [salary ,setSalary] = useState("")
    let [company ,setCompany] = useState("")

    let {index}=useParams()
    console.log(index);

  let navigate = useNavigate()

      useEffect(()=>{
      axios.get(`http://localhost:3000/user/${index}`)
      .then((response)=>{
        // console.log(response.data);
        console.log("got the data in edituser");
        setName(response.data.name)
        setSalary(response.data.salary)
        setCompany(response.data.company)
      }).catch(()=>{
        console.log("did not got the data edituser");
      })
    },[index])

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
      let payload={name,salary,company}
      axios.put(`http://localhost:3000/user/${index}`,payload)
      .then(()=>{
        console.log("Data is Updated");
      }).catch(()=>{
        console.log("Data is not updated");
      })
      navigate("./users")
    }

  return (
    <div id={style.myForm}>
    <article>
            <h1>Update User</h1>
        <label>Name  </label>
        <input type='text' value={name} onChange={nameData}  ></input> <br/>
        <label>Salary </label>
        <input type='text' value={salary} onChange={salaryData} ></input> <br/>
        <label>Company</label>
        <input type='text' value={company} onChange={companyData}></input> <br/>
        <button onClick={formHandle}> Submit</button>

        </article>
        </div>   
  )
}


export default Editusers
