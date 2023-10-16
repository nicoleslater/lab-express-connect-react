import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function CaptainLogEditForm(){
    let {index} = useParams();

    const [captainLog, setCaptainLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false, 
        daysSinceLastCrisis: 0
    });
    const navigate = useNavigate();
    const handleTextChange = (event) => {
        setCaptainLog({...captainLog, [event.target.id]: event.target.value});
    };

    handleCheckboxChange = () => {
        setCaptainLog({...captainLog, mistakesWereMadeToday: !captainLog.mistakesWereMadeToday });
    };

    useEffect(() => {
        fetch(`${API}/logs/${index}`)
        .then(response => response.json())
        .then(captainLog => {
            console.log(captainLog)
            setCaptainLog(captainLog)
        })
        .catch(() => navigate("/not-found"))
    }, [index, navigate]);

    const updateCaptainLog = () => {
        const httpOptions = {
            "method": "PUT", 
            "body": JSON.stringify(captainLog), 
            "headers": {
                "Content-type": "application/json"
            }
        }
        
        fetch(`${API}/logs/${index}`, httpOptions)
        .then(() => {
            alert(`${captainLog.captainName} has been updated`);
            navigate(`/logs/${index}`)
        })
        .catch((err) => console.error(err))
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        updateCaptainLog();
    };

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
            </form>
        </div>
    )