package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
public class HelloController {

    @GetMapping("/")
    public String index() {
        return "index.html";
    }

    @GetMapping("/hello")
    @ResponseBody
    public Map<String, String> hello() {
        return Map.of("message", "Hello World");
    }
}
