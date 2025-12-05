package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/json")
public class JsonController {
    
    private Map<String, Object> savedJson = Map.of();
    
    @GetMapping
    public Map<String, Object> getJson() {
        return savedJson;
    }
    
    @PostMapping
    public Map<String, Object> postJson(@RequestBody Map<String, Object> payload) {
        savedJson = payload;
        return Map.of(
            "message", "Data received successfully",
            "saved", savedJson
        );
    }
}
