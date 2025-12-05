package com.example.demo;

import com.example.demo.cache.Memory;
import com.example.demo.cache.MemoryItem;
//import com.example.demo.Payload;

public class PayLoadHandler {
    // process Payload object
    public static Payload processPayload(Payload payload) {
        // if payload.uuid_key exists, and payload.value is empty, return existing value (GET with a uuid_key)
        Payload newPayload = new Payload();
        System.out.println("Processed Payload: uuid_key=" + payload.getUuid_key() + ", value=" + payload.getValue());

        if (payload.getUuid_key() != null && (payload.getValue() == null || payload.getValue().isEmpty())) {
            String uuid_key = payload.getUuid_key();
            for (MemoryItem item : Memory.Memoryitems) {
                if (item.getKey().equals(uuid_key)) {
                    newPayload = new Payload(item.getKey(), (String) item.getValue());
                }
            }
            //return null; // not found
        }
        else if (payload.getUuid_key() != null && payload.getUuid_key().length() > 0 && payload.getValue() != null && !payload.getValue().isEmpty()) {
            // if payload.value exists, and payload.value exists, update existing value (POST with a uuid_key)
            String uuid_key = payload.getUuid_key();
            System.out.println("Updating existing UUID: " + uuid_key);
            System.out.println("New Value: " + payload.getValue());
            if (uuid_key != null && !uuid_key.isEmpty()) {
                for (MemoryItem item : Memory.Memoryitems) {
                    if (item.getKey().equals(uuid_key)) {
                        item.setValue(payload.getValue());
                        item.setTimestamp(System.currentTimeMillis());
                        newPayload = new Payload(item.getKey(), (String) item.getValue());
                    }
                }
            } 
        }
        // else payload.value exists, create new memory item and return uuid_key
        else if (payload.getValue() != null) {
            // create new uuid key
            String uuid_key = Memory.createMemoryKey();
            System.out.println("Creating new UUID: " + uuid_key);
            String value = payload.getValue();
            System.out.println("New Value: " + value);
            //String value = payload.getValue();
            MemoryItem item = Memory.createMemoryItem(uuid_key, value);
            Memory.addMemoryItem(item);
            // cleanup old items
            Memory.cleanupOldItems();
            newPayload = new Payload(uuid_key, value);
        }
        return newPayload;
    }
}
