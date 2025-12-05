import { useState } from "react"
import axios from 'axios'
import HelloStringColorizer from "./HelloStringColorizer"

export default function Hello() {
    const [message, setMessage] = useState("");
    const [msgIndex, setMsgIndex] = useState(null);
    
  
    async function handleGetHello(){
        try {
        const response = await axios.get('/hello');
        if (response.status === 200) {
            const data = response.data;
            setMessage(data?.message || 'No message received');
            setMsgIndex(data?.msgIndex || null);
        } else {
            setMessage('Error fetching message');
        }
        } catch (error) {
        console.error('Error fetching message:', error);
        setMessage('Error fetching message');
        }
    }

    return (
        <>
            <div className="text-xl font-semibold mb-4">Hello Component</div>
            <div className="mb-4 flex flex-row items-center w-full justify-center gap-4">
                
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleGetHello}>Get Message</button>
                <div id="message" className='w-1/3 bg-white border border-gray-300 rounded-lg p-4 font-semibold text-center italic'>
                    <HelloStringColorizer text={`"${message}"`} />
                </div>
                <span className="text-gray-600">Index: {msgIndex !== null ? msgIndex : "N/A"}</span>
            </div>
        </>
    )
}