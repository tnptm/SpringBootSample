package com.example.demo;

//import java.util.Optional;

public class Payload {
    public String uuid_key;
    public String value;

    // Constructors
    public Payload() {}
    public Payload(String uuid_key, String value) {
        this.uuid_key = uuid_key; // Optional.ofNullable(uuid_key);
        this.value = value; // Optional.ofNullable(value);
    }

    public String getUuid_key() {
        return uuid_key;//.orElse(null);
    }
    public void setUuid_key(String uuid_key) {
        this.uuid_key = uuid_key; //Optional.ofNullable(uuid_key);
    }

    public String getValue() {
        return value;//.orElse(null);
    }
    public void setValue(String value) {
        this.value = value; //Optional.ofNullable(value);
    }
}
