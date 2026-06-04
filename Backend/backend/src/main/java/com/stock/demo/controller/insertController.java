package com.stock.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.stock.demo.service.InsertData;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class insertController {

    @Autowired
    private InsertData service;

    @GetMapping("/insert")
    public String getMethodName() {
        service.insertHoldings();
        service.insertOrders();
        service.insertPositions();
        return "Insertion Done!";
    }
    
}
