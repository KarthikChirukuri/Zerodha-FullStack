package com.stock.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stock.demo.entity.Holdings;
import com.stock.demo.entity.Orders;
import com.stock.demo.entity.Positions;
import com.stock.demo.repository.HoldingsRepository;
import com.stock.demo.repository.OrdersRepository;
import com.stock.demo.repository.PositionsRepository;

@Service
public class fetchDataService {

    private static final Logger logger = LoggerFactory.getLogger(fetchDataService.class);
    
    @Autowired
    private HoldingsRepository holdingsRepository;

    @Autowired
    private PositionsRepository positionsRepository;

    @Autowired
    private OrdersRepository ordersRepository;

    public List<Holdings> fetchHoldings(){
        List<Holdings> list = new ArrayList<>();
        list = holdingsRepository.findAll();

        System.out.println(list);
        logger.info("Fetched Holdings Successfully!");

        return list;
    }

    public List<Positions> fetchPositions(){
        List<Positions> list = new ArrayList<>();
        list = positionsRepository.findAll();

        System.out.println(list);
        logger.info("Fetched Positions Successfully!");

        return list;
    }

    public List<Orders> fetchOrders(){
        List<Orders> list = new ArrayList<>();
        list = ordersRepository.findAll();

        System.out.println(list);
        logger.info("Fetched Orders Successfully!");

        return list;
    }

}
