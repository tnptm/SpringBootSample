package com.example.demo;

/*import com.example.demo.cache.Memory;
import com.example.demo.cache.MemoryItem;
import com.example.demo.Payload;*/
import org.springframework.web.bind.annotation.*;

import java.util.Map;

//import com.example.demo.PayLoadHandler;

@RestController
@RequestMapping("/json")
public class JsonController {
    
    private Map<String, Object> savedJson = Map.of();
    
    @GetMapping
    public Map<String, Object> getJson() {
        return savedJson;
    }
    
    @PostMapping
    public Map<String, Object> postJson(@RequestBody Payload payload) {
        /*
        This endpoint handles JSON data storage and retrieval using an in-memory cache.
        If the incoming payload contains a "uuid_key", it attempts to retrieve the associated JSON data
        from the cache. If found, it returns the data along with a success message. If not found ,
        create new UUID 
        
        */

        Payload resultPayload = PayLoadHandler.processPayload(payload);
        //System.out.println("Processed Payload: uuid_key=" + payload.getUuid_key() + ", value=" + payload.getValue());
        if (resultPayload != null) {
            String uuidKey = "";
            String value = "";
            
            if (resultPayload.getUuid_key() != null) {
                uuidKey = resultPayload.getUuid_key();
            }
            if (resultPayload.getValue() != null) {
                value = resultPayload.getValue();
            }
            return Map.of(
                "status", "success",
                "uuid_key", uuidKey,
                "value", value
            );
        } else {
            return Map.of(
                "status", "error",
                "message", "UUID key not found"
            );
        }
    }
}