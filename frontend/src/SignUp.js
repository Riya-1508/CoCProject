import React from "react";
import "./SignUp.css"
//import Photo_Sign from './image/Photo_SignUp.png';
import {useState} from "react";
// import axios from "axios"
// import ErrorMessage from "./ErrorMesssge";
//  import { json } from "react-router-dom";
// import { set } from "mongoose";
function SignUp() {
    // const [email,setEmail] = useState("")
    // const[password,setPassword] = useState("")
    // const[confirmpassword,setConfirmPassword] = useState("")
    // const [firstname,setFirstName] = useState("")
    // const [lastname,setlastName] = useState("")
    // const [phnNumber,setphnNumber] = useState("")
    // const[error,setError] = useState(false)
    // // const[loading,setLoading] = useState(false)
    // const[message,setMessage] = useState("")
    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     if(password !== confirmpassword){ 
    //             setMessage("Passwords Do not match");
    //     }
    //     else {
    //          setMessage(null)
    //         try {
    //             const config = {
    //                 headers: {
    //                     "Content-type": "application/json"
    //                 },
    //             }
    //             //setLoading(true)
    //             const { data } = await axios.post("http://localhost:5000/api/auth/createUser",
    //             {firstname:firstname,lastname:lastname,phnNumber:phnNumber,email:email,password:password,confirmpassword:confirmpassword,},
    //             config
    //             ) 
    //         //    setLoading(false)
           
    //         console.log(data)
    //            localStorage.setItem('userInfo',JSON.stringify(data))
            
           
    //         }

    //         catch(error)
    //         {
    //             setError(error.response.data.message)
    //         }
    //     }
       
    // }

    
    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     if(password !== confirmpassword){ 
    //             setMessage("Passwords Do not match");
    //     }
    //     else {
    //         // setMessage(null)
    //         try {
    //             const config = {
    //                 headers: {
    //                     "Content-type": "application/json"
    //                 },
    //             }
    //             //setLoading(true)
    //             const { data } = await axios.post("http://localhost:5000/api/auth/createUser",
    //             {firstname,lastname,phnNumber,email,password,confirmpassword},
    //             config
    //             ) 
    //             .then((response) => console.log(response))
    //             .catch((err) => console.log(err))
    //         //    setLoading(false)
    //         // if(data){
    //             console.log(data)
    //             localStorage.setItem('userInfo',JSON.stringify(data))
    //         // }
               
    //         }
    //         catch(error)
    //         {
    //             setError(error)
    //         }
    //     }
       
    // }
    const [cred,setCred] = useState({firstname:"",lastname:"",phnNumber:"",email:"",password:"",confirmpassword:""})
        const submitHandler = async (e) => {
            const {firstname,lastname,phnNumber,email,password,confirmpassword} = cred
            e.preventDefault();
            const response = await fetch("http://localhost:5000/api/auth/createUser",{
                
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({firstname,lastname,phnNumber,email,password,confirmpassword})
            })
                const json = await response.json(); 
                console.log(json)
                if(json.success)
                {
                    localStorage.setItem('token',json.authtoken)

                }
                else {
                    alert("Invalid Credentials")
                }
                
        }
        const onChange = (e) => {
            setCred({...cred,[e.target.name]: e.target.value})
        }
        return (
        <div className="bg-gradient-to-r from-indigo-100 via-pink-300 to-purple-900 h-screen" >
            <div className="flex space-x-48 md:flex-shrink-0">
                <div className="mt-20" >
                <p className="ml-[330px] text-4xl capitalize font-bold font-mono">Create</p>
                <span className="ml-80 text-4xl capitalize font-bold font-mono">Account</span>
                    <img className="w-[700px] h-[500px] ml-36"  alt="" />
                </div>
                <div className="border-4 border-white h-screen "></div>
                <div className="flex justify-end py-1 pr-40">
                    <div className="bg-purple-pink w-96 h-[700px] rounded-3xl flex flex-col justify-center items-center">
                        <h1 className="mb-1 text-2xl text-white font-serif">Sign Up</h1>
                        
                        {/* {loading && <Loading/>} */}
                        <form onSubmit = {submitHandler}>
                            <div className="my-0.5">
                                <label htmlFor="name" className="text-xl text-purple-violent font-bold">First Name: </label>
                                <div><input type="text" name="name" className="my-2 shadow appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline" onChange = {onChange}  ></input></div>
                            </div>
                            <div className="my-1">
                                <label htmlFor="Lname" className="text-xl text-purple-violent font-bold">Last Name: </label>
                                <div><input type="text" name="Lname" className="my-2 shadow appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline" onChange = {onChange} ></input></div>
                            </div>
                            <div className="my-1">
                                <label htmlFor="phone" className="text-xl text-purple-violent font-bold">Phone Number: </label>
                                <div><input type="tel" name="phone" className="my-2 shadow appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline" onChange = {onChange} ></input></div>
                            </div>
                            <div className="my-1">
                                <label htmlFor="email" className="text-xl text-purple-violent font-bold">Email: </label>
                                <div><input type="email" name="title" className="my-2 shadow appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline" onChange = {onChange} /></div>
                            </div>
                            <div className="my-1">
                                <label htmlFor="password" className="text-xl text-purple-violent font-bold">Password: </label>
                                <div><input type="password" name="password" className="my-2 shadow appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline" onChange = {onChange} minLength={5} ></input></div>
                            </div>
                            <div className="my-1">
                                <label htmlFor="password" className="text-xl text-purple-violent font-bold"> Confirm Password: </label>
                                <div><input type="password" name="password" className="my-2 shadow appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline" onChange = {onChange} minLength={5} required /></div>
                            </div>
                            {/* {error && <ErrorMessage variant = "danger">{error}</ErrorMessage>}
                        
                        {message && <ErrorMessage variant = "danger">{message}</ErrorMessage>} */}
                            <button type="submit" className="inline-block px-6 py-1.5 bg-purple-100 text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out" >Submit</button>
                        </form>
                        {/* <div className="my-10 text-white"> */}
                            <a href="/" className="text-white text-md mt-4 hover:underline">Already have account?</a>
                            <button type="submit" className="inline-block mt-2 px-6 py-2 bg-purple-100 text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out">Log In</button>
                        {/* </div> */}
                    </div>
                </div>
            </div >

        </div >
    );
}

export default SignUp;