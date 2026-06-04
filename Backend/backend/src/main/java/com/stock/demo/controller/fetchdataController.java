package com.stock.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.stock.demo.entity.Holdings;
import com.stock.demo.entity.Orders;
import com.stock.demo.entity.Positions;
import com.stock.demo.service.fetchDataService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class fetchdataController {

    @Autowired
    private fetchDataService service;

    @GetMapping("/fetchHoldings")
    public List<Holdings> fetchHoldings() {
        return service.fetchHoldings();
    }

    @GetMapping("/fetchPositions")
    public List<Positions> fetchPositions() {
        return service.fetchPositions();
    }

    @GetMapping("/fetchOrders")
    public List<Orders> fetchOrders() {
        return service.fetchOrders();
    }
    
}
