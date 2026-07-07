
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditForm from "./EditForm";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const EditPage = () => {
    const [data , setData] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
    const fetchData = async()=>{  
        try{ 
        const res = await fetch(`${API_URL}/api/tasks/${id}`) ;
        const json = await res.json();

        setData(json);
    }
    catch(err){
        console.log("err:",err.message);
    }
    }
    fetchData();
},[id])
  return (
    <div className="container mt-4">
        {data ? <EditForm data={data}/> : <div className="text-center">Loading...</div>}
    
    </div>
  )
}

export default EditPage
