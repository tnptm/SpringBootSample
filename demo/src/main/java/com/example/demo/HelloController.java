package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Map;

@Controller
public class HelloController {
    public static ArrayList<String> messages = new ArrayList<>(
        java.util.Arrays.asList(
            "Hello World",
            "Welcome to the Spring Boot Application",
            "This is a sample message",
            "Have a great day!",
            "Spring Boot with React is awesome!",
            "Enjoy coding your application",
            "Stay productive and happy!",
            "Keep learning new things",
            "Build amazing projects",
            "You are doing great!",
            "Success is just around the corner",
            "Believe in yourself",
            "Make the most of every day",
            "Coding is fun",
            "Create something incredible",
            "Push your limits",
            "Innovate and inspire",
            "Collaboration is key",
            "Think big, start small",
            "Never give up")
    );

    @GetMapping("/")
    public String index() {
        return "index.html";
    }

    @GetMapping("/hello")
    @ResponseBody
    public Map<String, String> hello() {
        // Select a random message from the list
        int randomIndex = (int) (Math.random() * messages.size());
        String randomMessage = messages.get(randomIndex);
        return Map.of("message", randomMessage, "msgIndex", String.valueOf(randomIndex));
    }
}
