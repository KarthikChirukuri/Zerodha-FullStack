package com.stock.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.stock.demo.dto.OrderDTO;
import com.stock.demo.service.OrdersService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class ordersController {

    @Autowired
    private OrdersService service;

    @PostMapping("/addOrders")
    public String newOrders(@RequestBody OrderDTO dto) {
        return service.storeOrder(dto);
    }

    @PostMapping("/sellOrders")
    public String sellOrders(@RequestBody OrderDTO dto) {
        return service.storeOrder(dto);
    }
    
}
