import { useState } from "react"
import axios from 'axios'

export default function Hello() {
    const [message, setMessage] = useState("");
    //const [msgIndex, setMsgIndex] = useState(null);
    const [jsonInput, setJsonInput] = useState("");
    const [jsonResponse, setJsonResponse] = useState("");
    const [postResponse, setPostResponse] = useState("");
    async function sendJsonInput(){
        try {
        const response = await axios.post('/json', JSON.parse(jsonInput), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            const data = response.data;
            //const msg = (JSON.stringify(data, null, 2));
            //document.getElementById('jsonResponse').value = JSON.stringify(data, null, 2);
            setPostResponse('POST successful - ' + (data?.message || 'No message received'));
        } else {
            setJsonResponse('Error posting JSON');
            //setPostResponse('Error posting JSON');
        }
        } catch (error) {
        console.error('Error posting JSON:', error);
        //setJsonResponse('Error posting JSON');
        setPostResponse('Error posting JSON');
        }   
    }


    async function handleGetJson(){
        try {
            const response = await axios.get('/json');
            if (response.status === 200) {
                const data = response.data;
                setJsonResponse(JSON.stringify(data, null, 2) || 'No message received');
                
            } else {
                setPostResponse('Error fetching message');
            }
        } catch (error) {
            console.error('Error fetching message:', error);
            setPostResponse('Error fetching message');
        }
    }

    return (
        <>
            <div className="text-xl font-semibold mb-4">Json Component</div>
            <div className={"mb-4 flex flex-col items-center w-full justify-center gap-4"}>
                <textarea id="jsonInput" 
                    rows="10" cols="50" 
                    placeholder='Enter JSON here...' 
                    value={jsonInput} 
                    onChange={e => setJsonInput(e.target.value)}
                    className="w-1/2 border border-gray-300 rounded-lg p-4">
                </textarea>
                <button onClick={sendJsonInput}
                    className="bg-blue-500 text-white px-4 py-2 rounded">Send JSON Input</button>
                <button onClick={handleGetJson}
                    className="bg-blue-500 text-white px-4 py-2 rounded">
                        Get JSON Response
                </button>
                <div className="text-green-600 font-semibold">{postResponse}</div>
                <textarea rows="10" 
                    cols="50" 
                    readOnly 
                    value={jsonResponse}
                    onChange={e => setJsonResponse(e.target.value)}
                    className="font-mono w-1/2 bg-slate-100 border border-gray-300 rounded-lg p-4"
                >

                </textarea>
            </div>
        </>
    )
}