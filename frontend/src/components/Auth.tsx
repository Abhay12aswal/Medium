import { signupInput } from '@abhay_aswal/medium-common';
import { useState , ChangeEvent } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import { BACKEND_URL } from '../config';

const Auth = ({type}: {type: "signup" | "signin"}) => {
  const Navigate = useNavigate();
  const [postInputs , setpostInputs] = useState<signupInput>({
    name:"",
    username:"",
    password:""
  });

  async function sendRequest (){
    try{
      const response =await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}` , postInputs);
      const jwt =  response.data;
      localStorage.setItem("token", jwt);
      Navigate("/blogs");
    } catch(e){
      //alert the user here that the request failed 
      alert("request failed")

    }
  }

  return (
    <div className='h-screen flex justify-center flex-col'>
        <div className="flex justify-center">
          <div>
            <div className='px-10'>
                <div className="text-3xl font-extrabold ">
                        Create an account
                </div>
                <div className="text-slate-400 ">
                    {type === "signin" ? "Don't have an account" : "Already have an account ? " }
                    <Link className='pt-2 underline' to={type === "signin" ? "/signup" : "/signin"}>
                    {type === "signin" ? "sign up " : "sign in "}
                    </Link>
                </div>
              </div>
              <div className='pt-8'>
                {type === "signup" ? <LabelledInput label="Name" placeholder='user ' onChange={(e)=>{
                  setpostInputs(c => ({
                    ...postInputs,
                    name: e.target.value
                    }))
                  }} /> : null
                }

                <LabelledInput label="Username" placeholder='user@gmail.com' onChange={(e)=>{
                  setpostInputs(c => ({
                    ...postInputs,
                    name: e.target.value
                  }))
                }} />

              <LabelledInput label="Password" type={"password"} placeholder='12345678' onChange={(e)=>{
                  setpostInputs(c => ({
                    ...postInputs,
                    name: e.target.value
                  }))
                }} />
                <button type="button" className="text-white w-full bg-gray-800 hover:bg-gray-900 
                focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium 
                 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800  dark:hover:bg-gray-700
                dark:focus:ring-gray-700 dark:border-gray-700">{type ==="signup" ? "sign up" : "sign in"}</button>
              </div>
            </div>
       </div>
    </div>
  )
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({ label, placeholder, onChange ,type }: LabelledInputType) {
  return (
    <div>
      <div>
        <label className="block mb-2 text-sm text-black font-semibold ">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900
             text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
             dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}

export default Auth;