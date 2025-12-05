import { useState } from "react"
import axios from 'axios'

type JsonInputType = {
    uuid_key?: string,
    value?: string
}

export default function Json() {
    //const [message, setMessage] = useState("");
    //const [msgIndex, setMsgIndex] = useState(null);
    const [jsonInput, setJsonInput] = useState<string>("");
    const [uuidKey, setUuidKey] = useState<string>("");
    const [jsonResponse, setJsonResponse] = useState("");
    const [postResponse, setPostResponse] = useState("");

    async function sendJsonInput(){
        if (!jsonInput || jsonInput.length === 0 ){
            setPostResponse('Give Json string input');
            return;
        }
        const payLoad: JsonInputType = {uuid_key: uuidKey, value: jsonInput};
        try {
            const response = await axios.post('/json', payLoad, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                const data = response.data;
                if (data?.uuid_key && data.uuid_key.length > 0 && data.uuid_key !== uuidKey){
                    setUuidKey(data.uuid_key); // store the uuid_key for future use. It helps to update the same record and server return your value only.
                }
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
        if (!uuidKey){
            setPostResponse('No uuid_key to fetch data. Please post JSON first.');
            return;
        }

        try {
            const response = await axios.post('/json', {uuid_key: uuidKey}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                const data = response.data;
                const successMsg = data?.status || 'No message received';
                const valueJson = {uuid_key: data?.uuid_key, value: data?.value};
                setPostResponse('GET JSON status: ' + successMsg);
                setJsonResponse(JSON.stringify(valueJson, null, 2) || 'No message received');
                
            } else {
                // pare error message from Axios response if any
                setPostResponse('Error fetching message' + (response.statusText ? ': ' + response.statusText : ''));
            }
        } catch (error: any) {
            console.error('Error fetching message:', error);
            // get error text from server if any
            setPostResponse('Error fetching message' + (error?.message ? ': ' + error?.message : ''));
        }
    }

    return (
        <>
            <div className="text-xl font-semibold mb-4">Json Component</div>
            <div className={"mb-4 flex flex-col items-center w-full justify-center gap-4"}>
                <textarea id="jsonInput" 
                    placeholder='Enter JSON here...' 
                    value={jsonInput} 
                    onChange={e => setJsonInput(e.target.value)}
                    className="w-1/2 h-20 border border-gray-300 rounded-lg p-4">
                </textarea>
                <button onClick={sendJsonInput}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:shadow transition-colors duration-300"
                    >
                        Send JSON Input
                </button>
                <button onClick={handleGetJson}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:shadow transition-colors duration-300"
                    >
                        Get JSON Response
                </button>
                <div className="text-green-600 font-semibold">{postResponse}</div>
                <textarea  
                    readOnly 
                    value={jsonResponse}
                    onChange={e => setJsonResponse(e.target.value)}
                    className="font-mono w-1/2 h-40 bg-slate-100 border border-gray-300 rounded-lg p-4"
                >

                </textarea>
            </div>
        </>
    )
}