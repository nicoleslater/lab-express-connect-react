import {useState, useEffect} from "react";
import {Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL


function CaptainLogDetails(){
    const[captainLog, setCaptainLog] = useState([]);
    let {index} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/logs/${index}`)
        .then(response => response.json())
        .then(captainLog => {
            console.log(captainLog)
            setCaptainLog(captainLog)
        })
        .catch(() => navigate("/not-found"))
    }, [index, navigate]);

    const handleDelete = () => {
        const httpOptions = {"method": "DELETE"};
        
        fetch(`${API}/logs/${index}`, httpOptions)
        .then((res) => {
            console.log(res)
            alert("This captain log was deleted!");
            navigate('/logs');
        })
        .catch((err) => console.error(err))
    };


    return (
     console.log(captainLog)

    );
}
