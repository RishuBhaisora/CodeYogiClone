import axios from "axios";
import React from "react"

export const  getLectures =
    axios.get("https://api.codeyogi.io/batches/1/sessions",{
    withCredentials:true,
  });

 export const saveData=(key,value)=>{
   localStorage.setItem(key, JSON.stringify(value))
 };

 export const getSavedData=(key)=>{
 const value = JSON.parse(localStorage.getItem(key))
   return value;
 };

export const putAssignment =(id,submissionLink)=> axios.put(
			`https://api.codeyogi.io/assignment/${id}/submit`,
			{ submissionLink },
			{ withCredentials: true }
		);
