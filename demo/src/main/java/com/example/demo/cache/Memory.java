package com.example.demo.cache;

//import java.lang.reflect.Array;
import java.util.ArrayList;

//import java.util.UUID;
//import com.example.demo.cache.MemoryItem;

public class Memory {
    // 
    public static ArrayList<MemoryItem> Memoryitems = new ArrayList<>();

    // static method to greate memory key uuid
    public static String createMemoryKey() {
        return java.util.UUID.randomUUID().toString();
    }
    
    // create MemoryItem object
    public static MemoryItem createMemoryItem(String key, String value) {
        MemoryItem item = new MemoryItem();
        item.key = key;
        item.value = value;
        item.timestamp = System.currentTimeMillis();
        return item;
    }

    // static method to add memory item
    public static void addMemoryItem(MemoryItem item) {
        Memoryitems.add(item);
    }

    // older than 1 hour cleanup
    public static void cleanupOldItems() {
        // first check that number of MemoryItems doesn't exceed 1000
        if (Memoryitems.size() > 1000) {
            // sort by timestamp ascending
            Memoryitems.sort((a, b) -> Long.compare(a.timestamp, b.timestamp));
            // remove oldest items
            while (Memoryitems.size() > 800) {
                Memoryitems.remove(0);
            }
        }
        
        // remove items older than 1 hour
        long oneHourAgo = System.currentTimeMillis() - 3600000; // 1 hour in milliseconds
        Memoryitems.removeIf(item -> item.timestamp < oneHourAgo);
    }
}
