package com.example.demo.cache;

public class MemoryItem {
    String key; // uuid
    String value; // json string
    // constructor
    public MemoryItem() {}
    public MemoryItem(String key, String value) {
        this.key = key;
        this.value = value;
        this.timestamp = System.currentTimeMillis();
    }

    long timestamp;

    public String getKey() {
        return key;
    }
    public Object getValue() {
        return value;
    }
    public long getTimestamp() {
        return timestamp;
    }

    public void setKey(String key) {
        this.key = key;
    }
    public void setValue(String value) {
        this.value = value;
    }
    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }
}