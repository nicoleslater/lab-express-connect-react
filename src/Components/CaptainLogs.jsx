import { useEffect, useState} from "react";

// import CaptainLog from "./CaptainLog";

const API = import.meta.env.VITE_BASE_URL

function CaptainLogs(){
    const [captainLogs, setCaptainLogs] = useState([]);
    useEffect(()=> {
        fetch(`${API}/logs`)
        .then((response) => response.json())
        .then(captainLogs => setCaptainLogs(captainLogs))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="CaptainLogs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Take me there</th>
                            <th>See this Log</th>
                        </tr>
                    </thead>
                    <tbody>
                        {captainLogs.map((_captainLogs, index) => {
                            return <CaptainLog key={index} captainLog={captainLog} index={index} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
export default CaptainLogs;