package com.stock.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stock.demo.dto.OrderDTO;
import com.stock.demo.entity.Orders;
import com.stock.demo.repository.OrdersRepository;

@Service
public class OrdersService {
    
    @Autowired
    private OrdersRepository ordersRepository;

    public String storeOrder(OrderDTO dto){
        Orders o = new Orders();
        o.setName(dto.getName());
        o.setPrice(dto.getPrice());
        o.setQty(dto.getQty());
        o.setMode(dto.getMode());

        ordersRepository.save(o);
        return "Order Stored!";
    }
}   
