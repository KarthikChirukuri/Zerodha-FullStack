package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class basicController {
    @GetMapping("/")
    public String Hello() {
        return "Hello This is working!";
    }
    
}
